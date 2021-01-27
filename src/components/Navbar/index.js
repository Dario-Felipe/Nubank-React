import React from 'react';
import { NavContent, NavContentList, NavContentListItem } from './style';

const Navbar = ({ handle }) => (
  <>
    <NavContent className={handle !== true ? 'hide' : 'show'}>
      <NavContentList>
        <NavContentListItem>
          <a className="active" href="#">
            Início
          </a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Conta digital</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Cartão de crédito</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Pix</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Empréstimo</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Conta PJ</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Rewards</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Seguros</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Sobre nós</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Carreiras</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Login</a>
        </NavContentListItem>
      </NavContentList>
    </NavContent>
  </>
);

export default Navbar;
