/**
 * Get a template from a string
 * https://stackoverflow.com/a/41015840
 * @param  {String} str    The string to interpolate
 * @param  {Object} params The parameters
 * @return {String}        The interpolated string
 */
export const interpolate = (str, params) => {
  let names = Object.keys(params);
  let vals = Object.values(params);
  return new Function(...names, `return \`${str}\`;`)(...vals);
};
