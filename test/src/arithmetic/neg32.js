import test from 'ava';

import {neg32, int32, min, max} from '#module';

function macro(t, A, B) {
	const a = int32(A);
	const b = int32(B);
	t.deepEqual(neg32(a), b, '-a === b');
	t.deepEqual(neg32(b), a, '-b === a');
}

macro.title = (title, a, b) => title ?? `-(${a}) === ${b}`;

test(macro, 0, 0);
test(macro, 1, -1);
test(macro, max, min + 1);
test(macro, min, min);
