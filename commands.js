var commands = {};

commands["ping"] = {
  "desc": "pong!",
  "fn": function (text) {
    return "pong";
  }
};

commands["(☞ﾟヮﾟ)☞"] = {
  "desc": "gottem!",
  "fn": function (text) {
    return "☜(ﾟヮﾟ☜)";
  }
};

commands["/rekt"] = {
  "desc": "dededestroyed",
  "fn": function (text) {
    return "☐ Not REKT\n☑ REKT\n☑ REKTangle\n☑ SHREKT\n☑ REKT-it Ralph\n☑ Total REKTall\n☑ The Lord of the REKT\n☑ The Usual SusREKTs\n☑ North by NorthREKT\n☑ The Good, the Bad, and the REKT\n☑ LawREKT of Arabia\n☑ Tyrannosaurus REKT";
  }
};

commands["/welp"] = {
  "desc": "huh",
  "fn": function (text) {
    return "¯\\_(ツ)_/¯";
  }
};

commands["/wat"] = {
  "desc": "...",
  "fn": function (text) {
    return "ಠ_ಠ";
  }
};

commands["/wiki"] = {
  "desc": "search Wikipedia for whatever follows the command",
  "fn": function (text) {
    return "https://en.wikipedia.org/wiki/" + encodeURI(text);
  }
};

commands["/reddit"] = {
  "desc": "Open the subreddit for whatever follows the command",
  "fn": function (text) {
    return "https://www.reddit.com/r/" + encodeURI(text);
  }
};

module.exports = commands;
