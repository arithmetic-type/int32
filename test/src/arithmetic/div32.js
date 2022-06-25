import test from 'ava';

import {div32, int32, neg32, min, max} from '#module';

function macro(t, A, B, EXPECTED) {
	const a = int32(A);
	const b = int32(B);
	const expected = int32(EXPECTED);
	t.deepEqual(div32(a, b), expected, 'a / b');
	if (a !== min && b !== min) {
		t.deepEqual(div32(neg32(a), neg32(b)), expected, '-a / -b');
		t.deepEqual(div32(neg32(a), b), neg32(expected), '-a / b');
		t.deepEqual(div32(a, neg32(b)), neg32(expected), 'a / -b');
	}
}

macro.title = (title, a, b, expected) => title ?? `${a} / ${b} === ${expected}`;

test(macro, 0, 0, 0);
test(macro, 0, 1, 0);
test(macro, 5, 2, 2);
test(macro, 5, 3, 1);
test(macro, min, min, 1);
test(macro, max, max, 1);
test(macro, min, max, -1);
test(macro, max, min, 0);
