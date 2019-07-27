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
const UploadPage_1 = require("./UploadPage");
describe('upload page test suite', () => __awaiter(this, void 0, void 0, function* () {
    const uploadPage = new UploadPage_1.UploadPage();
    protractor_1.browser.waitForAngularEnabled(false);
    it('should greet the named user 444', () => __awaiter(this, void 0, void 0, function* () {
        uploadPage.openBrowser();
        uploadPage.uploadFile(uploadPage.uploadBtn);
        uploadPage.submitBtn.click();
        uploadPage.waitForCompletion();
        const uploadFile = yield uploadPage.getText(uploadPage.uploadedFileText);
        const uploadCompletedText = yield uploadPage.getText(uploadPage.uploadCompletedText);
        expect(uploadCompletedText).toBe('File Uploaded!');
        expect(uploadFile).toBe('sample.txt');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkUGFnZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkUGFnZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFFckcsNkNBQTBDO0FBRTFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7SUFFNUMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDcEMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyQyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBUyxFQUFFO1FBQy9DLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQy9CLE1BQU0sVUFBVSxHQUFHLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RSxNQUFNLG1CQUFtQixHQUFHLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVyRixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=