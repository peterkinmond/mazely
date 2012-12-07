var Lightbox;

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Lightbox = (function() {

  function Lightbox() {
    this.handleResize = __bind(this.handleResize, this);
    this.hide = __bind(this.hide, this);
  }

  Lightbox.prototype.defaultEmbedWidth = 854;

  Lightbox.prototype.defaultEmbedHeight = 480;

  Lightbox.prototype.defaultEmbedPadding = 10;

  Lightbox.prototype.showOverlay = function() {
    var overlay, overlayStyle;
    overlayStyle = "position:fixed;top:0;left:0;width:100%;height:100%;background-color:black;opacity:0.7;z-index:1000;";
    overlay = $('<div>', {
      'class': 'str-overlay str-lightbox',
      style: overlayStyle
    });
    $('body').append(overlay);
    return $(overlay).on('click', this.hide);
  };

  Lightbox.prototype.hideOverlay = function() {
    return $('body .str-overlay').remove();
  };

  Lightbox.prototype.showEmbed = function(embedUrl) {
    this.$wrapper = $('<div>', {
      'class': 'str-embed-wrap str-lightbox'
    });
    this.$embed = $('<iframe>', {
      src: embedUrl,
      'class': 'str-embed str-lightbox'
    });
    this.$wrapper.append(this.$embed);
    this.$closeButton = $('<img>', {
      src: 'close_button.png',
      'class': 'str-embed-close str-lightbox',
      style: 'position:absolute;top:0px;right:0px;cursor:pointer;'
    });
    this.$closeButton.on('click', this.hide);
    this.$wrapper.append(this.$closeButton);
    this.setStyle(this.$wrapper, this.$embed);
    $('body').append(this.$wrapper);
    return $(window).on('orientationchange resize', this.handleResize);
  };

  Lightbox.prototype.hideEmbed = function() {
    return $('body .str-embed-wrap').remove();
  };

  Lightbox.prototype.show = function(embedUrl) {
    this.showOverlay();
    return this.showEmbed(embedUrl);
  };

  Lightbox.prototype.hide = function() {
    this.hideOverlay();
    this.hideEmbed();
    return $(window).off('orientationchange resize', this.handleResize);
  };

  Lightbox.prototype.handleResize = function() {
    return this.setStyle(this.$wrapper, this.$embed);
  };

  Lightbox.prototype.setStyle = function(wrapper, embed) {
    var dimensions;
    dimensions = this.calculateWrapperDimensions();
    wrapper.attr('style', this.calculateWrapStyle(dimensions));
    return embed.attr('style', this.calculateEmbedStyle(dimensions));
  };

  Lightbox.prototype.calculateWrapperDimensions = function() {
    var constrainedByHeight, constrainedByWidth, embedHeight, embedWidth, pageDimensions, ratio;
    pageDimensions = this.viewportDimensions();
    embedWidth = Math.min(this.defaultEmbedWidth, pageDimensions[0]);
    embedHeight = Math.min(this.defaultEmbedHeight, pageDimensions[1]);
    ratio = this.defaultEmbedWidth / this.defaultEmbedHeight;
    constrainedByWidth = embedHeight * ratio > embedWidth;
    constrainedByHeight = embedHeight * ratio < embedWidth;
    if (constrainedByWidth) {
      embedHeight = embedWidth / ratio;
    } else if (constrainedByHeight) {
      embedWidth = embedHeight * ratio;
    }
    return {
      width: embedWidth,
      height: embedHeight,
      left: (pageDimensions[0] - embedWidth) / 2,
      top: (pageDimensions[1] - embedHeight) / 2
    };
  };

  Lightbox.prototype.calculateWrapStyle = function(dimensions) {
    return "position:fixed;z-index:1001;width:" + dimensions.width + "px;height:" + dimensions.height + "px;left:" + dimensions.left + "px;top:" + dimensions.top + "px;";
  };

  Lightbox.prototype.calculateEmbedStyle = function(wrapperDimensions) {
    var height, width;
    width = wrapperDimensions.width - (2 * this.defaultEmbedPadding);
    height = wrapperDimensions.height - (2 * this.defaultEmbedPadding);
    return "position:relative;width:" + width + "px;height:" + height + "px;margin:" + this.defaultEmbedPadding + "px;border:none;";
  };

  Lightbox.prototype.viewportDimensions = function() {
    var screenHeight, screenWidth;
    screenWidth = screenHeight = 0;
    if (typeof window.innerWidth === "number") {
      // Non-IE
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      // IE 6+ in 'standards compliant mode'
      screenWidth = document.documentElement.clientWidth;
      screenHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      // IE 4 compatible
      screenWidth = document.body.clientWidth;
      screenHeight = document.body.clientHeight;
    }
    return [screenWidth, screenHeight];
  };

  return Lightbox;

})();

