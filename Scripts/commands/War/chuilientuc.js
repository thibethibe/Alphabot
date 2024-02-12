import {
  resolve as resolvePath
} from 'path';
import {
  readFileSync
} from 'fs';
const config = {
  name: 'chuilientuc',
  aliases: ['c1'],
  version: '1.0.0',
  description: 'Chửi bay lồn mấy đứa xàm cặc',
  credits: 'SINGU-💌💌',
  premissions :[2],
  extra: {
    DELAY: 2000,
    DELAY_THREAD: 1000*60
  }
}
if (!global.c1) {
  global.c1 = new Map();
}
async function Running( {
  message,
  args, extra
}) {
  const {
    threadID,
    senderID,
    mentions,
    messageID
  } = message;
  const mentionID = Object.keys(mentions)[0];
  const mentionNAME = mentions[mentionID];
  const arraytag = [];
  arraytag.push({
  tag: mentionNAME,
  id: mentionID
});

const isStop = args[0]?.toLowerCase() === 'stop';
if (isStop) {
if (!global.c1.has(threadID)) return message.reply('Tao có chửi đéo đâu mà dừng! đang rảnh nè cần tao chửi nhau hộ không ?');
global.c1.delete(threadID);
return message.send('Bố tha cho mày đó con chó ạ! Lần sau nữa tao địt nát lồn mẹ mày', threadID, messageID);
} else {
if (!mentionID) return message.reply('Chửi đứa lồn nào? Tag nó đây bố chửi cho, toàn lũ ranh con có vậy cũng đéo xong!');
const LyricsStorage = JSON.parse(readFileSync(resolvePath(global.NVCODER.Lyrics, 'c1.json')));
const __THREAD_GET = global.c1.get(threadID);
if (__THREAD_GET) {
const timeNow = Date.now();
const timer = __THREAD_GET.time;
const LOADING_SEND = timeNow - time;

if (LOADING_SEND < extra.DELAY_THREAD) {
const timeLeft = (extra.DELAY_THREAD - LOADING_SEND) / 1000;
return message.reply(`Mày muốn bị khóa mõm à? Đợi bố ${Math.ceil(timeLeft)}s nữa đi`);
}
}
global.c1.set(threadID, {
time: Date.now()
});

for (let i = 0; i < LyricsStorage.length; i++) {
if (!global.c1.has(threadID)) return;
const LyricsWar = LyricsStorage[i];
if (LyricsWar.includes('{name}')) {
const Final = LyricsWar.replace('{name}', mentionNAME);
await message.send({
body: Final, mentions: arraytag
});
}
await new Promise(resolve => {
setTimeout(resolve, extra.DELAY);
});
}
}
}
export default {
config,
Running
}