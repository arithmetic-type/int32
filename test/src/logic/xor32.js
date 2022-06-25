import test from 'ava';

import {xor32, int32} from '#module';

const macro = (t, A, B, C) => {
	const a = int32(A);
	const b = int32(B);
	const c = int32(C);
	t.deepEqual(xor32(a, b), c, 'a ^ b');
	t.deepEqual(xor32(b, a), c, 'b ^ a');
	t.deepEqual(xor32(a, c), b, 'a ^ c');
	t.deepEqual(xor32(c, a), b, 'c ^ a');
	t.deepEqual(xor32(b, c), a, 'b ^ c');
	t.deepEqual(xor32(c, b), a, 'c ^ b');
};

macro.title = (title, a, b, c) =>
	title ?? `${int32(a)} ^ ${int32(b)} === ${int32(c)}`;

test(macro, 0x00_00_00_00, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0x00_00_00_01, 0xff_ff_ff_ff, 0xff_ff_ff_fe);
test(macro, 0x00_00_00_02, 0xff_ff_ff_ff, 0xff_ff_ff_fd);
test(macro, 0x89_ab_cd_ef, 0xff_ff_ff_ff, 0x76_54_32_10);
