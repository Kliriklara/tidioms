import { LIKE, DISLIKE } from './card-action-types';

export const like = id => {
  return {
    type: LIKE,
    id,
  }
};

export const dislike = id => {
  return {
    type: DISLIKE,
    id,
  }
};
