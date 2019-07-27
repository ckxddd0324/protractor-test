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
class DynamicLoadPage {
    constructor() {
        this.exampleOneLink = protractor_1.element(protractor_1.by.css('#content > div > a:nth-child(5)'));
        this.exampleTwoLink = protractor_1.element(protractor_1.by.css('#content > div > a:nth-child(8)'));
        this.mainSection = protractor_1.element(protractor_1.by.className('example'));
        this.startBtn = protractor_1.element(protractor_1.by.css('#start > button'));
        this.finishState = protractor_1.element(protractor_1.by.id('finish'));
        this.loadingState = protractor_1.element(protractor_1.by.id('loading'));
    }
    openBrowser() {
        protractor_1.browser.get('https://the-internet.herokuapp.com/dynamic_loading');
    }
    waitForPresent(element, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            protractor_1.browser.wait(EC.presenceOf(element), duration);
        });
    }
    waitForVisibility(element, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            protractor_1.browser.wait(EC.visibilityOf(element), duration);
        });
    }
    clickElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield element.click();
        });
    }
    getText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield element.getText();
        });
    }
}
exports.DynamicLoadPage = DynamicLoadPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0xvYWRQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRHluYW1pY0xvYWRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFFckcsTUFBYSxlQUFlO0lBQTVCO1FBRUksbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxnQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsaUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQXdCN0MsQ0FBQztJQXRCRyxXQUFXO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFnQjs7WUFDMUMsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7WUFDNUIsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBZ0I7O1lBQzdDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO1lBQzVCLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLE9BQU87O1lBQ3RCLE9BQU8sTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLE9BQU87O1lBQ2pCLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0NBRUo7QUEvQkQsMENBK0JDIn0=