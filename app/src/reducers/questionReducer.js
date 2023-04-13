import update from 'immutability-helper';

import { createQuestion } from '@/methods/question';

export const Actions = {
  ADD: 'add',
  REMOVE: 'remove',
  UPDATE: 'update',
  REPLACE: 'replace',
};

export const initialQuestions = [createQuestion()];

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD:
      return update(state, { $push: [createQuestion()] });
    case Actions.REMOVE:
      return update(state, { $splice: [[action.index, 1]] });
    case Actions.UPDATE:
      return update(state, { [action.index]: { $set: action.question } });
    case Actions.REPLACE:
      return update(state, { $set: action.questions });
  }
};
