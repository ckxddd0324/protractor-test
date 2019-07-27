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
const DynamicLoadPage_1 = require("./DynamicLoadPage");
describe('dynamic load test suite', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    const dynamicLoadPage = new DynamicLoadPage_1.DynamicLoadPage();
    const PageTitle = 'Dynamically Loaded Page Elements';
    const ExampleOneSubtitle = 'Example 1: Element on page that is hidden';
    const LoadingText = 'Loading...';
    const HelloWorldText = 'Hello World!';
    it('Dynamic wait for element on page that is hidden', () => __awaiter(this, void 0, void 0, function* () {
        dynamicLoadPage.openBrowser();
        dynamicLoadPage.clickElement(dynamicLoadPage.exampleOneLink);
        dynamicLoadPage.clickElement(dynamicLoadPage.startBtn);
        const loadingText = yield dynamicLoadPage.getText(dynamicLoadPage.loadingState);
        expect(loadingText).toBe(LoadingText);
        dynamicLoadPage.waitForVisibility(dynamicLoadPage.finishState, 10000);
        const finishState = yield dynamicLoadPage.getText(dynamicLoadPage.finishState);
        expect(finishState).toBe(HelloWorldText);
    }));
    it('Dynamic wait for  rendered after the fact', () => __awaiter(this, void 0, void 0, function* () {
        dynamicLoadPage.openBrowser();
        dynamicLoadPage.clickElement(dynamicLoadPage.exampleTwoLink);
        dynamicLoadPage.clickElement(dynamicLoadPage.startBtn);
        const loadingText = yield dynamicLoadPage.getText(dynamicLoadPage.loadingState);
        expect(loadingText).toBe(LoadingText);
        dynamicLoadPage.waitForVisibility(dynamicLoadPage.finishState, 10000);
        const finishState = yield dynamicLoadPage.getText(dynamicLoadPage.finishState);
        expect(finishState).toBe(HelloWorldText);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY0xvYWQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImR5bmFtaWNMb2FkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxRztBQUVyRyx1REFBb0Q7QUFFcEQsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtJQUMzQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTlDLE1BQU0sU0FBUyxHQUFHLGtDQUFrQyxDQUFDO0lBQ3JELE1BQU0sa0JBQWtCLEdBQUcsMkNBQTJDLENBQUM7SUFDdkUsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLE1BQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUV0QyxFQUFFLENBQUMsaURBQWlELEVBQUUsR0FBUyxFQUFFO1FBQy9ELGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO1FBQ3pELGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxlQUFlLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxNQUFNLFdBQVcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=