import update from 'immutability-helper';

export const Actions = {
  ADD: 'add',
  REMOVE: 'remove',
  UPDATE: 'update',
};

export const initialQuestions = [
  {
    question: '',
    choices: [
      {
        answer: '',
        isCorrect: true,
      },
    ],
  },
];

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD:
      return update(state, { $push: initialQuestions });
    case Actions.REMOVE:
      return update(state, { $remove: [action.index] });
    case Actions.UPDATE:
      return update(state, { $set: { [action.index]: action.question } });
  }
};
