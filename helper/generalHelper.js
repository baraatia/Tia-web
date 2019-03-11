'use strict';

var explicitWait = 20000;
var EC = protractor.ExpectedConditions;

class generalHelper {
    switchToDefaultFrame() {
        browser.switchTo().defaultContent();
    }

    buildJSON(priority, message) {
        return JSON.stringify({"error": {"priority": priority, "message": message}});
    }

    clickElement(element, elementLabel) {
        browser.wait(EC.elementToBeClickable(element),
            explicitWait, elementLabel + ' is not clickable or visible').then(function () {
            element.click();
        }); 
    }

    sendKey(element, text, elementLabel) {
        browser.wait(EC.presenceOf(element), explicitWait,
        elementLabel + " doesn't receive the text input").then(function () {
            element.sendKeys(text);
        })
    }

    hoverAndClickElement(element, elementLabel) {
        browser.wait(EC.presenceOf(element),
            explicitWait, elementLabel + ' error in hover and click').then(function () {
            browser.actions().mouseMove(element).perform(),
            element.click();
        });
    } 

    hover(element, elementLabel) {
        browser.wait(EC.presenceOf(element),
            explicitWait, elementLabel + ' error with hover over').then(function () {
            browser.actions().mouseMove(element).perform()
        });
    } 
 
    sendKeyAndSubmit(element, text, elementLabel) {
        browser.wait(EC.presenceOf(element), explicitWait,
        elementLabel + " doesn't receive the text input").then(function () {
            element.sendKeys(text).sendKeys(protractor.Key.ENTER);
        })
    }

    getAlertText() {
        var alertDialog = browser.switchTo().alert();
        return browser.wait(EC.alertIsPresent(), explicitWait, + 'browser alert doesnt appear').then(function () {
            return alertDialog.getText()    
        })
    }

    getElementText(element, elementLabel) {
        return browser.wait(EC.presenceOf(element), explicitWait, elementLabel + ' Text is not visible').then(function () {
            return element.getText().then(function(text){
                return text;
            }) ;
        })
    }

    getTextPromise(element, elementLabel) {
        return browser.wait(EC.presenceOf(element), explicitWait, elementLabel + ' Text is not visible').then(function () {
            return element.getText();
        })
    }

    isDisplayedPromise(element, elementLabel) {
        return browser.wait(EC.visibilityOf(element), explicitWait, elementLabel + ' Element is not displayed').then(function () {
            return element.isDisplayed();
        })
    }

    isPresentPromise(element, elementLabel) {
        return browser.wait(EC.visibilityOf(element), explicitWait, elementLabel + ' Element is not displayed').then(function () {
            return element.isPresent();
        })
    }

    getCountPromise(element, elementLabel) {
        return browser.wait(EC.presenceOf(element), explicitWait, elementLabel + ' Element is not visible').then(function () {
            return element.count(); 
        })
    }

    isEnabledPromise(element, elementLabel){
        return browser.wait(EC.presenceOf(element), explicitWait, elementLabel + ' Element is not Enabled').then(function() {
            return element.isEnabled();
        })
    }

    isNotDisplayedPromise(element, elementLabel) {
        return browser.wait(EC.invisibilityOf(element), explicitWait, elementLabel + ' Element is displayed').then(function () {
            return true;
        })
    }

    getElementAttribute(element, att, elementLabel) {
        return browser.wait(EC.presenceOf(element), explicitWait, elementLabel + ' Element attribute is not visible').then(function() {
            return  element.getAttribute(att)
        }); 
    }

    scrollTo(scrollToElement) {
        var wd = browser.driver;
        return scrollToElement.getLocation().then(function (loc) {
            return wd.executeScript('window.scrollTo(0,arguments[0]);', loc.y);
        });
    };
}



module.exports = generalHelper;