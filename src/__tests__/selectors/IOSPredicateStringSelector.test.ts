import { IOSPredicateStringSelector } from '../../selectors/IOSPredicateStringSelector';
import { SelectorProperty } from '../../GeneralEnumaration';

describe('IOSPredicateStringSelector', () => {
  test('contains method generates correct selector string for any property', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector.contains('test-string', 'some-property-name');

    expect(iosPredicateStringSelector.selector).toBe(`-ios predicate string: some-property-name CONTAINS 'test-string'`);
  });

  test('contains method generates correct selector string when used multiple times with and method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .contains('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .and()
      .contains('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .and()
      .contains('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name CONTAINS 'test-string' && type CONTAINS 'test-string-2' && name CONTAINS 'test-string-3'`,
    );
  });
});
