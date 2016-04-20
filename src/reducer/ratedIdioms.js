import { LIKE, DISLIKE } from '../actions/card-action-types';

export function ratedIdioms(state = new Map(), action) {
  switch (action.type) {
    case LIKE:
      return state.set(action.id, 1);
    case DISLIKE:
      return state.set(action.id, 0);
      return state;
    default:
      return state;
  }
}
