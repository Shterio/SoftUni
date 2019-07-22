const is = (type, val) => ![undefined, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, String('')); // true
is(Number, 1); // true
is(Number, Number(1)); // true
is(Boolean, true); // true
is(Boolean, Boolean(true)); // true