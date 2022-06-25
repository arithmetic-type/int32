import test from 'ava';

import {or32, int32} from '#module';

const macro = (t, A, B, C) => {
	const a = int32(A);
	const b = int32(B);
	const c = int32(C);
	t.deepEqual(or32(a, b), c, 'a | b');
	t.deepEqual(or32(b, a), c, 'b | a');
};

macro.title = (title, a, b, c) =>
	title ?? `${int32(a)} | ${int32(b)} === ${int32(c)}`;

test(macro, 0x00_00_00_00, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0x00_00_00_01, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0x00_00_00_02, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0x89_ab_cd_ef, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 0xff_ff_ff_ff, 0xff_ff_ff_ff);
test(macro, 0xff_ff_00_00, 0x00_00_ff_ff, 0xff_ff_ff_ff);
test(macro, 0xff_ff_76_00, 0x00_67_ff_ff, 0xff_ff_ff_ff);
test(macro, 0xff_00_76_00, 0x00_12_00_ff, 0xff_12_76_ff);
test(macro, 0xff_52_72_00, 0x00_1a_36_ff, 0xff_5a_76_ff);
test(macro, 0x81_52_72_34, 0x7e_1a_36_cb, 0xff_5a_76_ff);
test(macro, 0x52_81_34_72, 0x1a_7e_cb_36, 0x5a_ff_ff_76);
