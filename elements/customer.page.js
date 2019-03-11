'use strict';

class customerPage {

    customerLoginButton() {
        return $$('.borderM .center').get(0).$('.btn-primary');
    }

    customersList() {
        return $('.form-group .ng-pristine');
    }

    lastUser() {
        return $('.form-group .ng-pristine').$$('option').last();
    }

    loginBtn() {
        return $('button[type="submit"]');
    }

    userNameLabel() {
        return $('.fontBig');
    }

    depositTab() {
        return $$('.center button').get(1);
    }

    withdrowlTab() {
        return $$('.center button').get(2);
    }

    ammountField() {
        return $('.form-group input')
    }

    depositAlert() {
        return $('.mainBox .ng-scope span')
    }

    transactionTab() {
        return $$('.center button').get(0);
    }

    firstRowAmount() {
        return $$('tr .ng-binding').get(1);
    }

    firstRowType() {
        return $$('tr .ng-binding').get(2);
    }

    secondRowAmount() {
        return $$('.table-bordered tbody .ng-scope').get(1).$$('.ng-binding').get(1);
    }
    resetButton() {
        return $$('.fixedTopBox button').get(1);
    }
    
}

module.exports = customerPage;
