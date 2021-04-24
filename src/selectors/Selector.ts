import { LocatorStrategy } from "../locator-strategies/LocatorStrategy";

export interface Selector {
  contains(key: string, property: string): Selector;
  and(): Selector;
  or(): Selector;
  not(): Selector;
  exactMatch(key: string, property: string): Selector;
  build(): LocatorStrategy;
  readonly selector: string;
}
