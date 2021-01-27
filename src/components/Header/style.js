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

export const HamburguerContent = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: all 0.8s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: #f5e2ff;
  }

  ${media.sm} {
    display: none;
  }
`;

export const HamburguerContentBox = styled.div`
  width: 15px;
  height: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const HamburguerContentBoxItem = styled.div`
  width: 15px;
  height: 2px;
  background: #767177;
  position: relative;

  &::before {
    content: '';
    width: 15px;
    height: 2px;
    position: absolute;
    bottom: 6px;
    background: #767177;
    display: block;
  }

  &.show {
    transform: rotate(45deg);
    top: -3px;

    &::before {
      transform: rotate(-90deg);
      top: 0;
    }
  }
`;
