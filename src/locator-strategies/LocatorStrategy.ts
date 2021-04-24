import { Selector } from "../selectors/Selector";

export abstract class LocatorStrategy {
  protected selector: Selector;

  click(): LocatorStrategy {
    this.checkSelector();
    $(this.selector.selector).click();
    this.selector = null;
    return this;
  }

  exists(): boolean {
    try {
      $(this.selector.selector).waitForDisplayed();
      return $(this.selector.selector).isExisting();
    } catch (e) {
      return false;
    }
  }

  label(): string {
    this.checkSelector();
    let property: string = browser.isIOS ? "label" : "text";
    return $(this.selector.selector).getAttribute(property);
  }

  value(): string {
    this.checkSelector();
    let property: string = browser.isIOS ? "value" : "value";
    return $(this.selector.selector).getAttribute(property);
  }

  checkSelector(): void {
    if (this.selector === null || this.selector.selector === "") {
      throw new Error(
        "Selector string is empty. You should build selector before click,pick etc."
      );
    }
  }

  abstract pick(value: string): LocatorStrategy;
  abstract select(): Selector;
}
