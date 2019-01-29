const test = QUnit.test;

function fizzBuzz(num) {

    if(num === 100) {
        return 'YOU ARE SO SPECIAL';
    }
    else if(num % 9 === 0 && num % 4 === 0) {
        return num + ' fizzbuzz';
    }
    else if(num % 9 === 0) {
        return num + ' fizz';
    }
    else if(num % 4 === 0) {
        return num + ' buzz';
    }
    else {
        return num;
    }
}

test('if num is 100, return YOU ARE SO SPECIAL', function(assert) {
    let num = 100;
    let result = fizzBuzz(num);
    assert.equal(result, 'YOU ARE SO SPECIAL');
});

test('if divisible by 9 return number and fizz', function(assert) {
    let num = 9;
    let result = fizzBuzz(num);
    assert.equal(result, num + ' fizz');
});

test('if divisible by 4 return number and buzz', function(assert) {
    let num = 4; 
    let result = fizzBuzz(num);
    assert.equal(result, num + ' buzz');
});

test('if not divisible by 9 or 4, return number', function(assert) {
    let num = 5;
    let result = fizzBuzz(num);
    assert.equal(result, num);
});

test('if divisible by 4 and 9, return number and fizzbuzz', function(assert) {
    let num = 36;
    let result = fizzBuzz(num);
    assert.equal(result, num + ' fizzbuzz');
});




