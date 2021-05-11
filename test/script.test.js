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
      "maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
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
      "Okay (name), I am reaching my wits end. You could go and learn to fly drones?";
    expect(botReply15).toEqual(expectedReply15);

    const botReply16 = getBotReply("no");

    const expectedReply16 =
      "Yeah I thought so. Alas, I have computed the options, you simply wan't to test my very patience. I cannot compute more, if you want to go back to the beginning let me know with a simple yes, otherwise, here are some more sophisticated kin of mine";
    expect(botReply16).toEqual(expectedReply16);
  });
  // const botReply1 = getBotReply("energised" || "yes");
  // const expectedReply1 =
  //   "Fair enough, how about some yoga?";

  // Uncomment the following line and update your expectation
  // expect(botReply1).toEqual(expectedReply1);
  it("two", () => {
    // Input: Henry
    const botReply1 = getBotReply("Henry");
    // Output: Are you feeling energised or relaxed?
    const expectedReply1 = "Are you feeling energised or relaxed?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("relaxed");

    const expectedReply2 =
      "How about going for a nap? Maybe you might lucid dream!";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");

    const expectedReply3 = "Allright then, how about some good old meditation";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");

    const expectedReply4 =
      "Go jump in a float tank, you may well astral project!";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("no");

    const expectedReply5 =
      "No? Why don't you go sit under a tree, meditate on the essence of being and come to the shores of deeper a connection to all that is?";
    expect(botReply5).toEqual(expectedReply5);

    const botReply6 = getBotReply("no");

    const expectedReply6 =
      "Okay, that last one is a bit of admin. Why don't we go ahead and watch a film instead?";
    expect(botReply6).toEqual(expectedReply6);

    const botReply7 = getBotReply("no");

    const expectedReply7 =
      "Well, I headrd theres this software that aims to get you high without drugs?";
    expect(botReply7).toEqual(expectedReply7);

    const botReply8 = getBotReply("no");

    const expectedReply8 =
      "Alas - why not explore the largest number you can count to in your head?";
    expect(botReply8).toEqual(expectedReply8);

    const botReply9 = getBotReply("no");

    const expectedReply9 =
      "Yeah I would not want to do that either, but, I also heard you can get quite the rush by simple breathwork?";
    expect(botReply9).toEqual(expectedReply9);

    const botReply10 = getBotReply("no");

    const expectedReply10 =
      "Okay, how about, contemplating the existential dred that comes in our modern era, then with the power of interpretive dance, freeing yourself from the shackles of malignent thoughts?";
    expect(botReply10).toEqual(expectedReply10);

    const botReply11 = getBotReply("no");

    const expectedReply11 =
      "Thought that was it for sure eh. Well, go read a book?";
    expect(botReply11).toEqual(expectedReply11);

    const botReply12 = getBotReply("no");

    const expectedReply12 = "What about reading a comic?";
    expect(botReply12).toEqual(expectedReply12);

    const botReply13 = getBotReply("no");

    const expectedReply13 =
      "Well, if you aren't up to reading, why not do some writing?";
    expect(botReply13).toEqual(expectedReply13);

    const botReply14 = getBotReply("no");

    const expectedReply14 =
      "Look, I am running low on ideas here, maybe start of a career in painting as an abstract impressionist?";
    expect(botReply14).toEqual(expectedReply14);

    const botReply15 = getBotReply("no");

    const expectedReply15 =
      "Well, why not instigate a premonition that will forever change the trajectory of your being?";
    expect(botReply15).toEqual(expectedReply15);

    const botReply16 = getBotReply("no");

    const expectedReply16 =
      "Well, all I can offer from here is whether or not you want to go back to the beginning of our conversation. Let me know with a humble yes (which you have been so determined to deny me!) if not, you can always go and choose what it is you wish to do";
    expect(botReply16).toEqual(expectedReply16);
  });
});
