import { Context } from "../../common/context";

export function startCommand(ctx: Context) {
    return ctx.reply(ctx.t("welcome"));
}


export function listenChannel(ctx: Context) {
    console.log(
        ctx.chat
    );
}

export function everyUpdate(ctx: Context) {
    console.log(ctx.message?.text);
}

export function onStatusChange(ctx: Context) {
    const status = ctx.myChatMember?.new_chat_member.status;
    const chatType = ctx.chat?.type;
    const chatTitle = ctx.chat?.title;
    
    console.log(`Bot statusi o'zgardi: ${status}`);
    console.log(`Guruh turi: ${chatType}`);
    console.log(`Guruh nomi: ${chatTitle}`);
    
    // Bot huquqlarini tekshirish
    if (status === 'restricted' || status === 'left') {
      console.log('Bot guruhda cheklangan huquqlarga ega yoki guruhdan chiqarilgan!');
    } else if (status === 'member') {
      console.log('Bot guruhda oddiy a\'zo');
    } else if (status === 'administrator') {
      console.log('Bot guruhda administrator');
    }
}