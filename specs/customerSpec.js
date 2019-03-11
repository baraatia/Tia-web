'use strict';

var customerPage = require('../elements/customer.page.js');
var customerPage = new customerPage();
var EC = protractor.ExpectedConditions;
var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();
var customerHelper = require('../helper/customerHelper');
var customerHelper = new customerHelper();


describe('Checking customer module functions', function () {

    beforeEach(function () {
        customerHelper.navigateToLandingPage();
        customerHelper.loginAsCustomer();
    });

    it('should display a message when making a deposit successfully', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 200, 'deposit ammout input field');
        expect(generalHelper.getTextPromise(customerPage.depositAlert(), 'deposit message alert')).toEqual("Deposit Successful");
    });

    it('should display alert message when making a withdrawl successfully', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 200, 'deposit ammout input field');
        generalHelper.clickElement(customerPage.withdrowlTab(), "withdrowl Tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 1, 'withdrawl ammout input field');
        expect(generalHelper.getTextPromise(customerPage.depositAlert(), 'withdrawl message alert')).toEqual("Transaction successful");
    });

    it('should display alert message when making withdrawl larger than the account balance', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 2, 'deposit ammout input field');
        generalHelper.clickElement(customerPage.withdrowlTab(), "withdrowl Tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 500, 'withdrawl ammout input field');
        expect(generalHelper.getTextPromise(customerPage.depositAlert(), 'withdrawl message alert')).toEqual("Transaction Failed. You can not withdraw amount more than the balance.");
    });

    it('should reflect the deposit amount inside the transaction table', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 200, 'deposit ammout input field');
        browser.driver.navigate().refresh(); 
        generalHelper.clickElement(customerPage.transactionTab(), "transaction tab click");
        browser.wait(EC.visibilityOf(customerPage.firstRowAmount()),20000).then(function(){
        expect(generalHelper.getTextPromise(customerPage.firstRowAmount(), 'first row ammount value')).toEqual('200');
        });
    });

    it('should reflect the transaction type inside the transaction table after the deposit transaction', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 200, 'deposit ammout input field');
        browser.driver.navigate().refresh();
        generalHelper.clickElement(customerPage.transactionTab(), "transaction tab click");
        browser.wait(EC.visibilityOf(customerPage.firstRowAmount()),20000).then(function(){
        expect(generalHelper.getTextPromise(customerPage.firstRowType(), 'first row type value')).toEqual('Credit');
        });
    });

    it('should reflect the withdrawl amount inside the transaction table', function () {
        generalHelper.clickElement(customerPage.depositTab(), "deposit tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 200, 'deposit ammout input field');
        generalHelper.clickElement(customerPage.withdrowlTab(), "withdrowl Tab click");
        generalHelper.sendKeyAndSubmit(customerPage.ammountField(), 1, 'withdrawl ammout input field');
        browser.driver.navigate().refresh(); 
        generalHelper.clickElement(customerPage.transactionTab(), "transaction tab click");
        browser.wait(EC.visibilityOf(customerPage.firstRowAmount()),20000, "table doesn't show its content").then(function(){
        expect(generalHelper.getTextPromise(customerPage.secondRowAmount(), 'second row amount value')).toEqual('1');
        });
    });
});

describe('Checking customer info visibality under customer account page', function () {

    beforeEach(function () {
        customerHelper.navigateToLandingPage();
    });

    it('should display the selected user inside ', function () {
        var customerName = customerHelper.loginWithKnownCustomer();
        expect(generalHelper.getTextPromise(customerPage.userNameLabel(), 'customer main name label inside his profile')).toEqual(customerName);
    });

});
