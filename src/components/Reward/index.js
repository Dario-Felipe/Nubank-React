import React from 'react';
import {
  SectionReward,
  RewardContent,
  RewardContentText,
  RewardContentImg,
} from './style';
import RewardPhone from '../../img/Reward/RewardPhone.png';
import RewardPlanet from '../../img/Reward/RewardPlanet.png';
import Link from '../Link/index';

const Reward = () => (
  <>
    <SectionReward>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <RewardContent>
              <RewardContentText>
                <a className="reward-link" href="#">
                  Rewards
                </a>
                <h3>Um programa depontos justo e fácil de usar.</h3>
                <Link
                  modifier="link-content_button--white"
                  url="http://localhost:3000/#"
                  text="Saiba mais"
                />
              </RewardContentText>
              <RewardContentImg>
                <img
                  className="reward_img reward_img--planet img-fluid"
                  src={RewardPlanet}
                  alt="planet"
                />
                <img
                  className="reward_img reward_img--phone img-fluid"
                  src={RewardPhone}
                  alt="planet"
                />
              </RewardContentImg>
            </RewardContent>
          </div>
        </div>
      </div>
    </SectionReward>
  </>
);

export default Reward;
