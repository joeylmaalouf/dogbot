var commands = {};

commands["/help"] = {
  "desc": "show this message",
  "fn": function (bot, args) {
    var response = "Possible commands:";
    for (var command in commands) {
      response += "\n" + command + " - " + commands[command].desc;
    }
    return response;
  }
};

commands["/uptime"] = {
  "desc": "bot uptime",
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
  "desc": "collaborative Spotify playlist",
  "fn": function (bot, args) {
    return "https://play.spotify.com/user/jragon713/playlist/2j7KUdyHjLzT0PXTaVkEH0";
  }
};

commands["/roll"] = {
  "desc": "roll dice",
  "fn": function (bot, args) {
    var parse = function (expr) {
      var parts = expr.split("d").map(function (x) { return +x; });
      if (parts.length === 1) {
        return parts[0];
      }
      else if (parts.length === 2) {
        var sum = 0;
        for (var i = 0; i < parts[0]; ++i) {
          sum += 1 + Math.floor(Math.random() * parts[1]);
        }
        return sum;
      }
      else {
        return 0;
      }
    };
    var args = args.join(" ").replace(/[^d+-\d]/g, "");
    var ops = args.replace(/[^+-]/g, "");
    var args = args.split(/[+-]+/g);
    var total = parse(args[0]);
    for (var i = 1; i < args.length; ++i) {
      total += parse(args[i]) * (ops[i - 1] == "+" ? 1 : -1);
    }
    return total;
  }
};
commands["/r"] = commands["/roll"];

module.exports = commands;
