'use strict';

var generalHelper = require('./generalHelper.js');
var generalHelper = new generalHelper();
var userManagementElements = require('../elements/userManagementElements.js');
var userManagementElements = new userManagementElements();
var APIHelper = require('../helper/APIHelper.js');
var APIHelper = new APIHelper();

class userManagementHelper {

    createKnownUserName() {
        var userName = 'autoUser' + ' ' + Date.now();
        generalHelper.clickElement(userManagementElements.addStudentBtn(), "add student button is not displayed", 3000);
        generalHelper.sendKey(userManagementElements.firstNameInput(), userName, 'first name input');
        generalHelper.sendKey(userManagementElements.secondNameInput(), userName, 'second name input');
        generalHelper.sendKey(userManagementElements.thirdNameInput(), userName, 'Third name input');
        generalHelper.sendKey(userManagementElements.lastNameInput(), userName, 'last name input');
        generalHelper.sendKey(userManagementElements.latinFirstNameInput(), userName, 'first name latin input');
        generalHelper.sendKey(userManagementElements.latinSecondNameInput(), userName, 'second name latin input');
        generalHelper.sendKey(userManagementElements.latinThirdNameInput(), userName, 'third name latin input');
        generalHelper.sendKey(userManagementElements.latinLastNameInput(), userName, 'last name latin input');
        generalHelper.clickElement(userManagementElements.bloodGroupDdl(), "blood group DDL");
        generalHelper.clickElement(userManagementElements.bloodGroupRandomChoice(), "blood group random choice");
        generalHelper.clickElement(userManagementElements.dateOfBirthCalenderIcon(), "calender icon");
        generalHelper.clickElement(userManagementElements.dateOfBirthDay(), "Select date from calender");
        generalHelper.clickElement(userManagementElements.genderDDL(), "Gender dropdown");
        generalHelper.clickElement(userManagementElements.genderDDLFemail(), "Select Gender choice");
        generalHelper.clickElement(userManagementElements.religionDdl(), "Religion Dropdown");
        generalHelper.clickElement(userManagementElements.religionChoice(), "Religion choice");
        generalHelper.scrollTo(userManagementElements.identityDetails());
        generalHelper.clickElement(userManagementElements.nationalityDdl(), "Nationality Dropdown");
        generalHelper.clickElement(userManagementElements.nationalityChoice(), "Nationality choice");
        generalHelper.clickElement(userManagementElements.idTypeDdl(), "Nationality dropdown");
        generalHelper.clickElement(userManagementElements.idTypeChoice(), "Nationality choice");
        generalHelper.sendKey(userManagementElements.idNumberInput(), "id 123343", 'id number');
        generalHelper.clickElement(userManagementElements.saveStudentButton(), "Save and Submit student account");
        console.log(userName);
        return userName;
    }

    createClassSectionuser() {
        var userName = 'autoUser' + ' ' + Date.now();
        generalHelper.clickElement(userManagementElements.addStudentBtn(), "add student button is not displayed", 3000);
        generalHelper.clickElement(userManagementElements.classDDL(), "class dropdown click", 3000);
        generalHelper.clickElement(userManagementElements.classChoice(), "class dropdown select class", 3000);
        generalHelper.clickElement(userManagementElements.sectionDDL(), "section dropdown", 3000);

        generalHelper.clickElement(userManagementElements.addStudentBtn(), "add student button is not displayed", 3000);
        generalHelper.sendKey(userManagementElements.firstNameInput(), userName, 'first name input');
        generalHelper.sendKey(userManagementElements.secondNameInput(), userName, 'second name input');
        generalHelper.sendKey(userManagementElements.thirdNameInput(), userName, 'Third name input');
        generalHelper.sendKey(userManagementElements.lastNameInput(), userName, 'last name input');
        generalHelper.sendKey(userManagementElements.latinFirstNameInput(), userName, 'first name latin input');
        generalHelper.sendKey(userManagementElements.latinSecondNameInput(), userName, 'second name latin input');
        generalHelper.sendKey(userManagementElements.latinThirdNameInput(), userName, 'third name latin input');
        generalHelper.sendKey(userManagementElements.latinLastNameInput(), userName, 'last name latin input');
        generalHelper.clickElement(userManagementElements.bloodGroupDdl(), "blood group DDL");
        generalHelper.clickElement(userManagementElements.bloodGroupRandomChoice(), "blood group random choice");
        generalHelper.clickElement(userManagementElements.dateOfBirthCalenderIcon(), "calender icon");
        generalHelper.clickElement(userManagementElements.dateOfBirthDay(), "Select date from calender");
        generalHelper.clickElement(userManagementElements.genderDDL(), "Gender dropdown");
        generalHelper.clickElement(userManagementElements.genderDDLFemail(), "Select Gender choice");
        generalHelper.clickElement(userManagementElements.religionDdl(), "Religion Dropdown");
        generalHelper.clickElement(userManagementElements.religionChoice(), "Religion choice");
        generalHelper.scrollTo(userManagementElements.identityDetails());
        generalHelper.clickElement(userManagementElements.nationalityDdl(), "Nationality Dropdown");
        generalHelper.clickElement(userManagementElements.nationalityChoice(), "Nationality choice");
        generalHelper.clickElement(userManagementElements.idTypeDdl(), "Nationality dropdown");
        generalHelper.clickElement(userManagementElements.idTypeChoice(), "Nationality choice");
        generalHelper.sendKey(userManagementElements.idNumberInput(), "id 123343", 'id number');
        generalHelper.clickElement(userManagementElements.saveStudentButton(), "Save and Submit student account");
        console.log(userName);
        return userName;
    }

    async waitForAddingNewStudent() {
        var studentCount = await userManagementElements.studentList().count()
        if (studentCount == global.newStudentCount + 1) {
            return true;
        } else {
            return false;
        }
    }

    async getUserCount() {
        var response = JSON.parse(await APIHelper.postUrl(' http://tia365api.azurewebsites.net/api/Account/login', '{"userName":"TiaAdmin","password":"P@ssw0rd"}'));
        var body = JSON.parse(await APIHelper.getUrl('http://tia365api.azurewebsites.net/api/Users/GetStudents?pageIndex=0&pageSize=10&classId=&sectionId=&studentName=&statusId=null&isHasClass=false', "Bearer " + response['token'], '{"programId":1,"schoolId":2,"academicYearId":7,"academicSemesterId":1,"educationalProgramId":1}'));
        return body['totalRecords'];
    }

    // async GetUserCount() {
    //     await APIHelper.loginAndNavigateTopage('Home/Users/UsersTabs/Students');
    //     var studentCount = await userManagementElements.studentList().count()
    //     console.log(studentCount);
    // }

    async getUserlocation() {
        if (newStudentCount > 10) {
            generalHelper.clickElement(userManagementElements.lastPaginatorArrow(), "last pagination arrow click");
            browser.waitForAngular();
        }
    }



}
module.exports = userManagementHelper
