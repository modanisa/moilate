import { UIAutomatorSelector } from '../../selectors/UIAutomatorSelector';
import { SelectorProperty } from '../../GeneralEnumaration';

describe('UIAutomatorSelector', () => {
  test('contains method generates correct selector string for text property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.contains('test-string', SelectorProperty.Android.UIAutomator.TEXT);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().textContains("test-string")`);
  });

  test('contains method generates correct selector string for resourceId property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.contains('test-string', SelectorProperty.Android.UIAutomator.RESOURCE_ID);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().resourceIdMatches("^.*test-string.*$")`);
  });

  test('contains method generates correct selector string for description property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.contains('test-string', SelectorProperty.Android.UIAutomator.DESCRIPTION);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().descriptionContains("test-string")`);
  });

  test('contains method throws error when unknown property is given', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    expect(() => {
      uiAutomatorSelector.contains('test-string', 'unknown-property');
    }).toThrowError();
  });

  test('contains method generates correct selector string when used multiple times with and method', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector
      .contains('test-string', SelectorProperty.Android.UIAutomator.DESCRIPTION)
      .and()
      .contains('test-string-2', SelectorProperty.Android.UIAutomator.TEXT)
      .and()
      .contains('test-string-3', SelectorProperty.Android.UIAutomator.RESOURCE_ID);

    expect(uiAutomatorSelector.selector).toBe(
      `android=new UiSelector().descriptionContains("test-string").textContains("test-string-2").resourceIdMatches("^.*test-string-3.*$")`,
    );
  });

  test('exactMatch method generates correct selector string for text property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.exactMatch('test-string', SelectorProperty.Android.UIAutomator.TEXT);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().text("test-string")`);
  });

  test('exactMatch method generates correct selector string for text property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.exactMatch('test-string', SelectorProperty.Android.UIAutomator.RESOURCE_ID);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().resourceId("test-string")`);
  });

  test('exactMatch method generates correct selector string for text property', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector.exactMatch('test-string', SelectorProperty.Android.UIAutomator.DESCRIPTION);

    expect(uiAutomatorSelector.selector).toBe(`android=new UiSelector().description("test-string")`);
  });

  test('exactMatch method throws error when unknown property is given', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    expect(() => {
      uiAutomatorSelector.exactMatch('test-string', 'unknown-property');
    }).toThrowError();
  });

  test('exactMatch method generates correct selector string when used multiple times with and method', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector
      .exactMatch('test-string', SelectorProperty.Android.UIAutomator.DESCRIPTION)
      .and()
      .exactMatch('test-string-2', SelectorProperty.Android.UIAutomator.TEXT)
      .and()
      .exactMatch('test-string-3', SelectorProperty.Android.UIAutomator.RESOURCE_ID);

    expect(uiAutomatorSelector.selector).toBe(
      `android=new UiSelector().description("test-string").text("test-string-2").resourceId("test-string-3")`,
    );
  });

  test('child selectors generate correct selector', () => {
    const uiAutomatorSelector = new UIAutomatorSelector(null);

    uiAutomatorSelector
      .contains('test-string', SelectorProperty.Android.UIAutomator.DESCRIPTION)
      .startChildSelector()
      .contains('test-string-2', SelectorProperty.Android.UIAutomator.TEXT)
      .endChildSelector();

    expect(uiAutomatorSelector.selector).toBe(
      `android=new UiSelector().descriptionContains("test-string").childSelector(new UiSelector().textContains("test-string-2"))`,
    );
  });
});
