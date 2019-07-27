import { browser, element, by, protractor, $$, $, ExpectedConditions, WebElement } from 'protractor';

import { UploadPage } from './UploadPage';

describe('upload page test suite', async () => {

  const uploadPage = new UploadPage();
  browser.waitForAngularEnabled(false);

  it('should greet the named user 444', async () => {
    uploadPage.openBrowser();
    uploadPage.uploadFile(uploadPage.uploadBtn);
    uploadPage.submitBtn.click();
    uploadPage.waitForCompletion();
    const uploadFile = await uploadPage.getText(uploadPage.uploadedFileText);
    const uploadCompletedText = await uploadPage.getText(uploadPage.uploadCompletedText);

    expect(uploadCompletedText).toBe('File Uploaded!');
    expect(uploadFile).toBe('sample.txt');
  });
});