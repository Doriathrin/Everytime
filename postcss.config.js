const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'], // !不匹配属性（这里是字体相关属性不转换）
            unitPrecision: 3, // 最小精度，小数点位数
            minPixelValue: 2 // 替换的最小像素值
          })
        ]
      }
    }
  }
};