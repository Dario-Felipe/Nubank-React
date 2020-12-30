import React from 'react';
import './style.scss';
import Link from '../Link/index';
import Button from '../Button/index';
import PixPhone from '../../img/Pix/phone.png';

const Pix = () => {
  return (
    <div className="section-pix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="pix">
              <div className="pix_text">
                <h3>Pix: um novo jeito de fazer transferências e pagamentos</h3>
                <Link url="http://localhost:3000/#" text="Saiba como funciona" />
              </div>
              <div className="pix_img">
                <img className="img-fluid" src={PixPhone} alt="phone"/>
              </div>
              <div className="pix_board">
                <h5>Peça sua conta e cartão de crédito do Nubank</h5>
                <input className="pix_board_input" type="text" placeholder="Digite seu CPF"/>
                <Button text="Continuar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pix

