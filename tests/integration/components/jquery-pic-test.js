import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jquery-pic', 'Integration | Component | jquery pic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{jquery-pic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#jquery-pic}}
      template block text
    {{/jquery-pic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
