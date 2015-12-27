'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('#/');
    page = require('./main.po');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('soopaheroClient');
  });

  describe('header', function () {

    it('should include logo with correct data', function () {
      let h1 = page.h1El;
      let headerImg = page.headerImg;

      expect(page.headerLink.getAttribute('href')).toBe(browser.getCurrentUrl());
      expect(h1.getAttribute('class')).toBe('seo-hidden');
      expect(h1.isDisplayed()).toBe(false);
      expect(headerImg.getAttribute('src')).toMatch(/assets\/images\/soopahero-logo.svg/);
      expect(headerImg.getAttribute('alt')).toBe('Soopahero logo');
    });

    describe('login button', function () {

      it('should be present', function () {
        expect(page.loginButton.isPresent()).toBe(true);
      });

    });

    describe('register button', function () {

      it('should be present', function () {
        expect(page.registerButton.isPresent()).toBe(true);
      });

      it('should open a dialog', function () {
        page.registerButton.click();
        expect(page.body.getAttribute('class')).toMatch('md-dialog-is-showing');
        expect(
          element(by.css('.md-dialog-container'))
            .element(by.css('.sh-dialog'))
            .getAttribute('class'))
          .toMatch('sign-up-dialog');

        // close
        let closeBtn = element(by.css('.sh-dialog-close'));
        expect(closeBtn.isPresent()).toBe(true);
        closeBtn.click();
        expect(page.body.getAttribute('class')).toBe('ng-scope');
      });

    });

  });

});
