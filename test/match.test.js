const { default: expect } = require("expect");

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        if (received >= floor && received <= ceiling) {
            return {
                pass: true,
                message: () => `${received} is in range (${floor}, ${ceiling})`,
            };
        } else {
            return {
                pass: false,
                message: () => `${received} is not in range (${floor}, ${ceiling})`,
            };
        }
    },
});

test("custom matcher", () => {
    expect(1).toBeWithinRange(1, 10);
});
