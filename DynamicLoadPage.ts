import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';

export class DynamicLoadPage {

    exampleOneLink = element(by.css('#content > div > a:nth-child(5)'));
    exampleTwoLink = element(by.css('#content > div > a:nth-child(8)'));
    mainSection = element(by.className('example'));
    startBtn = element(by.css('#start > button'));
    finishState = element(by.id('finish'));
    loadingState = element(by.id('loading'));
    
    openBrowser() {
        browser.get('https://the-internet.herokuapp.com/dynamic_loading');
    }

    async waitForPresent(element, duration: number) {
        let EC = ExpectedConditions;
        browser.wait(EC.presenceOf(element), duration);
    }

    async waitForVisibility(element, duration: number) {
        let EC = ExpectedConditions;
        browser.wait(EC.visibilityOf(element), duration);
    }

    async clickElement(element) {
        return await element.click();
    }

    async getText(element) {
        return await element.getText();
    }

}