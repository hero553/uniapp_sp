class Query {
  querySelector(element) {
    return new Promise((resolve) => {
      uni.createSelectorQuery().select(element).fields({
        dataset: true,
        size: true,
        scrollOffset: true,
        rect: true,
        properties: ['scrollX', 'scrollY'],
        computedStyle: ['margin', 'backgroundColor'],
        context: true
      }, function(res) {
        resolve(res)
      }).exec()
    })
  }
}
const query = new Query()
export {
  query
}
