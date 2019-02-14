/**
 * @desc         公共过滤器
 * @author       ranguangyu
 * @date         2017-04-01
 */
import Vue from 'vue';

/**
 * 昵称截取
 * @param subLength 截取的个数
 * @param reverse 是否倒序
 */
Vue.filter('nickName', function (value, subLength, reverse) {
  subLength = subLength || 2;
  if (value) {
    if (reverse) { // 倒序截取最后面的文字
      let startIndex = value.length - subLength;
      return value.substr(startIndex);
    } else {
      let curLength = value.length
      return curLength <= subLength ? value : value.substr(0, subLength) + '...';
    }
  }
})

// 身份证号隐私处理
Vue.filter('idcardPrivate', function (idcard) {
  idcard = idcard || '';
  return idcard.replace(/^(\d{3})\d{12}([0-9Xx]{3})$/, function(all, $1, $2) {
    return $1 + '************' + $2;
  });
});
