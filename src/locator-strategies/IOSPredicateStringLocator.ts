import { IOSPredicateStringSelector } from "../selectors/IOSPredicateStringSelector";
import { Selector } from "../selectors/Selector";
import { LocatorStrategy } from "./LocatorStrategy";

export class IOSPredicateString extends LocatorStrategy {
  pick(value: string): LocatorStrategy {
    this.checkSelector();
    const element = $(this.selector.selector);
    element.waitForDisplayed();
    element.addValue(value);
    element.click();
    this.selector = null;
    return this;
  }

  select(): Selector {
    this.selector = new IOSPredicateStringSelector(this);
    return this.selector;
  }
}
