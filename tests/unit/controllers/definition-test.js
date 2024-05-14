import { module, test } from 'qunit';
import { setupTest } from 'urban-dictionary/tests/helpers';

module('Unit | Controller | definition', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:definition');
    assert.ok(controller);
  });
});
