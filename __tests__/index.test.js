import reverse from '../src/index';

test('reverse', () => {
  expect(reverse('hello')).toEqual('ol5leh');
  expect(reverse('')).toEqual('');
});
