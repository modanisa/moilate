import { Selector } from "../selectors/Selector";
import { UIAutomatorSelector } from "../selectors/UIAutomatorSelector";
import { LocatorStrategy } from "./LocatorStrategy";


export class UIAutomator extends LocatorStrategy{
    
    pick(value: string): LocatorStrategy {
        let uiSelector : string = this.selector.selector.split("=")[1];
        let selector : string = `android=new UiScrollable(${uiSelector}).scrollIntoView(new UiSelector().textContains(\"${value}\"))`;
        $(selector).waitForExist();
        $(selector).click();
        return this;
    }

    select(): Selector {
        this.selector = new UIAutomatorSelector(this);
        return this.selector;
    }
}