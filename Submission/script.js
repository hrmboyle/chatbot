/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 0;
let path;

const yes = (msg) => {
  return (
    msg === "yes" ||
    msg === "y" ||
    msg === "Okay" ||
    msg === "okay" ||
    msg === "ok" ||
    msg === "OKAY" ||
    msg === "k" ||
    msg === "sure" ||
    msg === "Sure" ||
    msg === "ye" ||
    msg === "yeet" ||
    msg === "YEET"
  );
};

const getBotReply = (msg) => {
  if (
    msg === "reset" ||
    msg === "Reset" ||
    msg === "RESET" ||
    msg === "return" ||
    msg === "Return" ||
    msg === "RETURN" ||
    msg === "restart" ||
    msg === "Restart" ||
    msg === "RESTART"
  ) {
    level = 2;
    path = undefined;
    return "Back to the beginning then! Are you feeling energised or relaxed?";
  }
  if (level === 0) {
    level = 1;
    return `Hi ${msg}, my humble task is to point you in the direction of something to do. I am a simple being, so please respond simply. If you get lost in my breadth and depth of universal wisdom, type reset at any time, we can take it from the top. For the majority of answers, a simply yes or no will suffice. But hey let's push the envelope a little here, to begin, type ok`;
  }

  if (level === 1) {
    level = 2;
    if (msg === "ok" || msg === "OK" || msg === "okay" || msg === "Okay") {
      return "Great, now tell me, are you feeling energised or relaxed?";
    }
  }

  if (level === 2) {
    level = 3;
    if (msg === "no" || msg === "relaxed" || msg === "n") {
      path = "no"; //RELAXED
      return "How about going for a nap? Maybe you might lucid dream!";
    }

    if (
      msg === "yes" ||
      msg === "energised" ||
      msg === "Energised" ||
      msg === "energized"
    ) {
      path = "yes"; //ENERGISED
      return "How about we go for a run? Who knows, maybe you might get a runners high!";
    }
    level = 2;
    return "oop, try again, remember I am not that clever, feeling <u>energised</u> or <u>relaxed</u>?";
  }

  if (level === 3) {
    level = 4;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay then, what about some yoga?";
      }

      if (yes(msg)) {
        return "Great news, that was really easy! To learn more about runners high, <a href='https://www.runnersworld.com/training/a20851505/how-to-achieve-a-runners-high/'>click here</a>";
      }
    }

    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Alright then, how about some good old meditation";
      }

      if (yes(msg)) {
        return "well sweet as - <a href='https://obe4u.com/files/the_phase.pdf'>here is a book that might help</a>";
      }
    }
    level = 3;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 4) {
    level = 5;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Alright then, what about some Tai Chi?";
      }
      if (yes(msg)) {
        return "That's great, to learn more about yoga <a href='https://www.doyou.com/8-types-of-yoga-explained-16100/'> click here</a>. If you want to take things from the top again type reset";
      }
    }

    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Go jump in a float tank, you may well astral project!";
      }

      if (yes(msg)) {
        return "That's great, to learn more about meditation <a href='https://www.mindful.org/how-to-meditate/'>click here</a>. If you want to take things from the top again type reset";
      }
    }
    level = 4;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 5) {
    level = 6;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Forest walk up your alley?";
      }
      if (yes(msg)) {
        return "That's great, to learn more about yoga <a href='https://en.wikipedia.org/wiki/Tai_chi'> click here</a>. If you want to take things from the top again return";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "No? Why don't you go sit under a tree, meditate on the essence of being and come to the shores of deeper a connection to all that is?";
      }

      if (yes(msg)) {
        return "Cool cool cool, <a href='https://floatationlocations.com/category/new-zealand/'>here is a list of places to go</a>";
      }
    }
    level = 5;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 6) {
    level = 7;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "How about some Disc Golf?";
      }
      if (yes(msg)) {
        return "Nice one, <a href='https://cutt.ly/4bDRZI6'>this link might help</a>";
      }
    }

    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay, that last one is a bit of admin. Why don't we go ahead and watch a film instead?";
      }

      if (yes(msg)) {
        return "Very nice choice. There are no hyperlinks for this one. You will need good old fashion intuition. ";
      }
    }
    level = 6;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 7) {
    level = 8;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Ahh, how about solving some of the worlds hardest math problems?";
      }
      if (yes(msg)) {
        return "nice1 - well <a href='https://www.udisc.com/courses'> here are some courses</a>";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Well, I heard theres this software that aims to get you high without drugs?";
      }

      if (yes(msg)) {
        return "cool, <a href ='https://pickamovieforme.com/'>this website will help</a>";
      }
    }
    level = 7;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 8) {
    level = 9;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Maybe we could give praise to the singularity? Ever heard of Roko's Basilisk?";
      }
      if (yes(msg)) {
        return "You savage. <a href='https://www.popularmechanics.com/science/math/g29251596/impossible-math-problems/'>Go on, have at it then</a>";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Alas - why not explore the largest number you can count to in your head?";
      }

      if (yes(msg)) {
        return "I dunno how legit it is, but <a href='https://i-doser.com/'>check it here</a>";
      }
    }
    level = 8;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 9) {
    level = 10;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Go freediving then!";
      }
      if (yes(msg)) {
        return "<a href=`https://rationalwiki.org/wiki/Roko's_basilisk`>Read on up here</a>";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Yeah I would not want to do that either, but, I also heard you can get quite the rush by simple breathwork?";
      }

      if (yes(msg)) {
        return "Good luck... one... two... three...";
      }
    }
    level = 9;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 10) {
    level = 11;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay, skydiving?";
      }
      if (yes(msg)) {
        return "Awesome, well now you know, of you go.";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay, how about, contemplating the existential dred that comes in our modern era, then with the power of interpretive dance, freeing yourself from the shackles of malignent thoughts?";
      }

      if (yes(msg)) {
        return "<a href='https://www.verywellmind.com/holotropic-breathwork-4175431'>Holotropic breathing is the name</a>";
      }
    }
    level = 10;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 11) {
    level = 12;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "What about starting a new <strike>cult</strike> religion?";
      }
      if (yes(msg)) {
        return "Too easy, on your merry way to the sky then";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Thought that was it for sure eh. Well, go read a book?";
      }

      if (yes(msg)) {
        return "Best of luck, I can't give any links for this, it's more of a feel it out for yourself situation";
      }
    }
    level = 11;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 12) {
    level = 13;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "How about you go delve into the realms of Virtual Reality?";
      }
      if (yes(msg)) {
        return "<a href='https://www.wikihow.com/Start-a-Cult'>Lucky there is a wikiHow article.</a>";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "What about reading a comic?";
      }

      if (yes(msg)) {
        return "Well chosen, <a href='https://www.lifehack.org/articles/technology/10-best-book-recommendation-sites-you-need-know.html'>this resource</a> might help in your endeavour";
      }
    }
    level = 12;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 13) {
    level = 14;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay okay, why don't you go plant some trees?";
      }
      if (yes(msg)) {
        return "Nice one, <a href='https://cutt.ly/5bDTG2z'>this might help.</a>";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Well, if you aren't up to reading, why not do some writing?";
      }

      if (yes(msg)) {
        return "Nice one, well, be done with me, close me down!";
      }
    }
    level = 13;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 14) {
    level = 15;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Not so keen on trees huh? Why don't you do your best to destablise central government banking?";
      }
      if (yes(msg)) {
        return "<a href='https://www.wikihow.com/Plant-a-Tree'>Here be</a> some essential reading on the topic.";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Look, I am running low on ideas here, maybe start of a career in painting as an abstract impressionist?";
      }

      if (yes(msg)) {
        return "Easy, <a href='https://www.servicescape.com/writing-prompt-generator'>this might help</a>";
      }
    }
    level = 14;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 15) {
    level = 16;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Okay, I am reaching my wits end. You could go and learn to fly drones?";
      }
      if (yes(msg)) {
        return "Bold choice, well, I suggest making in a private and personal endeavour. Be careful who you work with on your quest, don't want to end up on a 'list'";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Well, why not instigate a premonition that will forever change the trajectory of your being?";
      }

      if (yes(msg)) {
        return "Good luck on the new endeavour! Here is a <a href='https://osnatfineart.com/abstract-art-blog/37/how-to-paint-abstract-impressionismlittle'>guide</a>";
      }
    }
    level = 15;
    return "cannot compute, try once more, remember, yes or no";
  }

  if (level === 16) {
    level = 17;
    if (path === "yes") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Yeah I thought so. Alas, I have computed the options, you simply wan't to test my very patience. I cannot compute more, if you want to go back to the beginning let me know with a 'return'.";
      }
      if (yes(msg)) {
        return "cool";
      }
    }
    if (path === "no") {
      if (msg === "no" || msg === "nah" || msg === "n") {
        return "Well, all I can offer from here is whether or not you want to go back to the beginning of our conversation. Let me know with a humble 'return' (which you have been so determined to deny me!) if not, you can always go and choose what it is you wish to do";
      }
    }
  }

  if (level === 17) {
    return "cannot compute m8 - type return or reset to kick me back into gear";
  }
};

export { getBotReply };
