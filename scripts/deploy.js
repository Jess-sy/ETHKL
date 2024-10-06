const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying the contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Marketplace = await ethers.getContractFactory("LuxuryProductMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();
  console.log("LuxuryProductMarketplace deployed to:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
