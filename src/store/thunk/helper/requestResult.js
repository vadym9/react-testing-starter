export const requestSuccess = (name, payload) => ({
  type: `${`${name}_SUCCESS`}`,
  payload
});

export const requestFail = name => ({
  type: `${`${name}_FAIL`}`
});
