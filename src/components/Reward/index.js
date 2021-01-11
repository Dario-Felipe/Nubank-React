import React from 'react';
import { SectionReward, RewardContent, RewardContent_Text, RewardContent_Img } from './style';
import RewardPhone from '../../img/Reward/RewardPhone.png';
import RewardPlanet from '../../img/Reward/RewardPlanet.png';
import Link from '../Link/index';

const Reward = () => {
  return (
    <>
      <SectionReward>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <RewardContent>
                <RewardContent_Text>
                  <a className="reward-link" href="#">Rewards</a>
                  <h3>Um programa depontos justo e fácil de usar.</h3>
                  <Link modifier="link-content_button--white" url="http://localhost:3000/#" text="Saiba mais" />
                </RewardContent_Text>
                <RewardContent_Img>
                  <img className="reward_img reward_img--planet img-fluid" src={ RewardPlanet } alt="planet"/>
                  <img className="reward_img reward_img--phone img-fluid" src={ RewardPhone } alt="planet"/>
                </RewardContent_Img>
              </RewardContent>
            </div>
          </div>
        </div>
      </SectionReward>
    </>
  )
}

export default Reward;
