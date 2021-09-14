import { Selector } from '../selectors/Selector';
import { UIAutomatorSelector } from '../selectors/UIAutomatorSelector';
import { LocatorStrategy } from './LocatorStrategy';

export class UIAutomator extends LocatorStrategy {
  pick(value: string): LocatorStrategy {
    const uiSelector: string = this.selector.selector.split('=')[1];
    const selector: string = `android=new UiScrollable(${uiSelector}).flingToBeginning(100).scrollIntoView(new UiSelector().textContains(\"${value}\"))`;
    $(selector).click();
    return this;
  }

  select(): Selector {
    this.selector = new UIAutomatorSelector(this);
    return this.selector;
  }
}
