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
class NestedFramePage {
    constructor() {
        this.text = protractor_1.element(protractor_1.by.css("body"));
        this.bottomFrame = "frame-bottom";
        this.topFrame = 'frame-top';
        this.leftFrame = 'frame-left';
        this.middleFrame = 'frame-middle';
        this.rightFrame = 'frame-right';
    }
    openBrowser() {
        protractor_1.browser.get('https://the-internet.herokuapp.com/nested_frames');
    }
    switchFrame(frame) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.name(frame)).getWebElement());
        });
    }
    getText() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.text.getText();
        });
    }
    swtitchDefaultFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().defaultContent();
        });
    }
}
exports.NestedFramePage = NestedFramePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmVzdGVkRnJhbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmVzdGVkRnJhbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFFckcsTUFBYSxlQUFlO0lBQTVCO1FBRUksU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDdkIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixnQkFBVyxHQUFHLGNBQWMsQ0FBQztRQUM3QixlQUFVLEdBQUcsYUFBYSxDQUFDO0lBb0IvQixDQUFDO0lBakJHLFdBQVc7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFSyxXQUFXLENBQUMsS0FBYTs7WUFDM0IsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDbkYsQ0FBQztLQUFBO0lBRUssT0FBTzs7WUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssbUJBQW1COztZQUNyQixPQUFPLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRCxDQUFDO0tBQUE7Q0FHSjtBQTNCRCwwQ0EyQkMifQ==