/**
 * @desc          生成uuid
 * @author        ranguangyu
 * @date          2017-03-28 10:03
 */

function uuid () {
  function tempFunction () {
    var uuidIndex = 1// 闭包保存
    return function innerFunction () {
      return (new Date().getTime() + '' + uuidIndex++)
    }
  }

  return tempFunction()
}

export default uuid;
