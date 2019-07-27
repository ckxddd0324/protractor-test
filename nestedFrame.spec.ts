import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';

import { NestedFramePage } from './NestedFramePage';

describe('Nested frame test suite', async () => {
    browser.waitForAngularEnabled(false);
    const nestedFramePage = new NestedFramePage();

    it('get Bottom frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const text = await nestedFramePage.getText();
        expect(text).toBe('BOTTOM');
    });

    it('get Left frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const text = await nestedFramePage.getText();
        expect(text).toBe('LEFT');
    });

    it('get Middle frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const text = await nestedFramePage.getText();
        expect(text).toBe('MIDDLE');
    });

    it('get Right frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.rightFrame);
        const text = await nestedFramePage.getText();
        expect(text).toBe('RIGHT');
    });

    it('get Bottom frame text first then get Left frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const bottomText = await nestedFramePage.getText();
        expect(bottomText).toBe('BOTTOM');
        nestedFramePage.swtitchDefaultFrame();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const leftText = await nestedFramePage.getText();
        expect(leftText).toBe('LEFT');
    });

    it('get Bottom frame text first then get Middle frame text', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const bottomText = await nestedFramePage.getText();
        expect(bottomText).toBe('BOTTOM');
        nestedFramePage.swtitchDefaultFrame();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const middleText = await nestedFramePage.getText();
        expect(middleText).toBe('MIDDLE');
    });

    it('get number of frames inside the top frame', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        const frameCount = await element.all(by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(3);
    });

    it('get number of frames inside the bottom frame', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const frameCount = await element.all(by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    });

    it('get number of frames inside left frame', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const frameCount = await element.all(by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    });


    it('get number of frames inside right frame', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.rightFrame);
        const frameCount = await element.all(by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    });

    it('get number of frames inside middle frame', async () => {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const frameCount = await element.all(by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    });
});