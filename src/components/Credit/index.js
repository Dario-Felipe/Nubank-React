import React from 'react';
import { SectionCredit, CreditContent, CreditContent_Text, CreditContent_Img } from './style';
import Link from '../Link/index';
import CreditCard from '../../img/Credit/CreditCard.png';

const Credit = () => {
  return (
    <>
      <SectionCredit>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <CreditContent>
                <CreditContent_Text>
                  <a className="credit-link" href="#">Cartão de Crédito</a>
                  <h3>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</h3>
                  <Link modifier="link-content_button--benefit" url="http://localhost:3000/#" text="Saiba mais"/>
                </CreditContent_Text>
                <CreditContent_Img>
                  <img className="img-fluid" src={ CreditCard } alt="CreditCard"/>
                </CreditContent_Img>
              </CreditContent>
            </div>
          </div>
        </div>
      </SectionCredit>
    </>
  )
}

export default Credit;