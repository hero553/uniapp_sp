const isArray = i => Object.prototype.toString.call(i) === '[object Array]'
const isObject = i => Object.prototype.toString.call(i) === '[object Object]'
const storage = {
  get: uni.getStorageSync,
  set: uni.setStorageSync,
  del: uni.removeStorageSync,
  delAll: uni.clearStorage,
  has: (key) => {
    try {
      const getValue = JSON.parse(storage.get(key))
      if (typeof getValue === 'number') {
        return getValue + ''.length > 0
      }
      if (isArray(getValue)) {
        return getValue.length > 0
      }
      if (isObject(getValue)) {
        return Object.keys(getValue).length > 0
      }
    } catch (e) {
      return !!storage.get(key)
    }
  },
  delete: (key) => {
    storage.del(key)
  },
  deleteAll: () => {
    storage.delAll()
  }
}
const proxy = new Proxy(storage, {
  get(target, key) {
    switch (key) {
      case 'has':
        return target.has
      case 'delete':
        return target.delete
      case 'deleteAll':
        return target.deleteAll
      default:
        try {
          const getValue = JSON.parse(storage.get(key))
          return getValue
        } catch (e) {
          return storage.get(key)
        }
    }
  },
  set(target, key, value) {
    target.set(key, value)
    return true
  }
})

export default proxy
