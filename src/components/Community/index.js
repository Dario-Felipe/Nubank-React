import React from 'react';
import {
  SectionCommunity,
  CommunityContent,
  CommunityContentText,
} from './style';
import Link from '../Link/index';

function Community() {
  return (
    <>
      <SectionCommunity>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <CommunityContent>
                <CommunityContentText>
                  <h3>NuCommunity</h3>
                  <h3>A comunidade oficial do Nubank</h3>
                  <Link
                    modifier="link-content_button--white"
                    url="http://localhost:3000/#"
                    text="Tire dúvidas, compartilhe ideias e faça parte"
                  />
                </CommunityContentText>
              </CommunityContent>
            </div>
          </div>
        </div>
      </SectionCommunity>
    </>
  );
}

export default Community;
