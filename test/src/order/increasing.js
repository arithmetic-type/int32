import test from 'ava';

import {increasing, min, max} from '#module';

test('increasing', (t) => {
	t.true(increasing(min, max) < 0, 'int32 <');
	t.true(increasing(max, max) === 0, 'int32 = (max)');
	t.true(increasing(min, min) === 0, 'int32 = (min)');
	t.true(increasing(max, min) > 0, 'int32 >');
});
