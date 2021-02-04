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
          <a href="#">
            Pix <span>novo</span>
          </a>
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
          <a href="#">
            Seguros <span>novo</span>
          </a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Sobre nós</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">Carreiras</a>
        </NavContentListItem>
        <NavContentListItem>
          <a href="#">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
              className="SVGWrapper-c62y5b-0 ilbcfK StyledIcon-sc-1d6qvbo-0 etJcjf"
              color="currentColor"
              role="img"
            >
              <title>login</title>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9545 2.98023e-07L16.2273 0C18.587 -2.38419e-07 20.5 1.91297 20.5 4.27273V15.7273C20.5 18.087 18.587 20 16.2273 20H12.9545V18H16.2273C17.4825 18 18.5 16.9825 18.5 15.7273V4.27273C18.5 3.01754 17.4825 2 16.2273 2L12.9545 2V2.98023e-07ZM9.79802 4.79289L14.975 9.96993L9.82806 15.5848L8.35375 14.2334L11.3177 11L0.5 11V9L11.1767 9L8.3838 6.20711L9.79802 4.79289Z"
                  fill="#8a05be"
                />
              </g>
            </svg>
          </a>
        </NavContentListItem>
      </NavContentList>
    </NavContent>
  </>
);

export default Navbar;
