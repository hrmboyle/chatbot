/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 1;
let path;

const getBotReply = (msg) => {
  if (level === 1) {
    level = 2;
    return "Are you feeling energised or relaxed?";
  }

  if (level === 2) {
    level = 3;
    if (msg === "no" || msg === "relaxed" || msg === "n") {
      path = "no";
      return "How about going for a nap? Maybe you might lucid dream!";
    }

    if (msg === "yes" || msg === "energised" || msg === "y") {
      path = "yes";
      return "How about we go for a run? Who knows, maybe you might get a runners high!";
    }
  }

  if (level === 3) {
    if (path === "yes") {
      if (msg === "no") {
        return "Okay then, what about some <a href = 'https://www.google.com'>yoga?</a>";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }

    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
    level = 4;
  }

  if (level === 4) {
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Alright then, what about some <a href = 'https://www.google.com'>Tai Chi?</a>";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }

      if (path === "no") {
        if (msg === "no") {
          return "Allright then, how about some good old meditation";
        }

        if (msg === "yes") {
          return "well sweet as";
        }
      }

      level = 5;
    }
  }

  if (level === 5) {
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        path = "no";
        return "Forest walk up your alley?";
      }
      if (msg === "yes" || msg === "sure" || msg === "y") {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }

    level = 6;
  }

  if (level === 6) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "How about some Disc Golf?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }

    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }

    level = 7;
  }

  if (level === 7) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "Ahh, how about solving some of the worlds hardest math problems?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
      level = 8;
    }
  }

  if (level === 8) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
      if (path === "no") {
        if (msg === "no") {
          return "Allright then, how about some good old meditation";
        }

        if (msg === "yes") {
          return "well sweet as";
        }
      }
      level = 9;
    }
  }

  if (level === 9) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "Okay then... How about a good old fashion rave?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
    level = 10;
  }

  if (level === 10) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "Go freediving then!";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
    level = 11;
  }

  if (level === 11) {
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        path = "no";
        return "Okay, ahh,";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Allright then, how about some good old meditation";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
    level = 12;
  }
};

export { getBotReply };
