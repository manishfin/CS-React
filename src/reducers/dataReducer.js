import _ from 'lodash';

export function dataReducer(currentState = {fetching: false}, action) {
  switch (action.type) {
    case 'INITIATE':
      return _.assign({}, currentState, {fetching: true});
    case 'SUCCESS':
      return _.assign({}, currentState, {data: action.payload.data, fetching: false});
    default:
      return currentState;
  }
}
