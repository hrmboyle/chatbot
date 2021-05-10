/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 1;

const getBotReply = (msg) => {
  if (level === 1) {
    level = 2;
    return "Are you feeling energised or relaxed?";
  }

  if (level === 2) {
    level = 3;
    if (msg === "no" || msg === "relaxed" || msg === "n") {
      return "How about going for a nap? Maybe you might lucid dream!";
    }
    if (msg === "yes" || msg === "energised" || msg === "y") {
      return "How about we go for a run? Who knows, maybe you might get a runners high!";
    }
  }

  if (level === 3) {
    level = 4;
    if (msg === "no") {
      return "Okay then, what about some <a href = 'https://www.google.com'>yoga?</a>";
    }

    if (msg === "yes") {
      return "well sweet as";
    }
  }

  if (level === 4) {
    level = 5;
    if (msg === "no" || msg === "nah" || msg === "n") {
      return "Alright then, what about some <a href = 'https://www.google.com'>Tai Chi?</a>";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 5) {
    level = 6;
    if (msg === "no" || msg === "nah" || msg === "n") {
      return "Forest walk up your alley?";
    }
    if (msg === "yes" || msg === "sure" || msg === "y") {
      return "cool";
    }
  }

  if (level === 6) {
    level = 7;
    if ((msg = "no" || "nah" || "n")) {
      return "How about some Disc Golf?";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 7) {
    level = 8;
    if ((msg = "no" || "nah" || "n")) {
      return "Ahh, how about solving some of the worlds hardest math problems?";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 8) {
    level = 9;
    if ((msg = "no" || "nah" || "n")) {
      return "maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 9) {
    level = 10;
    if ((msg = "no" || "nah" || "n")) {
      return "Okay then... How about a good old fashion rave?";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 10) {
    level = 11;
    if ((msg = "no" || "nah" || "n")) {
      return "Go freediving then!";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }

  if (level === 11) {
    level = 12;
    if ((msg = "no" || "nah" || "n")) {
      return "Okay, ahh,";
    }
    if ((msg = "yes" || "sure" || "y")) {
      return "cool";
    }
  }
};

export { getBotReply };
