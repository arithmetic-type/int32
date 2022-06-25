/**
 * Decreasing order for int32 arithmetic type.
 *
 * @param {number} a
 * @param {number} b
 * @return {number} 0 if a equals b, -1 if a is larger than b, and 1 otherwise
 */
const decreasing = (a, b) => (a < b ? 1 : a > b ? -1 : 0);

export default decreasing;
