import test from 'ava';

import {shr32, int32} from '#module';

const macro = (t, A, s, EXPECTED) => {
	const a = int32(A);
	const expected = int32(EXPECTED);
	t.deepEqual(shr32(a, s), expected, 'a >> s');
	t.deepEqual(shr32(a, s + 32), expected, 'a >> (s+32)');
};

macro.title = (title, a, s, expected) =>
	title ?? `${int32(a)} >> ${s} === ${int32(expected)}`;

test(macro, 0x00_00_00_00, 0, 0x00_00_00_00);
test(macro, 0x00_00_00_00, 21, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 1, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 28, 0x00_00_00_00);
test(macro, 0x00_00_00_00, 1, 0x00_00_00_00);
test(macro, 0x00_00_00_00, 28, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 0, 0x00_00_00_01);
test(macro, 0x00_00_00_02, 0, 0x00_00_00_02);

test(macro, 0xff_ff_ff_ff, 0, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 1, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 2, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 3, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 4, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 5, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 6, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 7, 0xff_ff_ff_ff);

test(macro, 0x89_ab_cd_ef, 0, 0x89_ab_cd_ef);
test(macro, 0x89_ab_cd_ef, 4, 0xf8_9a_bc_de);
test(macro, 0x89_ab_cd_ef, 8, 0xff_89_ab_cd);
test(macro, 0x89_ab_cd_ef, 12, 0xff_f8_9a_bc);
test(macro, 0x89_ab_cd_ef, 16, 0xff_ff_89_ab);
test(macro, 0x89_ab_cd_ef, 20, 0xff_ff_f8_9a);
test(macro, 0x89_ab_cd_ef, 24, 0xff_ff_ff_89);
test(macro, 0x89_ab_cd_ef, 28, 0xff_ff_ff_f8);
