import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionAccount = styled.div`
  background: #F5F5F5;
  padding: 20px 0;
  padding-bottom: 60px;

  ${ media.sm } {
    padding: 220px 0;
    padding-bottom: 200px;
  }

  ${ media.lg } {
    padding: 90px 0;
  }
`;

export const AccountContent = styled.div`
  ${ media.sm } {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
  }

  ${ media.lg } {
    padding: 0 100px;
  }
`;

export const AccountContent_Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  .account-link, h3 {
    font-size: 26px;
  }

  .account-link {
    font-weight: bold;
    font-size: 26px;
    color: #A33BCC
  }

  h3 {
    width: 74%;
    font-size: 26px;
    font-weight: bold;
  }

  ${ media.sm } {
    .account-link, h3 {
      font-size: 42px
    }

    .account-link {
      line-height: 56px;
    }

    h3 {
      width: 100%;
    }
  }

  ${ media.lg } {
    .account-link, h3 {
      font-size: 53px
    }
  }
`;

export const AccountContent_Img = styled.div`
  width: 100%;
`;