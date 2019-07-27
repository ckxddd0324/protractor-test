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
const NestedFramePage_1 = require("./NestedFramePage");
describe('Nested frame test suite', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    const nestedFramePage = new NestedFramePage_1.NestedFramePage();
    it('get Bottom frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const text = yield nestedFramePage.getText();
        expect(text).toBe('BOTTOM');
    }));
    it('get Left frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const text = yield nestedFramePage.getText();
        expect(text).toBe('LEFT');
    }));
    it('get Middle frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const text = yield nestedFramePage.getText();
        expect(text).toBe('MIDDLE');
    }));
    it('get Right frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.rightFrame);
        const text = yield nestedFramePage.getText();
        expect(text).toBe('RIGHT');
    }));
    it('get Bottom frame text first then get Left frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const bottomText = yield nestedFramePage.getText();
        expect(bottomText).toBe('BOTTOM');
        nestedFramePage.swtitchDefaultFrame();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const leftText = yield nestedFramePage.getText();
        expect(leftText).toBe('LEFT');
    }));
    it('get Bottom frame text first then get Middle frame text', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const bottomText = yield nestedFramePage.getText();
        expect(bottomText).toBe('BOTTOM');
        nestedFramePage.swtitchDefaultFrame();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const middleText = yield nestedFramePage.getText();
        expect(middleText).toBe('MIDDLE');
    }));
    it('get number of frames inside the top frame', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        const frameCount = yield protractor_1.element.all(protractor_1.by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(3);
    }));
    it('get number of frames inside the bottom frame', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.bottomFrame);
        const frameCount = yield protractor_1.element.all(protractor_1.by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    }));
    it('get number of frames inside left frame', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.leftFrame);
        const frameCount = yield protractor_1.element.all(protractor_1.by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    }));
    it('get number of frames inside right frame', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.rightFrame);
        const frameCount = yield protractor_1.element.all(protractor_1.by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    }));
    it('get number of frames inside middle frame', () => __awaiter(this, void 0, void 0, function* () {
        nestedFramePage.openBrowser();
        nestedFramePage.switchFrame(nestedFramePage.topFrame);
        nestedFramePage.switchFrame(nestedFramePage.middleFrame);
        const frameCount = yield protractor_1.element.all(protractor_1.by.css('html > frameset > frame')).count();
        expect(frameCount).toBe(0);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkRnJhbWUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5lc3RlZEZyYW1lLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxRztBQUVyRyx1REFBb0Q7QUFFcEQsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtJQUMzQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTlDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7UUFDbkMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxHQUFTLEVBQUU7UUFDakMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sSUFBSSxHQUFHLE1BQU0sZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7UUFDbkMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FB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