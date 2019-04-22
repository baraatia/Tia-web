'use strict';

var userManagementElements = require('../elements/userManagementElements.js');
var userManagementElements = new userManagementElements();
var generalHelper = require('../helper/generalHelper.js');
var generalHelper = new generalHelper();
var userManagementHelper = require('../helper/userManagementHelper.js');
var userManagementHelper = new userManagementHelper();
var APIHelper = require('../helper/APIHelper.js');
var APIHelper = new APIHelper();
var EC = protractor.ExpectedConditions;


describe('Checking main users types page', function () {

    beforeAll(async function () {
        await APIHelper.loginAndNavigateTopage('Home/Users/Dashboard');
    });

    it('should contains breadcrumbs', function () {
        expect(generalHelper.isDisplayedPromise(userManagementElements.mainUsersBreadcrumbs(), 'Usermanagement breadcrumbs label', 2000));
    });

    it('should contains main user types icons', function () {
        expect(userManagementElements.userTypesIcons()).toEqual(3);
    });

});

fdescribe('Checking add student casses', function () {

    beforeAll(async function () {
        await APIHelper.loginAndNavigateTopage('Home/Users/UsersTabs/Students');
        let studentCount = await userManagementHelper.getUserCount();
        global.newStudentCount = studentCount;
        
    });

    it('should add new user without class and section successfully', async function () {
        var studentName = userManagementHelper.createKnownUserName();
        await userManagementHelper.waitForAddingNewStudent();
        await userManagementHelper.getUserlocation();
        var namesArr = await userManagementElements.getAllusersNames();
        var isIncludes = namesArr.some(x => x.includes(studentName));
        expect(isIncludes).toBe(true);
    });

    fit('should add new user related to class and section successfully', function () {
        var studentName = userManagementHelper.createClassSectionuser();
        browser.sleep(8000);
        // expect(userManagementElements.lastStudantNameColumn()).toEqual(studentName + " " + studentName + " " + studentName)
    
    });

});
