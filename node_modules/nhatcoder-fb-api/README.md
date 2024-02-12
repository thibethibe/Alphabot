# Unofficial Facebook Chat API
<a href="https://www.npmjs.com/package/nhatcoder-fb-api"><img alt="npm version" src="https://img.shields.io/npm/v/nhatcoder-fb-api.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/nhatcoder-fb-api"><img src="https://img.shields.io/npm/dm/nhatcoder-fb-api.svg?style=flat-square" alt="npm downloads"></a>
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Facebook hiện có API chính thức cho bot trò chuyện [Tại Đây](https://developers.facebook.com/docs/messenger-platform).

API này là cách duy nhất để tự động hóa các chức năng trò chuyện trên tài khoản người dùng. Chúng tôi làm điều này bằng cách giả lập trình duyệt. Điều này có nghĩa là thực hiện chính xác các yêu cầu GET/POST và lừa Facebook nghĩ rằng chúng tôi đang truy cập trang web bình thường. Bởi vì chúng tôi đang làm theo cách này, API này sẽ không hoạt động với mã thông báo xác thực mà yêu cầu thông tin xác thực của tài khoản Facebook. _Tuyên bố từ chối trách nhiệm_: Chúng tôi không chịu trách nhiệm nếu tài khoản của bạn bị cấm vì các hoạt động spam như gửi nhiều tin nhắn cho những người bạn không biết, gửi tin nhắn rất nhanh, gửi các URL có vẻ spam, đăng nhập và đăng xuất rất nhanh... Chịu trách nhiệm Facebook công dân.

Xem [bên dưới](#projects-using-this-api) để biết các dự án sử dụng API này.

Xem [nhật ký thay đổi đầy đủ](/CHANGELOG.md) để biết chi tiết về bản phát hành.

## Cài Đặt
Nếu bạn chỉ muốn sử dụng nhatcoder-fb-api, bạn nên sử dụng lệnh này:
```bash
npm install nhatcoder-fb-api
```
It will download facebook-chat-api from NPM repositories

### Tối ưu
Nếu bạn muốn sử dụng flush edge (trực tiếp từ github) để kiểm tra các tính năng mới hoặc gửi báo cáo lỗi, thì đây là lệnh dành cho bạn:
```bash
npm install nhatcoder2003/nhatcoder-fb-api
```

## Kiểm tra bot của bạn
Nếu muốn kiểm tra bot của mình mà không cần tạo một tài khoản khác trên Facebook, bạn có thể sử dụng [Tài khoản Facebook Whitehat](https://www.facebook.com/whitehat/accounts/).

## Ví dụ sử dụng
```javascript
const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
```

Kết quả:

<img width="517" alt="screen shot 2016-11-04 at 14 36 00" src="https://cloud.githubusercontent.com/assets/4534692/20023545/f8c24130-a29d-11e6-9ef7-47568bdbc1f2.png">


## Tài liệu

* [`login`](DOCS.md#login)
* [`api.addUserToGroup`](DOCS.md#addUserToGroup)
* [`api.changeAdminStatus`](DOCS.md#changeAdminStatus)
* [`api.changeArchivedStatus`](DOCS.md#changeArchivedStatus)
* [`api.changeBlockedStatus`](DOCS.md#changeBlockedStatus)
* [`api.changeGroupImage`](DOCS.md#changeGroupImage)
* [`api.changeNickname`](DOCS.md#changeNickname)
* [`api.changeThreadColor`](DOCS.md#changeThreadColor)
* [`api.changeThreadEmoji`](DOCS.md#changeThreadEmoji)
* [`api.createPoll`](DOCS.md#createPoll)
* [`api.deleteMessage`](DOCS.md#deleteMessage)
* [`api.deleteThread`](DOCS.md#deleteThread)
* [`api.forwardAttachment`](DOCS.md#forwardAttachment)
* [`api.getAppState`](DOCS.md#getAppState)
* [`api.getCurrentUserID`](DOCS.md#getCurrentUserID)
* [`api.getFriendsList`](DOCS.md#getFriendsList)
* [`api.getThreadHistory`](DOCS.md#getThreadHistory)
* [`api.getThreadInfo`](DOCS.md#getThreadInfo)
* [`api.getThreadList`](DOCS.md#getThreadList)
* [`api.getThreadPictures`](DOCS.md#getThreadPictures)
* [`api.getUserID`](DOCS.md#getUserID)
* [`api.getUserInfo`](DOCS.md#getUserInfo)
* [`api.handleMessageRequest`](DOCS.md#handleMessageRequest)
* [`api.listen`](DOCS.md#listen)
* [`api.listenMqtt`](DOCS.md#listenMqtt)
* [`api.logout`](DOCS.md#logout)
* [`api.markAsRead`](DOCS.md#markAsRead)
* [`api.markAsReadAll`](DOCS.md#markAsReadAll)
* [`api.muteThread`](DOCS.md#muteThread)
* [`api.removeUserFromGroup`](DOCS.md#removeUserFromGroup)
* [`api.resolvePhotoUrl`](DOCS.md#resolvePhotoUrl)
* [`api.searchForThread`](DOCS.md#searchForThread)
* [`api.sendMessage`](DOCS.md#sendMessage)
* [`api.sendTypingIndicator`](DOCS.md#sendTypingIndicator)
* [`api.setMessageReaction`](DOCS.md#setMessageReaction)
* [`api.setOptions`](DOCS.md#setOptions)
* [`api.setTitle`](DOCS.md#setTitle)
* [`api.unsendMessage`](DOCS.md#unsendMessage)

## Chức năng chính

### Gửi tin nhắn
#### api.sendMessage(message, threadID[, callback][, messageID])

Nhiều loại tin nhắn có thể được gửi: * *Thông thường:* đặt trường `body` thành thông báo mong muốn dưới dạng chuỗi.
*Hình dán:* đặt trường `sticker` thành ID hình dán mong muốn. 
*Tệp hoặc hình ảnh:* Đặt trường `attachment` thành một luồng có thể đọc được hoặc một mảng các luồng có thể đọc được. 
*URL:* đặt trường `url` thành URL mong muốn. 
*Emoji:* đặt trường `emoji` thành biểu tượng cảm xúc mong muốn dưới dạng một chuỗi và đặt trường `emojiSize` với kích thước của biểu tượng cảm xúc (`small`, `medium`, `large`)

Lưu ý rằng một tin nhắn chỉ có thể là một tin nhắn thông thường (có thể trống) và tùy ý là một trong các tin nhắn sau: nhãn dán, tệp đính kèm hoặc url.

__Mẹo__: để tìm ID của chính mình, bạn có thể xem bên trong cookie. `userID` nằm dưới tên `c_user`.

Mẫu (Tin nhắn cơ bản)__
```js
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    var yourID = "000000000000000";
    var msg = "Hey!";
    api.sendMessage(msg, yourID);
});
```

Mẫu (Tải lên hình ảnh)__
```js
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    // Note this example uploads an image called image.jpg
    var yourID = "000000000000000";
    var msg = {
        body: "Hey!",
        attachment: fs.createReadStream(__dirname + '/image.jpg')
    }
    api.sendMessage(msg, yourID);
});
```

------------------------------------
### Lưu phiên đăng nhập. 
Để tránh phải đăng nhập mỗi lần, bạn nên lưu AppState (cookie, v.v.) vào một tệp, sau đó bạn có thể sử dụng nó mà không cần có mật khẩu trong tập lệnh của mình.

__Mẫu__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"};

login(credentials, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

------------------------------------

### Nghe một cuộc trò chuyện
#### api.listen(callback)

Nghe đồng hồ cho các tin nhắn được gửi trong một cuộc trò chuyện. Theo mặc định, điều này sẽ không nhận các sự kiện (tham gia/rời khỏi cuộc trò chuyện, thay đổi tiêu đề, v.v...) nhưng nó có thể được kích hoạt bằng `api.setOptions({listenEvents: true})`. Theo mặc định, điều này sẽ bỏ qua các tin nhắn được gửi bởi tài khoản hiện tại, bạn có thể kích hoạt tính năng nghe tin nhắn của chính mình bằng `api.setOptions({selfListen: true})`.

__Mẫu__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

// Bot đơn giản. Nó sẽ lặp lại tất cả những gì bạn nói.
// Sẽ dừng khi bạn nói '/stop'
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen((err, event) => {
        if(err) return console.error(err);

        api.markAsRead(event.threadID, (err) => {
            if(err) console.error(err);
        });

        switch(event.type) {
            case "message":
                if(event.body === '/stop') {
                    api.sendMessage("Goodbye…", event.threadID);
                    return stopListening();
                }
                api.sendMessage("TEST BOT: " + event.body, event.threadID);
                break;
            case "event":
                console.log(event);
                break;
        }
    });
});
```



## Các dự án sử dụng API này


- [Alphabot](https://github.com/nhatcoder2003/gbot)