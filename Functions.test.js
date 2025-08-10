const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray} = require('./Functions');


test('Capitalizes the first character of a string', () =>{
    expect(capitalize('javascript')).toBe('Javascript');
});


test('Reverses a string', () =>{
    expect(reverseString('javascript')).toBe('tpircsavaj');
});