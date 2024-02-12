const config = {
  name: "uptime",
  description: "Kiểm tra thời gian bot hoạt động",
  version: "1.0.0",
  cooldown: 3,
  permissions: [2],
  credits: "SINGU-💌💌"
}

async function Running( {
  message
}) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const replyMessage = await message.reply(`Bot đã chạy được: ${hours} giờ ${minutes} phút ${seconds} giây`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  Running
}