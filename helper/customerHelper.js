'use strict';

var customerPage = require('../elements/customer.page.js');
var customerPage = new customerPage();
var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();


class customerHelper {
    navigateToLandingPage() {
        browser.get('#/login');
    }

    loginAsCustomer() { 
        generalHelper.clickElement(customerPage.customerLoginButton(),'customer login button');
        generalHelper.clickElement(customerPage.customersList(),'customers dropdown list');
        generalHelper.clickElement(customerPage.lastUser(),'Last user in the list');
        generalHelper.clickElement(customerPage.loginBtn(),'login button');       
    }

    loginWithKnownCustomer() {
        generalHelper.clickElement(customerPage.customerLoginButton(),'customer login button');
        generalHelper.clickElement(customerPage.customersList(),'customers dropdown list');
        var userName = generalHelper.getElementText(customerPage.lastUser(), 'last customer name text')
        generalHelper.clickElement(customerPage.lastUser(),'Last user in the list');
        generalHelper.clickElement(customerPage.loginBtn(),'login button'); 
        return userName;
    }

//   function to select the desired user
    // selectdesiredUser(selector, item){
    //     var selectList, desiredOption;

    //     selectList = this.findElement(selector);
    //     selectList.click();
    
    //     selectList.findElements(protractor.By.tagName('option'))
    //         .then(function findMatchingOption(options){
    //             options.some(function(option){
    //                 option.getText().then(function doesOptionMatch(text){
    //                     if (item === text){
    //                         desiredOption = option;
    //                         return true;
    //                     }
    //                 });
    //             });
    //         })
    //         .then(function clickOption(){
    //             if (desiredOption){
    //                 desiredOption.click();
    //             }
    //         });
    //     }
    




}
module.exports = customerHelper;