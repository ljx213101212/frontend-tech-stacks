import { expect } from "chai";
// import asyncPool from "../lib/es9.js";
import asyncPool from "../asyncPool_practice.js";

const doTask = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 10);
  });
};

const interfaceIds = Array.from(new Array(101), (_v, i) => i + 1);

describe("asyncPool", function () {
  it("only runs as many promises in parallel as given by the pool limit", async function () {
    const gen = asyncPool(10, interfaceIds, doTask);
    await Promise.all(
      interfaceIds.map(async (id) => {
        expect((await gen.next()).value).to.equal(id);
      })
    );
  });

  it("runs all promises in parallel when the pool is bigger than needed", async function () {
    const gen = asyncPool(2, [10, 50, 30, 20], doTask);
    expect((await gen.next()).value).to.equal(10);
    expect((await gen.next()).value).to.equal(50);
    expect((await gen.next()).value).to.equal(30);
    expect((await gen.next()).value).to.equal(20);
  });
});
