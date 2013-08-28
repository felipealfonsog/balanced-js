module('balanced.js.cards', {
    setup: function () {
    },

    teardown: function () {
    }
});

test('isCardNumberValid', function (assert) {
    var tests = [
        {
            number: '4111111111111111',
            expected: true
        },
        {
            number: ' 4111111111111111',
            expected: true
        },
        {
            number: '4111111111111111 ',
            expected: true
        },
        {
            number: ' 4111111111111111 ',
            expected: true
        },
        {
            number: '4111 1111 1111 1111',
            expected: true
        },
        {
            number: '4111-1111-1111-1111',
            expected: true
        },
        {
            number: '4111-1111-1111-1111 ',
            expected: true
        },
        {
            number: ' 4111-1111-1111-1111',
            expected: true
        },
        {
            number: ' 4111-1111-1111-1111 ',
            expected: true
        },
        {
            number: '42123',
            expected: false
        },
        {
            number: 41111,
            expected: false
        },
        {
            number: 'no numbers in hurr',
            expected: false
        },
        {
            number: null,
            expected: false
        },
        {
            number: '',
            expected: false
        },
        {
            number: false,
            expected: false
        },
        {
            number: true,
            expected: false
        }
    ];

    for(var i = 0; i < tests.length; i++) {
        assert.equal(balanced.card.isCardNumberValid(tests[i].number), tests[i].expected);
    }
});

test('cardType', function (assert) {
    var tests = [
        {
            number: '5105105105105100',
            expected: 'Mastercard'
        },
        {
            number: '4111111111111111',
            expected: 'VISA'
        },
        {
            number: '341111111111111',
            expected: 'American Express'
        },
        {
            number: '4111111111111111 ',
            expected: 'VISA'
        },
        {
            number: ' 4111111111111111',
            expected: 'VISA'
        },
        {
            number: ' 4111111111111111 ',
            expected: 'VISA'
        },
        {
            number: '4111 1111 1111 1111',
            expected: 'VISA'
        },
        {
            number: '4111-1111-1111-1111',
            expected: 'VISA'
        },
        {
            number: 'no numbers in hurr',
            expected: null
        },
        {
            number: null,
            expected: null
        },
        {
            number: '',
            expected: null
        },
        {
            number: false,
            expected: null
        },
        {
            number: true,
            expected: null
        }
    ];

    for(var i = 0; i < tests.length; i++) {
        assert.equal(balanced.card.cardType(tests[i].number), tests[i].expected);
    }
});
