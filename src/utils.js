/**
 * Because Web components attributes convert booleans to strings
 * this stops values like false from being converted to "false" and then evaluating as true.
 * @param {boolean} bool
 * @return {*}
 */
export const wcBool = (bool) => (bool ? true : null);
