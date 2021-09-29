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

  test('contains method generates correct selector string when used multiple times with or method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .contains('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .or()
      .contains('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .or()
      .contains('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name CONTAINS 'test-string' || type CONTAINS 'test-string-2' || name CONTAINS 'test-string-3'`,
    );
  });

  test('contains method generates correct selector string when used multiple times with not method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .contains('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .not()
      .contains('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .not()
      .contains('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name CONTAINS 'test-string' ! type CONTAINS 'test-string-2' ! name CONTAINS 'test-string-3'`,
    );
  });

  test('contains method generates correct selector string when used multiple times with the and or not methods', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .contains('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .and()
      .contains('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .or()
      .contains('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME)
      .not()
      .contains('test-string-4', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name CONTAINS 'test-string' && type CONTAINS 'test-string-2' || name CONTAINS 'test-string-3' ! name CONTAINS 'test-string-4'`,
    );
  });

  test('exactMatch method generates correct selector string for any property', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector.exactMatch('test-string', 'some-property-name');

    expect(iosPredicateStringSelector.selector).toBe(`-ios predicate string: some-property-name == 'test-string'`);
  });

  test('exactMatch method generates correct selector string when used multiple times with and method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .exactMatch('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .and()
      .exactMatch('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .and()
      .exactMatch('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name == 'test-string' && type == 'test-string-2' && name == 'test-string-3'`,
    );
  });

  test('exactMatch method generates correct selector string when used multiple times with or method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .exactMatch('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .or()
      .exactMatch('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .or()
      .exactMatch('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name == 'test-string' || type == 'test-string-2' || name == 'test-string-3'`,
    );
  });

  test('exactMatch method generates correct selector string when used multiple times with not method', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .exactMatch('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .not()
      .exactMatch('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .not()
      .exactMatch('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name == 'test-string' ! type == 'test-string-2' ! name == 'test-string-3'`,
    );
  });

  test('exactMatch method generates correct selector string when used multiple times with the and or not methods', () => {
    const iosPredicateStringSelector = new IOSPredicateStringSelector(null);

    iosPredicateStringSelector
      .exactMatch('test-string', SelectorProperty.IOS.IOSPredicate.NAME)
      .and()
      .exactMatch('test-string-2', SelectorProperty.IOS.IOSPredicate.TYPE)
      .or()
      .exactMatch('test-string-3', SelectorProperty.IOS.IOSPredicate.NAME)
      .not()
      .exactMatch('test-string-4', SelectorProperty.IOS.IOSPredicate.NAME);

    expect(iosPredicateStringSelector.selector).toBe(
      `-ios predicate string: name == 'test-string' && type == 'test-string-2' || name == 'test-string-3' ! name == 'test-string-4'`,
    );
  });
});
