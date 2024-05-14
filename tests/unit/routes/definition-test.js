import { module, test } from 'qunit';
import { setupTest } from 'urban-dictionary/tests/helpers';

module('Unit | Route | definition', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:definition');
    assert.ok(route);
  });
});
