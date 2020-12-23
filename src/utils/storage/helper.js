const typeJudge = () => Object.prototype.toString
const isArray = (types) => Object.is(typeJudge.call(types), '[object Array]')
const isObject = (types) => Object.is(typeJudge.call(types), '[object Object]')
export {
  isArray,
  isObject
}
