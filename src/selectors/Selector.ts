import { LocatorStrategy } from '../locator-strategies/LocatorStrategy';

export interface Selector {
  contains(key: string, property: string): Selector;
  and(): Selector;
  or(): Selector;
  not(): Selector;
  exactMatch(key: string, property: string): Selector;
  startChildSelector(): Selector;
  endChildSelector(): Selector;
  build(): LocatorStrategy;
  readonly selector: string;
}
