/**
 * @desc          localStorage 存、取、清除 query
 * @author        ranguangyu
 * @date          2017-05-09
 */

export default {
  bsSetQuery(routeName, query) {
    var storage = window.localStorage
    storage.setItem(routeName, JSON.stringify(query))
  },

  bsGetQuery(routeName) {
    var storage = window.localStorage
    var query = JSON.parse(storage.getItem(routeName))
    return query
  },

  bsClearQuery(routeName) {
    var storage = window.localStorage
    storage.clear(routeName)
  }
}
