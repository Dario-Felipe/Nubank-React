import styled from 'styled-components';
import media from '../../../tokens/media';

export const FooterMidiaContent = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 30px;
    color: white;

    &:hover {
      color: #d57dff;
    }
  }

  ${media.sm} {
    a {
      margin-left: 40px;
    }
  }
`;
