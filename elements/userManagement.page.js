'use strict';

class userManagementPage {

    bankManagerLoginButton() {
        return $$('.borderM .center').get(1).$('.btn-primary');
    }

    addCustomerTab() {
        return $$('.center button').get(0);
    }

    addAccountTab() {
        return $$('.center button').get(1);
    }

    firstNameInput() {
        return $$('.marTop form div').get(0).$('input');
    }

    lastNameInput() {
        return $$('.marTop form div').get(1).$('input');
    }

    customerInfoInput(inputNum) {
        return $$('.marTop form div').get(inputNum-1).$('input');
    }

    customersList() {
        return element(by.id('userSelect'));
    }

    lastCustomerOption() {
        return element(by.id('userSelect')).$$('option').last();
    }

    currencyList() {
        return element(by.id('currency'));
    }

    firstCurrencyOption() {
        return element(by.id('currency')).$$('option').get(1);
    }

    processBtn() {
        return $('.ng-dirty button')
    }

    customersTab() {
        return $$('.center button').get(2);
    }

    searchBar() {
        return $('.input-group input');
    }

    firstNameInsideTable() {
        return $$('tbody tr').get(0).$$('.ng-binding').get(0);
    }

    accountNumlastrow() {
        return $$('tbody tr').last().$$('td').get(3); 
    }

    deleteBtn() {
        return $$('tbody tr').last().$$('td').last().$('button'); 
    }

    tableBody() {
        return $('tbody');
    }






}
module.exports = userManagementPage;
