import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('bowtie functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('bowtie main page shows up', function() {
  F('title').text('bowtie', 'Title is set');
});
