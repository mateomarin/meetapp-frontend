export function setCurrentMeetup(meetup) {
  return {
    type: '@meetup/SET_CURRENT',
    payload: { meetup },
  };
}

export function resetCurrentMeetup() {
  return {
    type: '@meetup/RESET_CURRENT',
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function saveMeetup(meetup) {
  return {
    type: '@meetup/SAVE_MEETUP',
    payload: { meetup },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function cancelMeetup(id) {
  return {
    type: '@meetup/CANCEL_MEETUP',
    payload: { id },
  };
}
