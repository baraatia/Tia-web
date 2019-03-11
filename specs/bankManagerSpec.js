'use strict';

var userManagementPage = require('../elements/userManagement.page.js');
var userManagementPage = new userManagementPage();
var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();
var customerHelper = require('../helper/customerHelper.js');
var customerHelper = new customerHelper();
var bankManagerHelper = require('../helper/userManagementHelper.js');
var bankManagerHelper = new bankManagerHelper();
var EC = protractor.ExpectedConditions;


describe('Checking bank manager module functions', function () {

    beforeEach(function () {
        customerHelper.navigateToLandingPage();
        bankManagerHelper.loginAsBankManager();
    });

    it('should be able to add customer', function () {
        generalHelper.clickElement(bankManagerPage.addCustomerTab(), "Add customer tab click");
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(1), 'first name '+Date.now(), 'first name input');
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(2), 'last name '+Date.now(), 'last name input');
        generalHelper.sendKeyAndSubmit(bankManagerPage.customerInfoInput(3), '00962', 'Post code input');
        expect(generalHelper.getAlertText()).toContain("Customer added successfully with customer id");
    });


    /*This scenario will fail due to typescript bug please refer to the following url (https://github.com/angular/protractor/issues/3648#issuecomment-255221293),
     because we are restart Browser Between Tests using (restartBrowserBetweenTests: true)
     to prevint the scenarios dependencies, there must be work around by clearing the cookies inside this spec using (Afterall)
     , also i tried to switch (restartBrowserBetweenTests) to off for this scenario by using (browser.restartBrowserBetweenTests(false)),
      but it seems its not supported yet from protractor, although the scenario can be run successfully when its alone by putting "f" letter before "it" to be "fit" 
      ,its switch the focus for this "it" scenario only.*/  
    // it('should be able to add account to last customer', function () { 
    //     bankManagerHelper.addKnownCustomerName();
    //     generalHelper.clickElement(bankManagerPage.addAccountTab(), "Add account tab click");
    //     generalHelper.clickElement(bankManagerPage.customersList(), "customers list click");
    //     generalHelper.clickElement(bankManagerPage.lastCustomerOption(), "Select last customer inside customers list");
    //     generalHelper.clickElement(bankManagerPage.currencyList(), "currency list click");
    //     generalHelper.clickElement(bankManagerPage.firstCurrencyOption(), "currency first option click");
    //     generalHelper.clickElement(bankManagerPage.processBtn(), "process button click");
    //     expect(generalHelper.getAlertText()).toContain("Account created successfully with account Number");
    // });

    it('should have a fuctional search bar under customers tab', function () {
        var customerName = bankManagerHelper.addKnownCustomerName();
        generalHelper.clickElement(bankManagerPage.customersTab(), "customers tab click");
        generalHelper.sendKeyAndSubmit(bankManagerPage.searchBar(), customerName, 'provide customername inside search bar');
        expect(generalHelper.getElementText(bankManagerPage.firstNameInsideTable(), "first name value for the first row inside customers table")).toEqual(customerName);
    });

    it('should not have account number inside customers table if the user does not have account', function () {
        bankManagerHelper.addKnownCustomerName();
        generalHelper.clickElement(bankManagerPage.customersTab(), "customers tab click");
        generalHelper.scrollTo(bankManagerPage.accountNumlastrow());
        expect(generalHelper.getElementText(bankManagerPage.accountNumlastrow(), "account value for the first row inside customers table")).toBe('');
    });

    it('should be able to delete customer account successfully', function () {
        var customerName = bankManagerHelper.addKnownCustomerName();
        generalHelper.clickElement(bankManagerPage.customersTab(), "customers tab click");
        generalHelper.scrollTo(bankManagerPage.accountNumlastrow());
        generalHelper.clickElement(bankManagerPage.deleteBtn(), "delete custommer button click");
        generalHelper.sendKeyAndSubmit(bankManagerPage.searchBar(), customerName, 'provide customername inside search bar');
        expect(generalHelper.isDisplayedPromise(bankManagerPage.tableBody(), "Visibality of the deleted row")).toBe(false);
    });

});