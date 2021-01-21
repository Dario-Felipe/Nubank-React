import React from 'react';
import './style.scss';
import BenefitImage from '../../img/Benefit/benefit-img.jpg';
import Link from '../Link/index';

const Benefit = () => (
  <>
    <section className="section-benefit">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-7 p-0">
            <div className="benefit">
              <div className="benefit_text">
                <h2 className="benefit_text_title">
                  Traga seu FGTS e Auxílio Emergencial para o Nubank
                </h2>
                <Link
                  modifier="link-content_button--benefit"
                  url="http://localhost:3000/#"
                  text="Confira os benefícios"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-5 p-0">
            <div className="benefit">
              <div className="benefit_img">
                <img className="img-fluid" src={BenefitImage} alt="Benefit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Benefit;
