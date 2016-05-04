import { LIKE, DISLIKE, REMOVE } from '../actions/card-action-types';

export function ratedIdioms(state = new Map(), action) {
  switch (action.type) {
    case LIKE:
      return state.set(action.id, 1);
    case DISLIKE:
      return state.set(action.id, 0);
    case REMOVE:
      state.delete(action.id);
      return state;
    default:
      return state;
  }
}
