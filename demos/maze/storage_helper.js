/**
 * Save value to localStorage.
 */
function setLocalStorage(key, value) {
  if ('localStorage' in window) {
    window.localStorage.setItem(key, value);
  }
}

/**
 * Get value from localStorage.
 */
function getLocalStorage(key) {
  if ('localStorage' in window && window.localStorage.getItem(key)) {
    return window.localStorage.getItem(key);
  }
}
