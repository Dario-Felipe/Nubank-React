import styled from 'styled-components';

export const SectionHeader = styled.header`
  background: white;
  padding: 12px 20px;
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
`;
