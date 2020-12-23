// 编码
export function uriParamsEncode(params) {
  return encodeURIComponent(JSON.stringify(params))
}
// 解码
export function uriParamsDecode(params) {
  return JSON.parse(decodeURIComponent(params))
}
