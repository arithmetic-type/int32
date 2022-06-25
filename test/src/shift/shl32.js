import test from 'ava';

import {shl32, int32} from '#module';

const macro = (t, A, s, EXPECTED) => {
	const a = int32(A);
	const expected = int32(EXPECTED);
	t.deepEqual(shl32(a, s), expected, 'a << s');
	t.deepEqual(shl32(a, s + 32), expected, 'a << (s+32)');
};

macro.title = (title, a, s, expected) =>
	title ?? `${int32(a)} << ${s} === ${int32(expected)}`;

test(macro, 0x00_00_00_00, 0, 0x00_00_00_00);
test(macro, 0x00_00_00_00, 21, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 1, 0x00_00_00_02);
test(macro, 0x00_00_00_01, 28, 0x10_00_00_00);
test(macro, 0x00_00_00_00, 1, 0x00_00_00_00);
test(macro, 0x00_00_00_00, 28, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 0, 0x00_00_00_01);
test(macro, 0x00_00_00_02, 0, 0x00_00_00_02);

test(macro, 0xff_ff_ff_ff, 0, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 4, 0xff_ff_ff_f0);
test(macro, 0xff_ff_ff_ff, 8, 0xff_ff_ff_00);
test(macro, 0xff_ff_ff_ff, 12, 0xff_ff_f0_00);
test(macro, 0xff_ff_ff_ff, 16, 0xff_ff_00_00);
test(macro, 0xff_ff_ff_ff, 20, 0xff_f0_00_00);
test(macro, 0xff_ff_ff_ff, 24, 0xff_00_00_00);
test(macro, 0xff_ff_ff_ff, 28, 0xf0_00_00_00);

test(macro, 0x89_ab_cd_ef, 0, 0x89_ab_cd_ef);
test(macro, 0x89_ab_cd_ef, 4, 0x9a_bc_de_f0);
test(macro, 0x89_ab_cd_ef, 8, 0xab_cd_ef_00);
test(macro, 0x89_ab_cd_ef, 12, 0xbc_de_f0_00);
test(macro, 0x89_ab_cd_ef, 16, 0xcd_ef_00_00);
test(macro, 0x89_ab_cd_ef, 20, 0xde_f0_00_00);
test(macro, 0x89_ab_cd_ef, 24, 0xef_00_00_00);
test(macro, 0x89_ab_cd_ef, 28, 0xf0_00_00_00);
