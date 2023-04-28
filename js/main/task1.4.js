// Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы
//  при запуске кода alert написал 'true'.

// Исходный код:

// a = 12;
// b = 'number';
// c = false;
// d = null;
// e = undefined;
// f = 123.34;
// g = '1' + 1;
// h = 15 / 0;
// i = -'5';
// j = 5 == '5'

// at = typeof a === 'number'; // true
// bt = typeof b === 'SOME'; // false, а нужно чтобы все были true
// ct = typeof c === 'SOME';
// dt = typeof d === 'SOME';
// et = typeof e === 'SOME';
// ft = typeof f === 'SOME';
// gt = typeof g === 'SOME';
// ht = typeof h === 'SOME';
// it = typeof i === 'SOME';
// jt = typeof j === 'SOME';

// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);