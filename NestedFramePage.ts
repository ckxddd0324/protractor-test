import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';

export class NestedFramePage {

    text = element(by.css("body"));
    bottomFrame = "frame-bottom";
    topFrame = 'frame-top';
    leftFrame = 'frame-left';
    middleFrame = 'frame-middle';
    rightFrame = 'frame-right';


    openBrowser() {
        browser.get('https://the-internet.herokuapp.com/nested_frames');
    }

    async switchFrame(frame: string) {
        return await browser.switchTo().frame(element(by.name(frame)).getWebElement());
    }

    async getText() {
        return this.text.getText();
    }

    async swtitchDefaultFrame() {
        return await browser.switchTo().defaultContent();
    }


}