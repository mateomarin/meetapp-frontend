import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdDelete, MdEvent, MdLocationOn } from 'react-icons/md';
import history from '~/services/history';
import { Container, Header, ControlBtn, Main } from './styles';

import { cancelMeetup } from '~/store/modules/meetup/actions';

export default function Details() {
  const meetup = useSelector(state => state.meetup.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!meetup) {
      history.replace('/dashboard');
    }
  }, [meetup]);

  function handleCancelMeetup() {
    dispatch(cancelMeetup(meetup.id));
  }

  function handleEditMeetup() {
    history.push('/edit');
  }
  return (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>
        <div>
          <ControlBtn edit onClick={() => handleEditMeetup()}>
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </ControlBtn>
          <ControlBtn onClick={() => handleCancelMeetup()}>
            <MdDelete size={20} color="#fff" />
            <span>Cancelar</span>
          </ControlBtn>
        </div>
      </Header>
      <Main>
        <div className="image-container">
          <img src={meetup.image.url} alt="meetup-i" />
        </div>
        <p>{meetup.description}</p>
        <div>
          <span>
            <MdEvent className="icon" size={15} color="#fff" />{' '}
            {meetup.formattedDate}
          </span>
          <span>
            <MdLocationOn className="icon" size={15} color="#fff" />{' '}
            {meetup.location}
          </span>
        </div>
      </Main>
    </Container>
  );
}
