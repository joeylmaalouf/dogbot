var Discord = require("discord.js");
var config = require("./auth.js");
var commands = require("./commands.js");

var bot = new Discord.Client();

bot.on("ready", function () {
  for (var i = 0; i < bot.servers.length; ++i) {
    if (bot.servers[i].channels.length) {
      bot.sendMessage(bot.servers[i].channels.get("name", "bot-test"), "DogBot is online! Type /dbhelp to learn more.");
    }
  }
});

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
