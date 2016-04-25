import Ember from 'ember';

export function add(params/*, hash*/) {
  let paramLength = params.length,
      total = 0;
  for(let i = 0; i < paramLength; ++i) {
    total += params[i];
  }
  return total;
}

export default Ember.Helper.helper(add);
