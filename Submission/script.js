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
    level = 4;
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
  }

  if (level === 4) {
    level = 5;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Alright then, what about some <a href = 'https://www.google.com'>Tai Chi?</a>";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }

    if (path === "no") {
      if (msg === "no") {
        return "Go jump in a float tank, you may well astral project!";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 5) {
    level = 6;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Forest walk up your alley?";
      }
      if (msg === "yes" || msg === "sure" || msg === "y") {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "No? Why don't you go sit under a tree, meditate on the essence of being and come to the shores of deeper a connection to all that is?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 6) {
    level = 7;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "How about some Disc Golf?";
      }
      if (msg === "yes" || msg === "sure" || msg === "y") {
        return "cool";
      }
    }

    if (path === "no") {
      if (msg === "no") {
        return "Okay, that last one is a bit of admin. Why don't we go ahead and watch a film instead?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 7) {
    level = 8;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Ahh, how about solving some of the worlds hardest math problems?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Well, I headrd theres this software that aims to get you high without drugs?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 8) {
    level = 9;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Alas - why not explore the largest number you can count to in your head?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 9) {
    level = 10;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Go freediving then!";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Yeah I would not want to do that either, but, I also heard you can get quite the rush by simple breathwork?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 10) {
    level = 11;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Okay, skydiving?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Okay, how about, contemplating the existential dred that comes in our modern era, then with the power of interpretive dance, freeing yourself from the shackles of malignent thoughts?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 11) {
    level = 12;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "What about starting a new <strike>cult</strike> religion?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Thought that was it for sure eh. Well, go read a book?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 12) {
    level = 13;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "How about you go delve into the realms of Virtual Reality?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "What about reading a comic?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 13) {
    level = 14;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Okay okay, why don't you go plant some trees?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Well, if you aren't up to reading, why not do some writing?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 14) {
    level = 15;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Not so keen on trees huh? Why don't you do your best to destablise central government banking?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Look, I am running low on ideas here, maybe start of a career in painting as an abstract impressionist?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 15) {
    level = 16;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Okay (name), I am reaching my wits end. You could go and learn to fly drones?";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Well, why not instigate a premonition that will forever change the trajectory of your being?";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }

  if (level === 16) {
    level = 17;
    if (path === "yes") {
      if ((msg = "no" || "nah" || "n")) {
        return "Yeah I thought so. Alas, I have computed the options, you simply wan't to test my very patience. I cannot compute more, if you want to go back to the beginning let me know with a simple yes, otherwise, here are some more sophisticated kin of mine";
      }
      if ((msg = "yes" || "sure" || "y")) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no") {
        return "Well, all I can offer from here is whether or not you want to go back to the beginning of our conversation. Let me know with a humble yes (which you have been so determined to deny me!) if not, you can always go and choose what it is you wish to do";
      }

      if (msg === "yes") {
        return "well sweet as";
      }
    }
  }
};

export { getBotReply };
