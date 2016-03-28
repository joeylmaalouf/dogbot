var commands = {};

commands["/dbhelp"] = {
  "desc": "/dbhelp - show this message",
  "fn": function (bot, args) {
    var response = "Possible commands:";
    for (var command in commands) {
      response += "\n" + commands[command].desc;
    }
    return response;
  }
};

commands["/ping"] = {
  "desc": "/ping - pong",
  "fn": function (bot, args) {
    return "pong";
  }
};

commands["/ayy"] = {
  "desc": "/ayy - lmao",
  "fn": function (bot, args) {
    return "lmao";
  }
};

commands["/gottem"] = {
  "desc": "/gottem - (☞ﾟヮﾟ)☞",
  "fn": function (bot, args) {
    return "(☞ﾟヮﾟ)☞";
  }
};

commands["(☞ﾟヮﾟ)☞"] = {
  "desc": "(☞ﾟヮﾟ)☞ - ☜(ﾟヮﾟ☜)",
  "fn": function (bot, args) {
    return "☜(ﾟヮﾟ☜)";
  }
};

commands["/echo"] = {
  "desc": "/echo <args> - <args>",
  "fn": function (bot, args) {
    return args.join(" ");
  }
};

commands["/rekt"] = {
  "desc": "/rekt - the checklist",
  "fn": function (bot, args) {
    return "☐ Not REKT\n☑ REKT\n☑ REKTangle\n☑ SHREKT\n☑ REKT-it Ralph\n☑ Total REKTall\n☑ The Lord of the REKT\n☑ The Usual SusREKTs\n☑ North by NorthREKT\n☑ The Good, the Bad, and the REKT\n☑ LawREKT of Arabia\n☑ Tyrannosaurus REKT";
  }
};

commands["/welp"] = {
  "desc": "/welp - ¯\\_(ツ)_/¯",
  "fn": function (bot, args) {
    return "¯\\_(ツ)_/¯";
  }
};

commands["/wat"] = {
  "desc": "/wat - ಠ_ಠ",
  "fn": function (bot, args) {
    return "ಠ_ಠ";
  }
};

commands["/woop"] = {
  "desc": "/woop - spin2win.gif",
  "fn": function (bot, args) {
    var n = Math.random();
    if (n < 0.05) return "https://i.imgur.com/KHIls9k.gif";
    else if (n < 0.25) return "https://i.imgur.com/kV60V2f.gif";
    else return "https://i.imgur.com/eI1ompx.gif";
  }
};

commands["/uptime"] = {
  "desc": "/uptime - bot uptime",
  "fn": function (bot, args) {
    var t = bot.uptime;
    var ms = t % 1000; t = Math.floor(t / 1000);
    var s = t % 60; t = Math.floor(t / 60);
    var m = t % 60; t = Math.floor(t / 60);
    var h = t % 24; t = Math.floor(t / 24);
    var d = t;
    return d + "d, " + h + "h, " + m + "m, " + s + "s, " + ms + "ms";
  }
};

commands["/playlist"] = {
  "desc": "/playlist - collaborative Spotify playlist",
  "fn": function (bot, args) {
    return "https://play.spotify.com/user/jragon713/playlist/2j7KUdyHjLzT0PXTaVkEH0";
  }
};

commands["/gitgud"] = {
  "desc": "/gitgud - Project M tech",
  "fn": function (bot, args) {
    return "https://redd.it/3m9sf6";
  }
};

commands["/google"] = {
  "desc": "/google <args> - Google search for <args>",
  "fn": function (bot, args) {
    return "https://www.google.com/#q=" + encodeURI(args.join(" "));
  }
};

commands["/wiki"] = {
  "desc": "/wiki <args> - Wikipedia search for <args>",
  "fn": function (bot, args) {
    return "https://en.wikipedia.org/wiki/" + encodeURI(args.join(" "));
  }
};

commands["/reddit"] = {
  "desc": "/reddit <args> - subreddit for <args>",
  "fn": function (bot, args) {
    return "https://www.reddit.com/r/" + encodeURI(args.join("_"));
  }
};

commands["/roll"] = {
  "desc": "/roll <m> [n] - random dice roll between 1 and <m>, [n] many times (default 1)",
  "fn": function (bot, args) {
    var m = Number(args[0]);
    var n = Number(args[1]) || 1;
    var results = [];
    for (var i = 0; i < n; ++i) {
      results.push(1 + Math.floor(Math.random() * m));
    };
    var sum = results.reduce(function (a, b) {return a + b;});
    return sum + " (" + results.join(", ") + ")";
  }
};

module.exports = commands;
