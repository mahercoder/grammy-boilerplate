import { Composer } from "grammy";
import { Context } from "../../common/context";
import { chatAction } from "@grammyjs/auto-chat-action";
import { handleLogMiddleware } from "../../middlewares/logging.middleware";
import { startCommand, listenChannel, everyUpdate, onStatusChange } from "./home.service";

const composer = new Composer<Context>();
const module = composer.chatType(["private", "group", "supergroup"]);

module.command(
    "start", 
    handleLogMiddleware("start-command"), 
    chatAction("choose_sticker"), 
    startCommand
);

// I've started coding here...
module.on(
    'my_chat_member', 
    listenChannel
);

module.on(
    'message',
    everyUpdate
);

module.on('my_chat_member', onStatusChange);

export { composer as homeModule };
