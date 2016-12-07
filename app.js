var Discord = require("discord.js");
var config = require("./auth.js");
var commands = require("./commands.js");

var bot = new Discord.Client();

bot.on("message", function (message) {
  var args = message.content.split(" ");
  var comm = args.shift();
  for (var command in commands) {
    if (comm === command) {
      bot.reply(message, commands[command].fn(bot, args));
      break;
    };
  }
});

bot.login(config.email, config.password);
