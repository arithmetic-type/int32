import test from 'ava';

import {add32, int32, min, max} from '#module';

function macro(t, A, B, EXPECTED) {
	const a = int32(A);
	const b = int32(B);
	const expected = int32(EXPECTED);
	t.deepEqual(add32(a, b), expected, 'a + b');
	t.deepEqual(add32(b, a), expected, 'b + a');
}

macro.title = (title, a, b, expected) => title ?? `${a} + ${b} === ${expected}`;

test(macro, 0, 0, 0);
test(macro, 0, 1, 1);
test(macro, 1, max, min);
test(macro, 2, max, min + 1);
test(macro, max, max, -2);
test(macro, min, min, 0);
