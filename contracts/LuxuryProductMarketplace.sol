// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract LuxuryProductMarketplace {
    
    address public platformOwner;
    
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address payable seller;
        bytes32 certHash;  // Hash of the certificate to authenticate product
        bool isSold;
    }
    
    uint256 public productCount = 0;
    mapping(uint256 => Product) public products;

    event ProductAdded(uint256 id, string name, uint256 price, address seller, bytes32 certHash);
    event ProductBought(uint256 id, address buyer, uint256 price);
    event CertHashCreated(bytes32 certHash);

    modifier onlyPlatformOwner() {
        require(msg.sender == platformOwner, "Only platform owner can perform this action.");
        _;
    }

    modifier notSold(uint256 _productId) {
        require(!products[_productId].isSold, "Product has already been sold.");
        _;
    }

    modifier productExists(uint256 _productId) {
        require(_productId > 0 && _productId <= productCount, "Product does not exist.");
        _;
    }
    
    constructor() {
        platformOwner = msg.sender;
    }

    // Function to create certHash from product details and emit the hash as an event
    function createCertHash(string memory _productName, string memory _serialNumber, string memory _manufacturer, uint256 _issueDate) public pure returns (bytes32) {
    return keccak256(abi.encodePacked(_productName, _serialNumber, _manufacturer, _issueDate));
}

    // Function for the seller to add a luxury product with certHash
    function addProduct(string memory _name, uint256 _price, bytes32 _certHash) public {
        require(_price > 0, "Price must be greater than 0.");

        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            _price,
            payable(msg.sender),
            _certHash,  // Certificate Hash to authenticate
            false
        );

        // Emit an event when the product is added, including the certHash
        emit ProductAdded(productCount, _name, _price, msg.sender, _certHash);
    }

    // Function for the buyer to purchase a product
    function buyProduct(uint256 _productId, bytes32 _certHash) public payable productExists(_productId) notSold(_productId) {
        Product memory _product = products[_productId];
        
        require(msg.value == _product.price, "Incorrect Ether value sent.");
        require(_certHash == _product.certHash, "Certificate does not match the product's certificate.");
        
        _product.seller.transfer(msg.value);  // Transfer ETH to the seller
        products[_productId].isSold = true;   // Mark the product as sold

        emit ProductBought(_productId, msg.sender, msg.value);
    }

    // Verify if the product certificate is valid before purchase
    function verifyCertificate(uint256 _productId, bytes32 _certHash) public view productExists(_productId) returns (bool) {
        Product memory _product = products[_productId];
        return (_certHash == _product.certHash);
    }

    // Function to show the certHash of a product
    function showCertHash(uint256 _productId) public view productExists(_productId) returns (bytes32) {
        return products[_productId].certHash;
    }
}
