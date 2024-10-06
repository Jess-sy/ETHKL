import { expect } from "chai";
import { ethers } from "hardhat";

describe("LuxuryProductMarketplace", function () {
  async function deployMarketplaceFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Marketplace = await ethers.getContractFactory("LuxuryProductMarketplace");
    const marketplace = await Marketplace.deploy();
    await marketplace.deployed();
    return { marketplace, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right platform owner", async function () {
      const { marketplace, owner } = await deployMarketplaceFixture();
      expect(await marketplace.platformOwner()).to.equal(owner.address);
    });
  });

  describe("Product Management", function () {
    it("Should allow a seller to add a product", async function () {
      const { marketplace, otherAccount } = await deployMarketplaceFixture();
      const certHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("product123"));

      // Seller adds a product
      await marketplace.connect(otherAccount).addProduct("Luxury Watch", 1000, certHash);

      const product = await marketplace.products(1);  // First product added
      expect(product.name).to.equal("Luxury Watch");
      expect(product.price).to.equal(1000);
      expect(product.certHash).to.equal(certHash);
      expect(product.seller).to.equal(otherAccount.address);
      expect(product.isSold).to.be.false;
    });

    it("Should allow a buyer to purchase a product", async function () {
      const { marketplace, owner, otherAccount } = await deployMarketplaceFixture();
      const certHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("product123"));

      // Seller adds a product
      await marketplace.connect(otherAccount).addProduct("Luxury Watch", 1000, certHash);

      // Buyer purchases the product
      await marketplace.connect(owner).buyProduct(1, certHash, { value: 1000 });

      const product = await marketplace.products(1);
      expect(product.isSold).to.be.true;
    });

    it("Should fail if the product certificate hash does not match during purchase", async function () {
      const { marketplace, otherAccount, owner } = await deployMarketplaceFixture();
      const certHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("product123"));

      // Seller adds a product
      await marketplace.connect(otherAccount).addProduct("Luxury Watch", 1000, certHash);

      // Buyer attempts to purchase the product with an incorrect certHash
      const wrongCertHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("wrongProduct"));
      await expect(
        marketplace.connect(owner).buyProduct(1, wrongCertHash, { value: 1000 })
      ).to.be.revertedWith("Certificate does not match the product's certificate.");
    });
  });

  describe("Certificate Hash", function () {
    it("Should create the correct certHash", async function () {
      const { marketplace } = await deployMarketplaceFixture();
    
      const productName = "Luxury Watch";
      const serialNumber = "12345";
      const manufacturer = "BrandA";
      const issueDate = 20231006;
    
      // Call the contract to create the certHash
      const certHash = await marketplace.createCertHash(productName, serialNumber, manufacturer, issueDate);
    
      // Expected hash using ethers.utils.solidityKeccak256 which replicates abi.encodePacked from Solidity
      const expectedHash = ethers.utils.solidityKeccak256(
        ["string", "string", "string", "uint256"],
        [productName, serialNumber, manufacturer, issueDate]
      );
    
      // Assert that the certHash from the contract matches the expected hash
      expect(certHash).to.equal(expectedHash);
    });
  });
});