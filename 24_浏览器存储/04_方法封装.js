class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }
  setItem(key, value) {
    // JSON.stringify不能处理函数、symbol、undefined
    // this.storage.setItem(key, JSON.stringify(value));
    // 还可以进行加密存储的操作
    this.storage.setItem(
      key,
      window.btoa(window.encodeURIComponent(JSON.stringify(value)))
    );
  }
  getItem(key) {
    // return JSON.parse(this.storage.getItem(key));
    return JSON.parse(
      window.decodeURIComponent(window.atob(this.storage.getItem(key)))
    );
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
  length() {
    return this.storage.length;
  }
}
const localCache = new Cache();
const sessionCache = new Cache(false);

module.exports = {
  localCache,
  sessionCache,
};
