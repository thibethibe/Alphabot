/**
* @author      Nhatcoder
* @version     1.0.0
* @homeurl     https://github.com/nhatcoder2003/gbot
* @author_url     https://www.facebook.com/vuminhnhat10092003
*/
/**
* Vietnamese:
*- Vui lòng không xóa dòng này
*- Đây là động lực giúp tôi cung cấp nhưng sản miễn phí và chất lượng tới cộng đồng
*- Bất kỳ hành động sửa đổi nào sẽ ảnh hưởng tới mã nguồn hoặc dẫn tới bạn bị cấm sử dụng tiện ích dòng lệnh của alphabot
*- Bản quyền © 2023 Nhatcoder2k3
* -----------------------------------
* English:
*- Please do not delete this line
*- This is my motivation to provide free and quality products to the community
*- Any modification will affect the source code or lead to you being banned from using the alphabot command line utility
*- Copyright © 2023 Nhatcoder2k3
*/
import chalk from 'chalk';

const logger = {
  info: (message) => {
    console.log(chalk.bold.hex('#1d542f').bold('[INFO]» ')+message);
  },
  warn: (message) => {
    console.log(chalk.bold.hex('#945f2b').bold('[WARNING]» ')+message);
  },
  error: (message) => {
    console.log(chalk.bold.hex('#942b2b').bold('[ERROR]» ')+message);
  },
  system: (message) => {
    console.log(chalk.bold.hex('#f59e42').bold('[SYSTEM]» ')+message);
  },
  custom: (message,type,color = "\x1b[36m") => {
    console.log(`${color}[${type}]\x1b[0m ${message}`);
  }
}
export default logger;