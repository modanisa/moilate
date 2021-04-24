import { IOSPredicateString } from "./locator-strategies/IOSPredicateStringLocator";
import { LocatorStrategy } from "./locator-strategies/LocatorStrategy";
import { UIAutomator } from "./locator-strategies/UIAutomatorLocator";
import { Selector } from "./selectors/Selector";

export enum LocatorStrategyType {
  XPATH,
  IOS_PREDICATE_STRING,
  ACCESIBILITY_ID,
  ANDROID_UISELECTOR,
}

export class Locator {
  private strategy: LocatorStrategy;

  constructor(strategyType?: LocatorStrategyType) {
    switch (strategyType) {
      case LocatorStrategyType.IOS_PREDICATE_STRING:
        this.strategy = new IOSPredicateString();
        break;
      default:
        if (browser.isAndroid) {
          this.strategy = new UIAutomator(); //TODO replace proper android default strategy
        } else {
          this.strategy = new IOSPredicateString();
        }
        break;
    }
  }

  public click() {
    this.strategy.click();
    return this;
  }

  public pick(value: string) {
    this.strategy.pick(value);

    return this;
  }

  public exists(): boolean {
    return this.strategy.exists();
  }

  public wait(timeout: number = 5000) {
    browser.pause(timeout);
  }

  public selector(): Selector {
    return this.strategy.select();
  }
}
// locator = new Locator(PREDICT)
// selector->
// locator.select().contains().and().build().click()
// locator.click()
