import * as actions from '../actions/action-types';

export default function(state = { items: [] },action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return Object.assign({}, {items: action.items});
    case actions.REMOVE_ITEM:
      return Object.assign({}, {items: action.items});
    default:
      return state;
  }
}
