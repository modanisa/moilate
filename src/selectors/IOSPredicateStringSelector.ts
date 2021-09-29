import { LocatorStrategy } from '../locator-strategies/LocatorStrategy';
import { Selector } from './Selector';

export class IOSPredicateStringSelector implements Selector {
  private locator: LocatorStrategy;
  private _selector: string;
  constructor(locator: LocatorStrategy) {
    this.locator = locator;
    this._selector = '-ios predicate string: ';
  }
  contains(key: string, property: string): Selector {
    this._selector += `${property} CONTAINS '${key}'`;
    return this;
  }
  exactMatch(key: string, property: string): Selector {
    this._selector += `${property} == '${key}'`;
    return this;
  }
  and(): Selector {
    this._selector += ` && `;
    return this;
  }
  or(): Selector {
    this._selector += ` || `;
    return this;
  }
  not(): Selector {
    this._selector += ` ! `;
    return this;
  }
  build(): LocatorStrategy {
    return this.locator;
  }
  public get selector(): string {
    return this._selector;
  }
}
