// NOTE This emulates hardware signed integer division. For the mathematical
// definition I guess we would need another function.
const div32 = (a, b) => (a / b) | 0;
export default div32;
