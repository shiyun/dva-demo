const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

// 通过modifyVars的方式覆盖antd默认less中定义的变量
module.exports = () => {
  const themePath = path.join(__dirname, './src/themes/default.less');
  return lessToJs(fs.readFileSync(themePath, 'utf8'));
};
