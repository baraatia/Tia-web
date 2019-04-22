'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var FormData = require('form-data');
const fetch = require('isomorphic-fetch');
var cookies, extras;
const request = require('request');

class APIhelper {

    async addFilterToPage() {
        browser.executeScript('localStorage.setItem(\'filterObj\', \'' + '{"programId":1,"schoolId":2,"academicYearId":7,"academicSemesterId":1,"educationalProgramId":1}' + '\' );');
    }

    async addTokenToPostMethod(api) {
        var response = await this.postUrl( api, '{"userName":"TiaAdmin","password":"P@ssw0rd"}');
        browser.executeScript('localStorage.setItem(\'currentUser\', \'' + response + '\' );');
    }

    postUrl(url, data) {
        return new Promise((resolve, reject) => {
            request.post({
                headers: { 'content-type': 'application/json' },
                url: url,
                body: data
            }, function (error, response, body) {
                if (error)
                    reject(error);
                resolve(body);
            });
        });
    }

    getUrl(url, token, filters) {
        return new Promise((resolve, reject) => {
            request.get({
                headers: { 'content-type': 'application/json', 'Authorization': token, 'filters': filters},
                url: url,        
            }, function (error, response, body) {
                if (error)
                    reject(error);
                resolve(body);
            });
        });
    }

    async addTokenToGetMethod(api) {
        var response = await this.getUrl( api, '{"userName":"TiaAdmin","password":"P@ssw0rd"}');
        browser.executeScript('localStorage.setItem(\'currentUser\', \'' + response + '\' );');
    }
    

    async loginAndNavigateTopage(page) {
        await browser.get('');
        await this.addTokenToPostMethod('http://api.tia.qa/api/Account/login');
        await this.addFilterToPage();
        browser.refresh()
        await browser.get(baseUrl+page);
    }

    async removeTokenToBrowserStorage() {
        browser.executeScript('localStorage.setItem(\'currentUser\',\' \');');
    }
}

module.exports = APIhelper;