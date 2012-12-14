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

/**
 * Get value from parameter.
 */
function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

