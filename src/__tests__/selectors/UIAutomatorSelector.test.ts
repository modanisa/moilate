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
});
