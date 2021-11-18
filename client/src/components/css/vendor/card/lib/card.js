// Generated by CoffeeScript 1.10.0
(function () {
  var Card, QJ, extend, payment,
    bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };
  
  require('./card.css');
  
  QJ = require('qj');
  
  payment = require('payment');
  
  extend = require('node.extend');
  
  Card = (function () {
    var bindVal;
    
    Card.prototype.initializedDataAttr = "data-jp-card-initialized";
    
    Card.prototype.cardTemplate = '' + '<div class="jp-card-container">' + '<div class="jp-card">' + '<div class="jp-card-front">' + '<div class="jp-card-logo jp-card-elo">' + '<div class="e">e</div>' + '<div class="l">l</div>' + '<div class="o">o</div>' + '</div>' + '<div class="jp-card-logo jp-card-visa">Visa</div>' + '<div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div>' + '<div class="jp-card-logo jp-card-mastercard">Mastercard</div>' + '<div class="jp-card-logo jp-card-maestro">Maestro</div>' + '<div class="jp-card-logo jp-card-amex"></div>' + '<div class="jp-card-logo jp-card-discover">discover</div>' + '<div class="jp-card-logo jp-card-dinersclub"></div>' + '<div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div>' + '<div class="jp-card-logo jp-card-jcb">' + '<div class="j">J</div>' + '<div class="c">C</div>' + '<div class="b">B</div>' + '</div>' + '<div class="jp-card-lower">' + '<div class="jp-card-shiny"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-number jp-card-display">{{number}}</div>' + '<div class="jp-card-name jp-card-display">{{name}}</div>' + '<div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div>' + '</div>' + '</div>' + '<div class="jp-card-back">' + '<div class="jp-card-bar"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-shiny"></div>' + '</div>' + '</div>' + '</div>';
    
    Card.prototype.template = function (tpl, data) {
      return tpl.replace(/\{\{(.*?)\}\}/g, function (match, key, str) {
        return data[key];
      });
    };
    
    Card.prototype.cardTypes = ['jp-card-amex', 'jp-card-dankort', 'jp-card-dinersclub', 'jp-card-discover', 'jp-card-jcb', 'jp-card-laser', 'jp-card-maestro', 'jp-card-mastercard', 'jp-card-unionpay', 'jp-card-visa', 'jp-card-visaelectron', 'jp-card-elo'];
    
    Card.prototype.defaults = {
      formatting: true,
      formSelectors: {
        numberInput: 'input[name="number"]',
        expiryInput: 'input[name="expiry"]',
        cvcInput: 'input[name="cvc"]',
        nameInput: 'input[name="name"]'
      },
      cardSelectors: {
        cardContainer: '.jp-card-container',
        card: '.jp-card',
        numberDisplay: '.jp-card-number',
        expiryDisplay: '.jp-card-expiry',
        cvcDisplay: '.jp-card-cvc',
        nameDisplay: '.jp-card-name'
      },
      messages: {
        validDate: 'valid\nthru',
        monthYear: 'month/year'
      },
      placeholders: {
        number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
        cvc: '&bull;&bull;&bull;',
        expiry: '&bull;&bull;/&bull;&bull;',
        name: 'Full Name'
      },
      masks: {
        cardNumber: false
      },
      classes: {
        valid: 'jp-card-valid',
        invalid: 'jp-card-invalid'
      },
      debug: false
    };
    
    function Card(opts) {
      this.maskCardNumber = bind(this.maskCardNumber, this);
      var toInitialize;
      this.options = extend(true, this.defaults, opts);
      if (!this.options.form) {
        console.log("Please provide a form");
        return;
      }
      this.$el = QJ(this.options.form);
      if (!this.options.container) {
        console.log("Please provide a container");
        return;
      }
      this.$container = QJ(this.options.container);
      toInitialize = QJ.isDOMElement(this.$container) ? this.$container : this.$container[0];
      if (toInitialize.getAttribute(this.initializedDataAttr)) {
        return;
      }
      toInitialize.setAttribute(this.initializedDataAttr, true);
      this.render();
      this.attachHandlers();
      this.handleInitialPlaceholders();
    }
    
    Card.prototype.render = function () {
      var $cardContainer, baseWidth, name, obj, ref, ref1, selector, ua;
      QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders)));
      ref = this.options.cardSelectors;
      for (name in ref) {
        selector = ref[name];
        this["$" + name] = QJ.find(this.$container, selector);
      }
      ref1 = this.options.formSelectors;
      for (name in ref1) {
        selector = ref1[name];
        selector = this.options[name] ? this.options[name] : selector;
        obj = QJ.find(this.$el, selector);
        if (!obj.length && this.options.debug) {
          console.error("Card can't find a " + name + " in your form.");
        }
        this["$" + name] = obj;
      }
      if (this.options.formatting) {
        Payment.formatCardNumber(this.$numberInput);
        Payment.formatCardCVC(this.$cvcInput);
        Payment.formatCardExpiry(this.$expiryInput);
      }
      if (this.options.width) {
        $cardContainer = QJ(this.options.cardSelectors.cardContainer)[0];
        baseWidth = parseInt($cardContainer.clientWidth || window.getComputedStyle($cardContainer).width);
        $cardContainer.style.transform = "scale(" + (this.options.width / baseWidth) + ")";
      }
      if (typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0) {
        ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
          QJ.addClass(this.$card, 'jp-card-safari');
        }
      }
      if (/MSIE 10\./i.test(navigator.userAgent)) {
        QJ.addClass(this.$card, 'jp-card-ie-10');
      }
      if (/rv:11.0/i.test(navigator.userAgent)) {
        return QJ.addClass(this.$card, 'jp-card-ie-11');
      }
    };
    
    Card.prototype.attachHandlers = function () {
      var expiryFilters, numberInputFilters;
      numberInputFilters = [this.validToggler('cardNumber')];
      if (this.options.masks.cardNumber) {
        numberInputFilters.push(this.maskCardNumber);
      }
      bindVal(this.$numberInput, this.$numberDisplay, {
        fill: false,
        filters: numberInputFilters
      });
      QJ.on(this.$numberInput, 'payment.cardType', this.handle('setCardType'));
      expiryFilters = [
        function (val) {
          return val.replace(/(\s+)/g, '');
        }
      ];
      expiryFilters.push(this.validToggler('cardExpiry'));
      bindVal(this.$expiryInput, this.$expiryDisplay, {
        join: function (text) {
          if (text[0].length === 2 || text[1]) {
            return "/";
          } else {
            return "";
          }
        },
        filters: expiryFilters
      });
      bindVal(this.$cvcInput, this.$cvcDisplay, {
        filters: this.validToggler('cardCVC')
      });
      QJ.on(this.$cvcInput, 'focus', this.handle('flipCard'));
      QJ.on(this.$cvcInput, 'blur', this.handle('unflipCard'));
      return bindVal(this.$nameInput, this.$nameDisplay, {
        fill: false,
        filters: this.validToggler('cardHolderName'),
        join: ' '
      });
    };
    
    Card.prototype.handleInitialPlaceholders = function () {
      var el, name, ref, results, selector;
      ref = this.options.formSelectors;
      results = [];
      for (name in ref) {
        selector = ref[name];
        el = this["$" + name];
        if (QJ.val(el)) {
          QJ.trigger(el, 'paste');
          results.push(setTimeout(function () {
            return QJ.trigger(el, 'keyup');
          }));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    
    Card.prototype.handle = function (fn) {
      return (function (_this) {
        return function (e) {
          var args;
          args = Array.prototype.slice.call(arguments);
          args.unshift(e.target);
          return _this.handlers[fn].apply(_this, args);
        };
      })(this);
    };
    
    Card.prototype.validToggler = function (validatorName) {
      var isValid;
      if (validatorName === "cardExpiry") {
        isValid = function (val) {
          var objVal;
          objVal = Payment.fns.cardExpiryVal(val);
          return Payment.fns.validateCardExpiry(objVal.month, objVal.year);
        };
      } else if (validatorName === "cardCVC") {
        isValid = (function (_this) {
          return function (val) {
            return Payment.fns.validateCardCVC(val, _this.cardType);
          };
        })(this);
      } else if (validatorName === "cardNumber") {
        isValid = function (val) {
          return Payment.fns.validateCardNumber(val);
        };
      } else if (validatorName === "cardHolderName") {
        isValid = function (val) {
          return val !== "";
        };
      }
      return (function (_this) {
        return function (val, $in, $out) {
          var result;
          result = isValid(val);
          _this.toggleValidClass($in, result);
          _this.toggleValidClass($out, result);
          return val;
        };
      })(this);
    };
    
    Card.prototype.toggleValidClass = function (el, test) {
      QJ.toggleClass(el, this.options.classes.valid, test);
      return QJ.toggleClass(el, this.options.classes.invalid, !test);
    };
    
    Card.prototype.maskCardNumber = function (val, el, out) {
      var mask, numbers;
      mask = this.options.masks.cardNumber;
      numbers = val.split(' ');
      if (numbers.length >= 3) {
        numbers.forEach(function (item, idx) {
          if (idx !== numbers.length - 1) {
            return numbers[idx] = numbers[idx].replace(/\d/g, mask);
          }
        });
        return numbers.join(' ');
      } else {
        return val.replace(/\d/g, mask);
      }
    };
    
    Card.prototype.handlers = {
      setCardType: function ($el, e) {
        var cardType;
        cardType = e.data;
        if (!QJ.hasClass(this.$card, cardType)) {
          QJ.removeClass(this.$card, 'jp-card-unknown');
          QJ.removeClass(this.$card, this.cardTypes.join(' '));
          QJ.addClass(this.$card, "jp-card-" + cardType);
          QJ.toggleClass(this.$card, 'jp-card-identified', cardType !== 'unknown');
          return this.cardType = cardType;
        }
      },
      flipCard: function () {
        return QJ.addClass(this.$card, 'jp-card-flipped');
      },
      unflipCard: function () {
        return QJ.removeClass(this.$card, 'jp-card-flipped');
      }
    };
    
    bindVal = function (el, out, opts) {
      var joiner, o, outDefaults;
      if (opts == null) {
        opts = {};
      }
      opts.fill = opts.fill || false;
      opts.filters = opts.filters || [];
      if (!(opts.filters instanceof Array)) {
        opts.filters = [opts.filters];
      }
      opts.join = opts.join || "";
      if (!(typeof opts.join === "function")) {
        joiner = opts.join;
        opts.join = function () {
          return joiner;
        };
      }
      outDefaults = (function () {
        var j, len, results;
        results = [];
        for (j = 0, len = out.length; j < len; j++) {
          o = out[j];
          results.push(o.textContent);
        }
        return results;
      })();
      QJ.on(el, 'focus', function () {
        return QJ.addClass(out, 'jp-card-focused');
      });
      QJ.on(el, 'blur', function () {
        return QJ.removeClass(out, 'jp-card-focused');
      });
      QJ.on(el, 'keyup change paste', function (e) {
        var elem, filter, i, j, join, k, len, len1, outEl, outVal, ref, results,
          val;
        val = (function () {
          var j, len, results;
          results = [];
          for (j = 0, len = el.length; j < len; j++) {
            elem = el[j];
            results.push(QJ.val(elem));
          }
          return results;
        })();
        join = opts.join(val);
        val = val.join(join);
        if (val === join) {
          val = "";
        }
        ref = opts.filters;
        for (j = 0, len = ref.length; j < len; j++) {
          filter = ref[j];
          val = filter(val, el, out);
        }
        results = [];
        for (i = k = 0, len1 = out.length; k < len1; i = ++k) {
          outEl = out[i];
          if (opts.fill) {
            outVal = val + outDefaults[i].substring(val.length);
          } else {
            outVal = val || outDefaults[i];
          }
          results.push(outEl.textContent = outVal);
        }
        return results;
      });
      return el;
    };
    
    return Card;
    
  })();
  
  module.exports = Card;
  
  global.Card = Card;
  
}).call(this);
