const { ethers } = require("hardhat")

async function main() {
    const { deployer } = await ethers.getSigners()
    const Contract = await ethers.getContractFactory("BasicNft")
    const contract = await Contract.deploy()
    console.log(`Deployed at : ${contract.target}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
