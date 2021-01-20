import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionFooter = styled.footer`
  background: #111111;
  padding: 80px 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 0 30px 40px;

  ${media.lg} {
    padding: 0 60px 40px;
  }
`;

export const FooterContentText = styled.div`
  margin-bottom: 50px;

  p {
    color: #c0c0c0;
    font-size: 18px;
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 4px;
      width: fit-content;
    }
  }

  ${media.lg} {
    p {
      font-size: 20px;
    }
  }
`;

export const FooterContentTextImg = styled.div`
  display: flex;
  flex-direction: column;

  a:first-child {
    margin-bottom: 20px;
  }
`;

export const FooterCompany = styled.div`
  padding: 80px 30px;
  border-top: solid 1px #1c1c1c;
  border-bottom: solid 1px #1c1c1c;

  ${media.lg} {
    padding: 100px 60px;
  }

  ${media.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterCompanyTitle = styled.div`
  svg {
    margin-bottom: 40px;
  }

  p {
    color: white;
    font-weight: bold;
    margin-bottom: 40px;
    font-size: 15px;
  }

  ${media.sm} {
    width: 52%;
  }

  ${media.lg} {
    display: flex;
    align-items: center;

    svg,
    p {
      margin-bottom: 0;
    }

    p {
      font-size: 18px;
      margin-left: 40px;
      width: 54%;
    }
  }
`;

export const FooterLanguage = styled.div`
  padding: 40px 20px 0;

  ul {
    padding: 0;
    display: flex;
    list-style: none;

    li {
      display: flex;

      &:last-child {
        margin-left: 20px;
      }

      input[type='radio'] {
        opacity: 0;

        &:checked + label::before {
          background: white;
        }
      }

      label {
        color: white;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 0 20px;

        &::before {
          content: '';
          width: 2px;
          height: 2px;
          background: none;
          border: solid 3px white;
          border-radius: 50%;
          padding: 6px 6px;
          position: absolute;
          left: 0;
        }

        span {
          margin-left: 10px;
        }
      }
    }
  }

  ${media.sm} {
    display: flex;
    justify-content: flex-end;
  }
`;
