// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("one", () => {
    // Input: Henry
    const botReply1 = getBotReply("Henry");
    // Output: Are you feeling energised or relaxed?
    const expectedReply1 = "Are you feeling energised or relaxed?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("energised");

    const expectedReply2 =
      "How about we go for a run? Who knows, maybe you might get a runners high!";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");

    const expectedReply3 =
      "Okay then, what about some <a href = 'https://www.google.com'>yoga?</a>";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");

    const expectedReply4 =
      "Alright then, what about some <a href = 'https://www.google.com'>Tai Chi?</a>";
    expect(botReply3).toEqual(expectedReply3);

    const botReply5 = getBotReply("no");

    const expectedReply5 = "Forest walk up your alley?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply6 = getBotReply("no");

    const expectedReply6 = "How about some Disc Golf?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply7 = getBotReply("no");

    const expectedReply7 =
      "Ahh, how about solving some of the worlds hardest math problems?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply8 = getBotReply("no");

    const expectedReply8 =
      "maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply9 = getBotReply("no");

    const expectedReply9 = "Okay then... How about a good old fashion rave?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply10 = getBotReply("no");

    const expectedReply10 = "Go freediving then!";
    expect(botReply3).toEqual(expectedReply3);

    const botReply11 = getBotReply("no");

    const expectedReply11 = "Okay, ahh,";
    expect(botReply3).toEqual(expectedReply3);

    // const botReply1 = getBotReply("energised" || "yes");
    // const expectedReply1 =
    //   "Fair enough, how about some yoga?";

    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});
