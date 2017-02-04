import * as actions from './action-types';

export function addItem(item) {
  return {
    type: actions.ADD_ITEM,
    item: item
  };
}
