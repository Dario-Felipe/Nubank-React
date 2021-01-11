import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionCredit = styled.div`
  padding-top: 20px;

  ${ media.sm } {
    padding: 40px 40px 0;
  }

  ${ media.lg } {
    padding: 90px 90px 0;
  }
`;

export const CreditContent = styled.div`
  ${ media.sm } {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%
  }
`;

export const CreditContent_Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  .credit-link, h3 {
    font-size: 26px;
  }

  .credit-link {
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
    .credit-link, h3 {
      font-size: 42px
    }

    .credit-link {
      line-height: 56px;
    }

    h3 {
      width: 100%;
    }
  }

  ${ media.lg } {
    .credit-link, h3 {
      font-size: 53px
    }

    h3 {
      width: 80%;
    }
  }
`;

export const CreditContent_Img = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 200px;
  }

  ${ media.sm } {
    height: 100%;
    width: 100%;
    align-items: flex-end;
  }

  ${ media.lg } {
    img {
      width: 300px
    }
  }
`;
