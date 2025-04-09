const assert = require("assert");
const pathify = require("../src/index").pathify;

const input1 = {
  user: {
    profile: {
      name: "",
      age: ""
    },
    settings: {
      theme: ""
    }
  }
};

const expected1 = {
  user: {
    profile: {
      name: "user.profile.name",
      age: "user.profile.age"
    },
    settings: {
      theme: "user.settings.theme"
    }
  }
};

assert.deepStrictEqual(pathify(input1), expected1);

// Test 2: With base path
const expected2 = {
  user: {
    profile: {
      name: "appData.user.profile.name",
      age: "appData.user.profile.age"
    },
    settings: {
      theme: "appData.user.settings.theme"
    }
  }
};

assert.deepStrictEqual(pathify(input1, "appData"), expected2);

// Test 3: Empty object
assert.deepStrictEqual(pathify({}), {});

console.log("✅ All tests passed!");
