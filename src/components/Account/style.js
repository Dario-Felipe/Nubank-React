import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionAccount = styled.section`
  background: #f5f5f5;
  padding: 20px 0 60px;

  ${media.sm} {
    padding: 160px 40px;
  }

  ${media.lg} {
    padding: 90px 100px 90px;
  }
`;

export const AccountContent = styled.div`
  ${media.sm} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AccountContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  .account-link,
  h3 {
    font-size: 26px;
  }

  .account-link {
    font-weight: bold;
    font-size: 26px;
    color: #a33bcc;
  }

  h3 {
    width: 74%;
    font-size: 26px;
    font-weight: bold;
  }

  ${media.sm} {
    .account-link,
    h3 {
      font-size: 46px;
    }

    .account-link {
      line-height: 56px;
    }

    h3 {
      width: 100%;
    }
  }

  ${media.lg} {
    .account-link,
    h3 {
      font-size: 53px;
    }
  }
`;

export const AccountContentImg = styled.div`
  width: 100%;
`;
