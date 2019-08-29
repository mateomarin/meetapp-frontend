import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/M.svg';

import history from '~/services/history';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <button type="button" onClick={() => history.replace('/')}>
            <img src={logo} alt="GoBarber" />
          </button>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={() => dispatch(signOut())}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
