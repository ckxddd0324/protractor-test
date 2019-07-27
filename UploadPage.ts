import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';
import * as path from 'path';

export class UploadPage {
// it('should greet the named user 444', async () => {
  //   await hp.openBrowser('https://the-internet.herokuapp.com/upload');
  //   const fileToUpload = '/Users/ckxddd/Documents/playground/paxful-test/sample.txt';
  //   let EC = ExpectedConditions;
  //   browser.wait(EC.visibilityOf(element(by.className('example'))), 5000);

  //   const absolutePath = path.resolve(__dirname, fileToUpload);
  //   const uploadBtn = element(by.css('#file-upload'));
  //   browser.wait(EC.presenceOf(uploadBtn), 5000);

  //   uploadBtn.sendKeys(absolutePath);
  //   browser.sleep(2000);
  //   element(by.id('file-submit')).click();
  //   let condition = EC.textToBePresentInElement(element(by.css('#content > div > h3')), 'File Uploaded!');
  //   browser.sleep(2000);
  //   const gg = await element(by.id('uploaded-files')).getText()
  //   console.log(gg);
  //   browser.wait(condition, 10000);


  // });
    fileToUpload = 'sample.txt';
    absolutePath = path.resolve(__dirname, this.fileToUpload);

    uploadBtn = element(by.css('#file-upload'));
    submitBtn = element(by.id('file-submit'));
    uploadCompletedText = element(by.css('#content > div > h3'));
    uploadedFileText = element(by.id('uploaded-files'));
    dragAndDrop = element(by.css('#drag-drop-upload'));

    openBrowser() {
        browser.get('https://the-internet.herokuapp.com/upload');
    }

    waitForCompletion() {
        let EC = ExpectedConditions;
        let condition = EC.textToBePresentInElement(this.uploadCompletedText, 'File Uploaded!');
        browser.wait(condition, 10000);
    }

    uploadFile(element) {
        element.sendKeys(this.absolutePath);
    }

    async getText(element) {
        return await element.getText();
    }


}