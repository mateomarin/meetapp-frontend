import produce from 'immer';

const INITIAL_STATE = {
  current: {},
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SET_CURRENT': {
        draft.current = action.payload.meetup;
        break;
      }
      case '@meetup/RESET_CURRENT': {
        draft = INITIAL_STATE;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.current = action.payload.meetup;
        break;
      }
      default:
    }
  });
}
