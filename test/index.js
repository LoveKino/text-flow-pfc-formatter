'use strict';

let {
    format
} = require('..');
let assert = require('assert');

let testData = {
    '': '',
    '123': '123',
    'abc{:f(1):}def': 'abc{:f(\n    1\n):}def',
    'abc{:f(1):} def': 'abc{:f(\n    1\n):} def',
    'abc{:f(1, 2):}def': 'abc{:f(\n    1,\n    2\n):}def'
};

describe('index', () => {
    for (let source in testData) {
        let target = testData[source];

        it(source, () => {
            let ret = format(source);
            assert.equal(ret, target);
        });
    }
});
