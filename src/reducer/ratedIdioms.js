import { LIKE, DISLIKE } from '../actions/card-action-types';

export function ratedIdioms(state = new Map(), action) {
  switch (action.type) {
    case LIKE:
      return state;
    case DISLIKE:
      return state;
    default:
      return state;
  }
}
