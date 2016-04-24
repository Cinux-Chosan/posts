import Ember from 'ember';

export function isEq(params/*, hash*/) {
  let paramCount = params.length,
      origin = params[0];
  if(paramCount < 2) {
    return false;
  }
  for(let i = 0; i < paramCount; ++i) {
    if(params[i] != origin) {
      return false;
    }
  }
  return true;
}

export default Ember.Helper.helper(isEq);
