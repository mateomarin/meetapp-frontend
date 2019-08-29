import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import DatePicker from '~/components/DatePicker';
import Error from '~/components/Error';

import ImageInput from './ImageInput';

import { Container, Image } from './styles';

import { saveMeetup } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  location: Yup.string().required('A localização é obrigatória'),
  date: Yup.string().required('A data é obrigatória'),
});

export default function MeetupForm({ match }) {
  const [meetup, setMeetup] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    image: { url: '' },
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    image: false,
    description: false,
  });
  const current = useSelector(state => state.meetup.current);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    if (match.path === '/edit') {
      setMeetup({ ...current });
    }
  }, [current, match]);

  function handleSubmit(data) {
    setErrors({
      image: meetup.image_id !== null,
      description: meetup.description !== null,
    });
    if (meetup.image_id !== null && meetup.image_id !== null) {
      dispatch(saveMeetup({ ...meetup, ...data }));
    }
  }

  function handleImageChange(id) {
    setMeetup({ ...meetup, image_id: id });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
        <Image>
          <ImageInput
            name="image_id"
            url={meetup.image.url}
            onChange={handleImageChange}
          />
        </Image>
        <Error msg="Selecione uma imagem" show={errors.image} />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        {/* Não usei o multiline do unform porque ele não está capturando o initialData correspondente */}
        <textarea
          value={meetup.description}
          onChange={e => setMeetup({ ...meetup, description: e.target.value })}
          placeholder="Descrição completa"
        />
        <Error msg="Escreva um descritivo" show={errors.description} />
        <DatePicker name="date" date={meetup.date} />
        <Input name="location" type="text" placeholder="Localização" />
        <button type="submit">{loading ? 'Carregando...' : 'Salvar'}</button>
      </Form>
    </Container>
  );
}
