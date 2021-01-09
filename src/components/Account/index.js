import React from 'react';
import { SectionAccount, AccountContent, AccountContent_Text, AccountContent_Img } from './style';
import Link from '../Link/index';
import PhoneAccount from '../../img/Account/PhoneAccount.png';

function Account() {
  return (
    <>
      <SectionAccount>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <AccountContent>
                <AccountContent_Text>
                  <a className="account-link" href="#">Conta do Nubank</a>
                  <h3>Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil.</h3>
                  <Link modifier="link-content_button--account" url="http://localhost:3000/#" text="Segura e sem complicações"/>
                </AccountContent_Text>
                <AccountContent_Img>
                  <img className="img-fluid" src={ PhoneAccount } alt="Phone"/>
                </AccountContent_Img>
              </AccountContent>
            </div>
          </div>
        </div>
      </SectionAccount>
    </>
  )
}

export default Account;
