/**
 * Scapegoat
 * https://github.com/brentertz/scapegoat
 *
 * Copyright (c) 2014 Brent Ertz
 * Licensed under the MIT license.
 */

var chars = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': '\'',
  '&lt;': '<',
  '&gt;': '>'
};

/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  escape: function(html) {
    if (!html) {
      return '';
    }

    var values = Object.keys(chars).map(function(key) { return chars[key]; });
    var re = new RegExp('(' + values.join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      for (var key in chars) {
        if (chars.hasOwnProperty(key) && chars[key] === match) {
          return key;
        }
      }
    });
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    if (!html) {
      return '';
    }

    var re = new RegExp('(' + Object.keys(chars).join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      return chars[match];
    });
  }
};
