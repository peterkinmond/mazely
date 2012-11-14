/**
 * Save value to client.
 */
function saveValue(key, value) {
  if ('localStorage' in window) {
    window.localStorage.setItem(key, value);
  }
}

/**
 * Load value from client.
 */
function loadValue(key) {
  if ('localStorage' in window && window.localStorage.getItem(key)) {
    return window.localStorage.getItem(key);
  }
}
