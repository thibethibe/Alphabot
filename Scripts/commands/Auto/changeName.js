const config = {
  name: "changename",
  aliases: ["rename",
    "setname",
    "sn"],
  description: "Auto setname",
  usage: "/setname [all/me] [name]",
  cooldown: 3,
  permissions: [2],
  isAbsolute: false,
  isHidden: false,
  credits: "SINGU-💌💌"
}

async function Running( {
  message, args, getLang, extra, data, userPermissions, prefix
}) {
  let uids = [];
  let nickname = args.join('');
  if (args[0] == 'all') {
    uids = (await global.api.getThreadInfo(message.threadID)).participantIDs;
    nickname = args[0] === "all" ? args.slice(1).join(" "): nickname.replace(message.mentions[message.threadID], "").trim();
  } else {
    uids = [message.senderID];
    nickname = nickname.trim();
  }
  try {
    const uid = uids.shift();
    await global.api.changeNickname(nickname,
      message.threadID,
      uid);
  }catch(e) {
    message.reply('Bị lỗi con cặc gì ròi á,đợi admin khắc phục nhé');
  }
  for (const uid of uids)
    await global.api.changeNickname(nickname, message.threadID, uid);
}

export default {
  config,
  Running
}