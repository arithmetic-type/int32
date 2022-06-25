import test from 'ava';

import {decreasing, min, max} from '#module';

test('decreasing', (t) => {
	t.true(decreasing(max, min) < 0, 'int32 <');
	t.true(decreasing(max, max) === 0, 'int32 = (max)');
	t.true(decreasing(min, min) === 0, 'int32 = (min)');
	t.true(decreasing(min, max) > 0, 'int32 >');
});
