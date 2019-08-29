import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import { resetCurrentMeetup } from './actions';

export function setCurrentMeetup() {
  history.push('/detalhes');
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    history.replace('/dashboard');
    yield put(resetCurrentMeetup());
    toast.success('Meetup cancelado com sucesso');
  } catch (err) {
    toast.error('Erro ao atualizar o perfil');
  }
}

export function* saveMeetup({ payload }) {
  try {
    const { meetup } = payload;

    const data = Object.assign({ meetup });

    if (meetup.id) {
      yield call(api.put, `meetups/${meetup.id}`, data);
    } else {
      yield call(api.post, `meetups`, data);
    }

    history.replace('/dashboard');
    yield put(resetCurrentMeetup());
    toast.success('Meetup salvo com sucesso');
  } catch (err) {
    toast.error('Erro ao salvar o meetup');
  }
}

export default all([
  takeLatest('@meetup/SET_CURRENT', setCurrentMeetup),
  takeLatest('@meetup/CANCEL_MEETUP', cancelMeetup),
  takeLatest('@meetup/SAVE_MEETUP', saveMeetup),
]);
