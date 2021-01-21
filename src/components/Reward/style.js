import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionReward = styled.section`
  background: #530082;
  padding-top: 20px;

  ${media.sm} {
    padding: 40px 40px 20px;
  }

  ${media.lg} {
    padding: 90px 90px;
  }
`;

export const RewardContent = styled.div`
  ${media.sm} {
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const RewardContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 40px 60px;

  .reward-link,
  h3 {
    font-size: 28px;
  }

  .reward-link {
    font-weight: bold;
    color: #c093fb;
  }

  h3 {
    width: 80%;
    font-weight: bold;
    color: white;
  }

  ${media.sm} {
    .reward-link,
    h3 {
      font-size: 42px;
    }

    h3 {
      width: 100%;
    }
  }

  ${media.lg} {
    width: 60%;
    .reward-link,
    h3 {
      font-size: 53px;
    }

    h3 {
      width: 70%;
    }
  }
`;

export const RewardContentImg = styled.div`
  display: flex;
  justify-content: center;

  .reward_img {
    &--phone {
      display: none;
    }
  }

  ${media.sm} {
    .reward_img {
      width: 300px;

      &--phone {
        display: block;
      }

      &--planet {
        display: none;
      }
    }
  }

  ${media.lg} {
    .reward_img {
      width: 450px;
    }
  }
`;
