import test from 'ava';

import {sub32, int32, neg32, min, max} from '#module';

function macro(t, A, B, EXPECTED) {
	const a = int32(A);
	const b = int32(B);
	const expected = int32(EXPECTED);
	t.deepEqual(sub32(a, b), expected, 'a - b');
	t.deepEqual(neg32(sub32(b, a)), expected, '-(b - a)');
}

macro.title = (title, a, b, expected) => title ?? `${a} - ${b} === ${expected}`;

test(macro, 0, 0, 0);
test(macro, 0, 1, -1);
test(macro, 0, -1, 1);
test(macro, min, 1, max);
test(macro, min, max, 1);
test(macro, max, min, -1);
test(macro, min, min, 0);
test(macro, max, max, 0);
