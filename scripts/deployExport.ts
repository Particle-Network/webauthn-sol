import hre, { ethers } from "hardhat";

async function main() {
  const provider = ethers.provider;
  const from = await (await provider.getSigner()).getAddress();

  // const gasPrice = ethers.utils.parseUnits('10', 'gwei');

  const ret = await hre.deployments.deploy("Export", {
    from,
    args: [],
    // gasPrice: gasPrice,
    // gasLimit: 2000000,
    deterministicDeployment: true,
  });

  console.log("SmartAccount Address", ret.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
