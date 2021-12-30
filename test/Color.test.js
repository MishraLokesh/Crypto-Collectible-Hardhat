const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deployed", function () {
  it("Should return the details of token", async function () {
    const Greeter = await ethers.getContractFactory("Color");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    expect(await greeter.name()).to.equal("Color");
    expect(await greeter.symbol()).to.equal("COLOR");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});