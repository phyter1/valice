import { removeProperties } from "../../../../src/utlity/object/removeProperties";

describe("Object - Remove Properties - removeProperties", () => {
    test("it removes a single property from an object", () => {
        const obj = { p1: "text", p2: 1, p3: { p3a: "text" } };
        const props = "p2";
        const result = removeProperties(props, obj);
        expect(result).toHaveProperty("p1");
        expect(result).toHaveProperty("p3");
        expect(result).not.toHaveProperty("p2");
    });
});
