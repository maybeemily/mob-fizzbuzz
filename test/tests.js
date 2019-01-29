const test = QUnit.test;

function fizzBuzz(num) {
    
    if(num % 9 === 0) {
        return num + ' fizz';
    }
    else if(num % 4 === 0) {
        return num + ' buzz';
    }
    else {
        return num;
    }
}


test('if divisible by 9 return number and fizz', function(assert) {
    let result = fizzBuzz(9);
    assert.equal(result, '9 fizz');
});

test('if divisible by 4 return number and buzz', function(assert) {
    let result = fizzBuzz(4);
    assert.equal(result, '4 buzz');
});

test('if not divisible by 9 or 4, return number', function(assert) {
    let num = 5;
    let result = fizzBuzz(num);
    assert.equal(result, num);
});




