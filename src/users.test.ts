import Users from "./users";
import { IApi } from "./interface-api";

describe("Constructor error assertion", () => {
    test(`Should throw an Error if the constructor
     is missing or bad`, () => {
        const urlMissing = new Error("An argument for 'url' was not provided");
        const endpointMissing = new Error("An argument for 'endpoint' was not provided");
        const typeError = new Error("Argument of type 'number' is not assignable to parameter of type 'string'");

        expect(new Users()).toBe(urlMissing);

        })
})

// // Output of npx jest: ERROR
// ({"Object.<anonymous>":function(
//    module,exports,require,__dirname,__filename,jest
//){import Users from "./users";