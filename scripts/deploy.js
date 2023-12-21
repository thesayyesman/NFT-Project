const { ethers } = require("hardhat");

// const tokens = (n) => {
//   return ethers.parseEther(n.toString());
// };

async function main() {
  const [deployer] = await ethers.getSigners();

  const Contract = await ethers.getContractFactory("nft");
  const contract = await Contract.deploy();

  console.log(`Deployed at ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
