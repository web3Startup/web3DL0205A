import {deployments, ethers, getChainId} from "hardhat";
import {ETHx, Vault} from "../typechain";
export const {AddressZero, MaxInt256: ApproveAmount} = ethers.constants
export const setupFixture = deployments.createFixture(async () => {
    await deployments.fixture();
    return getContracts();
});
export async function getContracts() {
    const chainId = await getChainId();
    const contracts: any = {
        vault: await ethers.getContract<Vault>("Vault"),
        ethX : await ethers.getContract<ETHx>("ETHx"),
    };

    let users: any = {
        owner: await ethers.getNamedSigner("owner"),
        user0: await ethers.getNamedSigner("user0"),
        user1: await ethers.getNamedSigner("user1"),
        user2: await ethers.getNamedSigner("user2"),
        user3: await ethers.getNamedSigner("user3"),
    }
    return {...contracts, ...users};
}



