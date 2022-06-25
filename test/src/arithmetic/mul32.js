import test from 'ava';

import {mul32, int32, min, max} from '#module';

function macro(t, A, B, EXPECTED) {
	const a = int32(A);
	const b = int32(B);
	const expected = int32(EXPECTED);
	t.deepEqual(mul32(a, b), expected, 'a * b');
	t.deepEqual(mul32(b, a), expected, 'b * a');
}

macro.title = (title, a, b, expected) => title ?? `${a} * ${b} === ${expected}`;

test(macro, 0, 0, 0);
test(macro, 0, 1, 0);
test(macro, 0, -1, 0);
test(macro, 0, max, 0);
test(macro, 0, min, 0);
test(macro, 2, max, -2);
test(macro, 2, min, 0);
test(macro, min, min, 0);
test(macro, min, max, min);
test(macro, max, max, 1);

test(macro, -123_456, -123_456, -1_938_485_248);
test(macro, 2, 4, 8);
test(macro, -1, 8, -8);
test(macro, -2, -2, 4);
test(macro, 0xff_ff_ff_ff, 5, -5);
test(macro, 0xff_ff_ff_fe, 5, -10);
