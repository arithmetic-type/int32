import test from 'ava';

import {not32, int32} from '#module';

const macro = (t, A, B) => {
	const a = int32(A);
	const b = int32(B);
	t.deepEqual(not32(a), b, '~a === b');
	t.deepEqual(not32(b), a, '~b === a');
};

macro.title = (title, a, b) => title ?? `~${int32(a)} === ${int32(b)}`;

test(macro, 0x00_00_00_00, 0xff_ff_ff_ff);
test(macro, 0x00_00_00_01, 0xff_ff_ff_fe);
test(macro, 0x00_00_00_02, 0xff_ff_ff_fd);
test(macro, 0x89_ab_cd_ef, 0x76_54_32_10);
