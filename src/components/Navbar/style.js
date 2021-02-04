import styled from 'styled-components';
import media from '../../tokens/media';

export const NavContent = styled.nav`
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  bottom: 0;
  left: 0;
  transition: all 0.5s;
  border-top: solid 1px #ebebeb;

  &.hide {
    transform: translateY(-1000px);
  }

  &.show {
    transform: translateY(68px);
  }

  ${media.sm} {
    position: relative;
    display: flex;
    align-items: center;
    border-top: none;
    margin-left: 30px;

    &.hide {
      transform: translateY(0);
    }
  }
`;

export const NavContentList = styled.ul`
  list-style: none;
  padding: 40px 30px;

  ${media.sm} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    width: 80%;
    overflow: hidden;
  }

  ${media.lg} {
    width: auto;
  }
`;

export const NavContentListItem = styled.li`
  margin-bottom: 15px;

  a {
    color: rgba(17, 17, 17, 0.6);
    font-weight: bold;
    font-size: 18px;

    span {
      background: #f5e2ff;
      padding: 5px 20px;
      border-radius: 20px;
      font-size: 16px;
    }

    &.active {
      color: #8a05be;
    }

    &:hover {
      text-decoration: none;
      color: #d57dff;

      span {
        background: rgb(233, 210, 242);
        color: rgba(17, 17, 17, 0.6);
      }
    }
  }

  &:last-child {
    margin: 0;

    a {
      color: #8a05be;

      svg {
        margin-left: 6px;
      }
    }
  }

  ${media.sm} {
    margin-bottom: 0;
    margin-right: 15px;

    &:last-child {
      display: none;
    }
  }

  ${media.lg} {
    margin-right: 30px;

    a {
      font-size: 20px;
    }

    &:last-child {
      display: block;

      a {
        margin-left: 100px;
      }
    }
  }
`;
