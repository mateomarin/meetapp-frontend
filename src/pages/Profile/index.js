import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { Container, Divisor } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={profile}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Divisor />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          {loading ? (
            'Carregando...'
          ) : (
            <div>
              <MdAddCircleOutline
                size={20}
                color="#fff"
                style={{ marginRight: 5 }}
              />
              Salvar perfil
            </div>
          )}
        </button>
      </Form>
    </Container>
  );
}
