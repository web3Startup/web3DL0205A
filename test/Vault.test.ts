import {AddressZero, setupFixture,} from "../helpers/utils";
import {expect} from "chai";
import {parseEther} from "ethers/lib/utils";

describe("Vault", async () => {
    let owner, user0, user1, user2;
    let vault,ethX;
    beforeEach(async () => {
        let fixture = await setupFixture();
        owner = fixture.owner;
        user0 = fixture.user0;
        user1 = fixture.user1;
        user2 = fixture.user2;

        vault = fixture.vault;
        ethX = fixture.ethX;
    })
    it("Vault.func => setMaxLeverage", async () => {
        const v = vault;
        expect(v.address).not.eq(AddressZero);
        console.log(`${await v.getAmount()}`);
        console.log(`${await v.getUnlockTime()}`);

        await v.setFeeAddress(AddressZero);
    });

    it("ETHX.func =>", async() => {
        const x = ethX;
        await x.initialize(owner.address);

        await x.grantRole(await x.MINTER_ROLE(), user0.address);
        await x.connect(user0).mint(user0.address,parseEther("1000"));

        await x.grantRole(await x.BURNER_ROLE(), user0.address);
        await x.connect(user0).burnFrom(user0.address,parseEther("1000"));
    });
});

