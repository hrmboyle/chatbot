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
  it("Branch Energised", () => {
    const botReply0 = getBotReply("Henry");
    const expectedReply0 = `Hi Henry, my humble task is to point you in the direction of something to do. I am a simple being, so please respond simply. For the majority of answers, a simply yes or no will suffice. But hey let's push the envelope a little here, to begin, type ok`;
    expect(botReply0).toEqual(expectedReply0);

    const botReply1 = getBotReply("ok");

    const expectedReply1 =
      "Great, now tell me, are you feeling energised or relaxed?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("energised");

    const expectedReply2 =
      "How about we go for a run? Who knows, maybe you might get a runners high!";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");

    const expectedReply3 = "Okay then, what about some yoga?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");

    const expectedReply4 = "Alright then, what about some Tai Chi?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("no");

    const expectedReply5 = "Forest walk up your alley?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("no");

    const expectedReply6 = "How about some Disc Golf?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("no");

    const expectedReply7 =
      "Ahh, how about solving some of the worlds hardest math problems?";
    expect(botReply7).toEqual(expectedReply7);

    const botReply8 = getBotReply("no");

    const expectedReply8 =
      "Maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
    expect(botReply8).toEqual(expectedReply8);

    const botReply9 = getBotReply("no");

    const expectedReply9 = "Go freediving then!";
    expect(botReply9).toEqual(expectedReply9);

    const botReply10 = getBotReply("no");

    const expectedReply10 = "Okay, skydiving?";
    expect(botReply10).toEqual(expectedReply10);

    const botReply11 = getBotReply("no");

    const expectedReply11 =
      "What about starting a new <strike>cult</strike> religion?";
    expect(botReply11).toEqual(expectedReply11);

    const botReply12 = getBotReply("no");

    const expectedReply12 =
      "How about you go delve into the realms of Virtual Reality?";
    expect(botReply12).toEqual(expectedReply12);

    const botReply13 = getBotReply("no");

    const expectedReply13 = "Okay okay, why don't you go plant some trees?";
    expect(botReply13).toEqual(expectedReply13);

    const botReply14 = getBotReply("no");

    const expectedReply14 =
      "Not so keen on trees huh? Why don't you do your best to destablise central government banking?";
    expect(botReply14).toEqual(expectedReply14);

    const botReply15 = getBotReply("no");

    const expectedReply15 =
      "Okay, I am reaching my wits end. You could go and learn to fly drones?";
    expect(botReply15).toEqual(expectedReply15);

    const botReply16 = getBotReply("no");

    const expectedReply16 =
      "Yeah I thought so. Alas, I have computed the options, you simply wan't to test my very patience. I cannot compute more, if you want to go back to the beginning let me know with a simple yes.";
    expect(botReply16).toEqual(expectedReply16);
  });
  // const botReply1 = getBotReply("energised" || "yes");
  // const expectedReply1 =
  //   "Fair enough, how about some yoga?";

  // Uncomment the following line and update your expectation
  // expect(botReply1).toEqual(expectedReply1);
  it("two", () => {
    const botReply0 = getBotReply("Henry");
    const expectedReply0 = `Hi Henry, my humble task is to point you in the direction of something to do. I am a simple being, so please respond simply. For the majority of answers, a simply yes or no will suffice. But hey let's push the envelope a little here, to begin, type ok`;
    expect(botReply0).toEqual(expectedReply0);

    const botReply1 = getBotReply("ok");

    const expectedReply1 =
      "Great, now tell me, are you feeling energised or relaxed?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("relaxed");

    const expectedReply2 =
      "How about going for a nap? Maybe you might lucid dream!";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");

    const expectedReply3 =
      "well sweet as - <a href=https://obe4u.com/files/the_phase.pdf>here is a book that might help</a>";
    expect(botReply3).toEqual(expectedReply3);
  });
});
