import styled from 'styled-components';
import media from '../../tokens/media';
import CommunitySmart from '../../img/Community/CommunitySmart.jpg';
import CommunityDesktop from '../../img/Community/CommunityDesktop.jpg';

export const SectionCommunity = styled.section`
  background-image: url(${CommunitySmart});
  background-size: cover;
  background-position: center center;
  padding: 140px 0;

  ${media.sm} {
    background-image: url(${CommunityDesktop});
    padding: 60px 40px;
  }

  ${media.lg} {
    padding: 220px 100px;
  }
`;

export const CommunityContent = styled.div``;

export const CommunityContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 40px;

  h3 {
    width: 70%;
    font-size: 26px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
  }

  ${media.sm} {
    h3 {
      font-size: 46px;
      width: 50%;
    }

    a {
      width: 40%;
    }
  }

  ${media.lg} {
    h3 {
      font-size: 53px;
      width: 35%;

      &:first-child {
        margin-bottom: 40px;
      }
    }

    a {
      width: 32%;
    }
  }
`;
