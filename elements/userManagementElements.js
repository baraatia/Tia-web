'use strict';

var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();

class userManagementElements {

    mainUsersBreadcrumbs() {
        return $('.cw-100P').$$('div').get(1).$('button');
    }

    userTypesIcons() {
        return $('.text-center .d-inline-block .justify-content-center').$$('button').count();
    }

    userTypesIconID(number) {
        return $('.text-center .d-inline-block .justify-content-center').$$('button').get(number - 1);
    }

    addStudentBtn() {
        return $('button[class="matButton c-dark-blue font-weight-bold input px-2 mat-button"]');
    }

    firstNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[1]/div[2]/input'));
    }

    secondNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[2]/div[2]/input'));
    }

    thirdNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[3]/div[2]/input'));
    }

    lastNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[4]/div[2]/input'));
    }

    latinFirstNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[5]/div[2]/input'));
    }

    latinSecondNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[6]/div[2]/input'));
    }

    latinThirdNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[7]/div[2]/input'));
    }

    latinLastNameInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[8]/div[2]/input'));
    }

    bloodGroupDdl() {
        return $('mat-select[aria-label="Select Blood Group"]');
    }

    bloodGroupRandomChoice() {
        return $('div[class="mat-select-content ng-trigger ng-trigger-fadeInContent"]');
    }

    dateOfBirthCalenderIcon() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-personal-form-details/form/div/div[2]/div[10]/div[2]/mat-form-field/div/div[1]/div/img'));
    }

    dateOfBirthDay() {
        return $$('tbody[class="mat-calendar-body"] tr').get(2).$$('td').get(2);
    }

    genderDDL() {
        return $('div[class="form_group row mx-0"] div:nth-of-type(11) div:nth-of-type(2)').$('mat-select div div:nth-of-type(2)');
    }

    genderDDLFemail() {
        return element(by.cssContainingText('.mat-option-text', 'Male'));
    }

    religionDdl() {
        return $('div[class="form_group row mx-0"] div:nth-of-type(12) div:nth-of-type(2)').$('mat-select div div:nth-of-type(2) div[class="mat-select-arrow"]');
    }

    religionChoice() {
        return element(by.cssContainingText('.mat-option-text', 'Christian'));
    }

    nationalityDdl() {
        return $('form[class="ng-pristine ng-invalid ng-touched"] div:nth-of-type(1) div:nth-of-type(2) div:nth-of-type(1)');
    }

    identityDetails() {
        return $('app-identity-form-details label[class="textFormC Header font-weight-bold"]');
    }

    nationalityDdl() {
        return $('app-identity-form-details div[class="form_group row mx-0"] div:nth-of-type(1) div:nth-of-type(2)').$('mat-select div div:nth-of-type(2) div[class="mat-select-arrow"]');
    }

    nationalityChoice() {
        return element(by.cssContainingText('.mat-option-text', 'Qatari'));
    }

    idTypeDdl() {
        return element(By.xpath('/html/body/app-root/div/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-identity-form-details/form/div/div[2]/div[2]/div[2]/mat-select/div/div[2]/div'));
    }

    idTypeChoice() {
        return element(by.cssContainingText('.mat-option-text', 'Citizen Identity Card'));
    }

    idNumberInput() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[2]/app-identity-form-details/form/div/div[2]/div[3]/div[2]/input'));
    }

    saveStudentButton() {
        return element(By.xpath('//*[@id="app"]/app-main/div/div[2]/app-users/app-body/div/div/app-user-form/app-student-form/form/div[3]/div/div/button[1]'));
    }

    studantsNameField(row) {
        return $$('tbody tr').get(row).$('td:nth-of-type(3)').getText();
    }

    async getStudantTdByName(name) {
        var elm = await element(by.cssContainingText('.matTable tr td', name));
        return elm
    }

    studentList() {
        return $$('tbody tr');
    }

    getAllusersNames() {
        var elment = $$('tbody tr');
        var allNames = generalHelper.getTextPromise(elment, 'all users names')
        return allNames;
    }

    lastPaginatorArrow() {
        return $('.mat-paginator-container .mat-paginator-range-actions button:last-of-type');
    }

    classDDL() {
        return element(By.xpath('//*[@id="mat-select-10"]/div/div[2]/div'));
    }

    async classChoice(stag) {
        return await element(by.cssContainingText('.mat-option-text', stag));
    }


}
module.exports = userManagementElements;
