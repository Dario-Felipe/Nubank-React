import React from 'react';
import {
  SectionCredit,
  CreditContent,
  CreditContentText,
  CreditContentImg,
} from './style';
import Link from '../Link/index';
import CreditCard from '../../img/Credit/CreditCard.png';

const Credit = () => (
  <>
    <SectionCredit>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <CreditContent>
              <CreditContentText>
                <a className="credit-link" href="#">
                  Cartão de Crédito
                </a>
                <h3>
                  Pode chamar ele de roxinho. Além disso, pode chamar ele de
                  moderno, gratuito e prático também.
                </h3>
                <Link
                  modifier="link-content_button--benefit"
                  url="http://localhost:3000/#"
                  text="Saiba mais"
                />
              </CreditContentText>
              <CreditContentImg>
                <img className="img-fluid" src={CreditCard} alt="CreditCard" />
              </CreditContentImg>
            </CreditContent>
          </div>
        </div>
      </div>
    </SectionCredit>
  </>
);

export default Credit;
