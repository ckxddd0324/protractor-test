import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';

import { DynamicLoadPage } from './DynamicLoadPage';

describe('dynamic load test suite', async () => {
    browser.waitForAngularEnabled(false);
    const dynamicLoadPage = new DynamicLoadPage();
  
    const PageTitle = 'Dynamically Loaded Page Elements';
    const ExampleOneSubtitle = 'Example 1: Element on page that is hidden';
    const LoadingText = 'Loading...';
    const HelloWorldText = 'Hello World!';
  
    it('Dynamic wait for element on page that is hidden', async () => {
      dynamicLoadPage.openBrowser();
      dynamicLoadPage.clickElement(dynamicLoadPage.exampleOneLink);
      dynamicLoadPage.clickElement(dynamicLoadPage.startBtn);
      const loadingText = await dynamicLoadPage.getText(dynamicLoadPage.loadingState);
      expect(loadingText).toBe(LoadingText);
      dynamicLoadPage.waitForVisibility(dynamicLoadPage.finishState, 10000);
      const finishState = await dynamicLoadPage.getText(dynamicLoadPage.finishState);
      expect(finishState).toBe(HelloWorldText);
    })
  
    it('Dynamic wait for  rendered after the fact', async () => {
      dynamicLoadPage.openBrowser();
      dynamicLoadPage.clickElement(dynamicLoadPage.exampleTwoLink);
      dynamicLoadPage.clickElement(dynamicLoadPage.startBtn);
      const loadingText = await dynamicLoadPage.getText(dynamicLoadPage.loadingState);
      expect(loadingText).toBe(LoadingText);
      dynamicLoadPage.waitForVisibility(dynamicLoadPage.finishState, 10000);
      const finishState = await dynamicLoadPage.getText(dynamicLoadPage.finishState);
      expect(finishState).toBe(HelloWorldText);
    })
});  