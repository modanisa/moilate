import { LocatorStrategy } from "../locator-strategies/LocatorStrategy";
import { Selector } from "./Selector";


export class UIAutomatorSelector implements Selector{

    private locator: LocatorStrategy;
    private _selector: string;

    
    constructor(locator: LocatorStrategy) {
       this.locator = locator;
       this._selector = "android=new UiSelector()." 
    }

    contains(key: string, property: string): Selector {
        switch (property) {
            case "text":
                this._selector += `textContains("${key}")`;    
                break;
            case "resourceId":
                this._selector += `resourceIdMatches("^.*${key}.*$")`;
                break;
            case "description":
                this._selector += `descriptionContains("${key}")`;
            default:
                throw new Error(`Cannot find ${property} property on android..`);
        }
        return this;
    }

    and(): Selector {
       this._selector += ".";
       return this;
    }
    
    or(): Selector {
        throw new Error("Method not implemented.");
    }

    not(): Selector {
        throw new Error("Method not implemented.");
    }

    exactMatch(key: string, property: string): Selector {
        switch (property) {
            case "text":
                this._selector += `text("${key}")`;    
                break;
            case "resourceId":
                this._selector += `resourceId("${key}")`;
                break;
            case "description":
                this._selector += `description("${key}")`;
            default:
                throw new Error(`Cannot find ${property} property on android..`);
        }
        return this;
    }

    build(): LocatorStrategy {
        return this.locator;
    }

    public get selector(): string {
        return this._selector;
    }
}