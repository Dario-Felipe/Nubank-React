import styled from 'styled-components';
import media from '../../tokens/media';

export const SectionHeader = styled.header`
  background: white;
  padding: 12px 20px;
  position: fixed;
  width: 100%;
  z-index: 1;

  ${media.lg} {
    padding: 20px 30px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContentLogo = styled.div`
  svg {
    height: 40px;
    width: 40px;
  }

  ${media.lg} {
    svg {
      height: 50px;
      width: 50px;
    }
  }
`;

export const HeaderContentButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;
