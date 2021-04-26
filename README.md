# Moilate

Moilate is a element selector which makes element selection easy for e2e testing on mobile platforms. It based on Appium and Webdriverio frameworks.

# Table of Content
- [Moilate](#moilate)
- [Table of Content](#table-of-content)
  - [Overview](#overview)
  - [Installation](#installation)
  - [Concepts](#concepts)
    - [SelectorProperty](#selectorproperty)
    - [Build a Query](#build-a-query)
    - [Working with Events](#working-with-events)
  - [Examples](#examples)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [License](#license)

## Overview

Moilate's aim is to simplify the element selection for both **android** and **ios** drivers which are **UIAutomator**, **IOS Predicate String** etc. It uses those native drivers via webdriverio and translate each of them syntax into perceptible query pattern. In addition, this query pattern provides common functions for both platform with catch syntax. *For example;*

The following code is to select an element which contains a text by using UIAutomator on Android :

```java
new UiSelector().text("Some Button")
```

This selection could be done like in following by using IOS Predicate string on ios platform;
```swift
-ios predicate string:name CONTAINS 'Some Button'
```
In moilate this can be done for both platforms by following statement;
```typescript
this.locator.selector()
			.contains("button_toolbarDone", SelectorProperty)
			.build();
```

## Installation 

To install moilate using yarn
```bash
yarn add moilate
```
Or npm
```bash
npm install moilate
```

## Concepts

### SelectorProperty
SelectorProperty is the one of the vital concept on moilate which is simply a function parameter indicates the property of any mobile platform. Obviously, each platform has its own property such as resourceId, name, text etc. In order to select any element successfuly, selector property must be defined on query pattern. For example, you can select an element by using resourceId property on Android and ,likewise, can select a element by using name property on ios.

```typescript
this.locator.selector()
.exactMatch("com.app:id/some_id",
SelectorProperty.Android.UIAutomator.RESOURCE_ID)
.build();
```

```typescript
this.locator
.selector()
.contains("some_name", SelectorProperty.IOS.IOSPredicate.NAME)
.build();
```

All selector properties are defined in the GeneralEnumaration for both platforms.

### Build a Query
To complete the selection query, each statement should end with the build function. Since moilate support operators like or, and, not, this function indicates that query chain is completed and selection should be done with certain query.  For example,

```typescript
this.locator
.selector()
.contains("some_name", SelectorProperty.IOS.IOSPredicate.NAME)
.or()
.contains("another_name", SelectorProperty.IOS.IOSPredicate.NAME)
.build();
```
 
 ### Working with Events

Besides the element selection, moilate also support some basic events for e2e testing. After query building, a event can be triggered by simply adding the certain function end of the build function. For example, 

```typescript
this.locator
.selector()
.contains("some_name", SelectorProperty.IOS.IOSPredicate.NAME)
.click();
```

Currently supported events as follows; 

 - click() : to click selected element. 
 - pick(value:string) : to pick a value from selected dropdown.
 - exists() : to check whether selected element is exist or not.
 - wait(timeout: number = 5000): to wait certain time, default waiting time is 5000ms. To use this function query building is not needed like; 
	 ```typescript
	 this.locator.wait()
	 ```

## Examples
```typescript

if (browser.isIOS) {
this.locator
.selector()
.contains("example1", SelectorProperty.IOS.IOSPredicate.NAME)
.build()
.click();

this.locator
.selector()
.contains("textField_example", SelectorProperty.IOS.IOSPredicate.NAME)
.build()
.click();

this.locator
.selector()
.exactMatch("XCUIElementTypePickerWheel", SelectorProperty.IOS.IOSPredicate.TYPE)
.build()

this.locator
.selector()
.contains("button_example", SelectorProperty.IOS.IOSPredicate.NAME)
.build()
.click();
this.locator.wait(4000)
}
```

```typescript
if (browser.isAndroid) { // For Android 
this.locator.selector()
.exactMatch("com.app:id/changeCountryLanguageLayout", SelectorProperty.Android.UIAutomator.RESOURCE_ID)
.build()
.click();

let  currentLangOnApp = this.locator.selector()
.exactMatch("com.app:id/language", SelectorProperty.Android.UIAutomator.RESOURCE_ID)
.build().label().slice(0, 2)

this.locator
.selector()
.exactMatch("com.app:id/countryLayout", SelectorProperty.Android.UIAutomator.RESOURCE_ID)
.build()
.click();

this.locator
.selector()
.exactMatch("com.app:id/select_dialog_listview", SelectorProperty.Android.UIAutomator.RESOURCE_ID)
.build()
.pick("Turkey");
}
```

## Contributing

To contribute moilate, you can follow Contribution.md

## Contributors

<a href = "https://github.com/modanisatech/moilate/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=modanisatech/moilate"/>
</a>

## License
Moilate is [MIT licensed](https://github.com/modanisatech/moilate/blob/master/LICENSE)