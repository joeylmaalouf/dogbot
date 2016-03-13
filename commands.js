var commands = {};

commands["ping"] = {
  "desc": "ping - pong",
  "fn": function (text) {
    return "pong";
  }
};

commands["(☞ﾟヮﾟ)☞"] = {
  "desc": "(☞ﾟヮﾟ)☞ - ☜(ﾟヮﾟ☜)",
  "fn": function (text) {
    return "☜(ﾟヮﾟ☜)";
  }
};

commands["/echo"] = {
  "desc": "/echo <text> - <text>",
  "fn": function (text) {
    return text;
  }
};

commands["/rekt"] = {
  "desc": "/rekt - the checklist",
  "fn": function (text) {
    return "☐ Not REKT\n☑ REKT\n☑ REKTangle\n☑ SHREKT\n☑ REKT-it Ralph\n☑ Total REKTall\n☑ The Lord of the REKT\n☑ The Usual SusREKTs\n☑ North by NorthREKT\n☑ The Good, the Bad, and the REKT\n☑ LawREKT of Arabia\n☑ Tyrannosaurus REKT";
  }
};

commands["/welp"] = {
  "desc": "/welp - ¯\\_(ツ)_/¯",
  "fn": function (text) {
    return "¯\\_(ツ)_/¯";
  }
};

commands["/wat"] = {
  "desc": "/wat - ಠ_ಠ",
  "fn": function (text) {
    return "ಠ_ಠ";
  }
};

commands["/woop"] = {
  "desc": "/woop - spin2win.gif",
  "fn": function (text) {
    var n = Math.random();
    if (n < 0.05) return "https://i.imgur.com/KHIls9k.gif";
    else if (n < 0.25) return "https://i.imgur.com/kV60V2f.gif";
    else return "https://i.imgur.com/eI1ompx.gif";
  }
};

commands["/google"] = {
  "desc": "/google <text> - Google search for <text>",
  "fn": function (text) {
    return "https://www.google.com/#q=" + encodeURI(text);
  }
};

commands["/wiki"] = {
  "desc": "/wiki <text> - Wikipedia search for <text>",
  "fn": function (text) {
    return "https://en.wikipedia.org/wiki/" + encodeURI(text);
  }
};

commands["/reddit"] = {
  "desc": "/reddit <text> - Subreddit for <text>",
  "fn": function (text) {
    return "https://www.reddit.com/r/" + encodeURI(text);
  }
};

commands["/roll"] = {
  "desc": "/roll <number> - Random dice roll between 1 and <number>",
  "fn": function (text) {
    return 1 + Math.floor(Math.random() * Number(text));
  }
};

module.exports = commands;
