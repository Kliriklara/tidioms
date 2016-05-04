import { LIKE, DISLIKE, REMOVE } from './card-action-types';

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

export const remove = id => {
  return {
    type: REMOVE,
    id,
  }
};
