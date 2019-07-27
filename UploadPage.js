"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const path = require("path");
class UploadPage {
    constructor() {
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
        this.fileToUpload = 'sample.txt';
        this.absolutePath = path.resolve(__dirname, this.fileToUpload);
        this.uploadBtn = protractor_1.element(protractor_1.by.css('#file-upload'));
        this.submitBtn = protractor_1.element(protractor_1.by.id('file-submit'));
        this.uploadCompletedText = protractor_1.element(protractor_1.by.css('#content > div > h3'));
        this.uploadedFileText = protractor_1.element(protractor_1.by.id('uploaded-files'));
        this.dragAndDrop = protractor_1.element(protractor_1.by.id('drag-drop-upload'));
    }
    openBrowser() {
        protractor_1.browser.get('https://the-internet.herokuapp.com/upload');
    }
    waitForCompletion() {
        let EC = protractor_1.ExpectedConditions;
        let condition = EC.textToBePresentInElement(this.uploadCompletedText, 'File Uploaded!');
        protractor_1.browser.wait(condition, 10000);
    }
    uploadFile(element) {
        element.sendKeys(this.absolutePath);
    }
    getText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield element.getText();
        });
    }
}
exports.UploadPage = UploadPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVwbG9hZFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxRztBQUNyRyw2QkFBNkI7QUFFN0IsTUFBYSxVQUFVO0lBQXZCO1FBQ0Esc0RBQXNEO1FBQ3BELHVFQUF1RTtRQUN2RSxzRkFBc0Y7UUFDdEYsaUNBQWlDO1FBQ2pDLDJFQUEyRTtRQUUzRSxnRUFBZ0U7UUFDaEUsdURBQXVEO1FBQ3ZELGtEQUFrRDtRQUVsRCxzQ0FBc0M7UUFDdEMseUJBQXlCO1FBQ3pCLDJDQUEyQztRQUMzQywyR0FBMkc7UUFDM0cseUJBQXlCO1FBQ3pCLGdFQUFnRTtRQUNoRSxxQkFBcUI7UUFDckIsb0NBQW9DO1FBR3BDLE1BQU07UUFDSixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLHdCQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDN0QscUJBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFxQnJELENBQUM7SUFuQkcsV0FBVztRQUNQLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RixvQkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVLLE9BQU8sQ0FBQyxPQUFPOztZQUNqQixPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUdKO0FBbERELGdDQWtEQyJ9