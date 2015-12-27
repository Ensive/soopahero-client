/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.body = element(by.tagName('body'));

  // header
  this.headerEl = element(by.css('.header'));

  // link & logo
  this.headerLink = this.headerEl.element(by.css('.header__logo-link'));
  this.h1El = this.headerLink.element(by.css('h1'));
  this.headerImg = this.headerLink.element(by.css('img'));

  // buttons
  this.loginButton = this.headerEl.element(by.binding('SH.HEADER.LOG_IN'));
  this.registerButton = this.headerEl.element(by.binding('SH.HEADER.SIGN_UP'));
};

module.exports = new MainPage();
