import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Header, List, Meetup, NoMeetups } from './styles';
import { setCurrentMeetup } from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMeetups() {
      const response = await api.get('/meetups/admin');
      const dateFormattedMeetups = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(
          parseISO(meetup.date),
          "dd 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(dateFormattedMeetups);
    }
    fetchMeetups();
  }, []);

  function openMeetupDetails(meetup) {
    dispatch(setCurrentMeetup(meetup));
  }

  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <button type="button" onClick={() => history.push('/new')}>
          <MdAddCircleOutline size={20} color="#fff" /> <span>Novo meetup</span>
        </button>
      </Header>
      <List>
        {meetups.length === 0 && (
          <NoMeetups>Você não tem Meetups agendados.</NoMeetups>
        )}
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <h5>{meetup.title}</h5>
            <div>
              <span>{meetup.formattedDate}</span>
              <button type="button" onClick={() => openMeetupDetails(meetup)}>
                <MdChevronRight size={25} color="#fff" />
              </button>
            </div>
          </Meetup>
        ))}
      </List>
    </Container>
  );
}
