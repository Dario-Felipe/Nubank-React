import styled from 'styled-components';
import media from '../../tokens/media';

export const HamburguerContent = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.8s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;

  &:focus {
    outline: none;
  }

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
    left: -1px;
    background: black;

    &::before {
      transform: rotate(-90deg);
      top: 0;
      background: black;
    }
  }
`;
