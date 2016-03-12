var Discord = require("discord.js");
var config = require("./auth.js");

var bot = new Discord.Client();

bot.on("message", function (message) {
  if (message.content === "ping") {
    bot.reply(message, "pong");
  }
});

bot.login(config.email, config.password);
