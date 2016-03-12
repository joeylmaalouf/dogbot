var Discord = require("discord.js");
var config = require("./auth.js");
var commands = require("./commands.js");

var bot = new Discord.Client();

bot.on("message", function (message) {
  if (message.content === "/dbhelp") {
    var response = "Possible commands:";
    for (var command in commands) {
      response += "\n" + commands[command].desc;
    }
    bot.reply(message, response);
  }
  else {
    var segments = message.content.split(/ (.+)/);
    for (var command in commands) {
      if (segments[0] === command) {
        bot.reply(message, commands[command].fn(segments[1]));
        break;
      };
    }
  }
});

bot.login(config.email, config.password);
