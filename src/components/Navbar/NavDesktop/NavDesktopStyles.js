import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row;
  gap: 32px;
  width: 100%;
  margin-top: 39px;

  @media (min-width: 1025px) {
    margin-top: 0;
    height: 100%;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 25px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.whiteAlpha75};
  cursor: pointer;
  transition: color 300ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 768px) {
    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px dashed ${(props) => props.theme.colors.redLight};
      outline-offset: 3px;
      color: ${(props) => props.theme.colors.white};
    }

    ${(props) =>
      props.$isActive
        ? css`
            color: ${(props) => props.theme.colors.white};
          `
        : ""}
  }

  @media (min-width: 1025px) {
    height: 100%;
    align-items: center;
    margin-top: 5px;

    &::after {
      position: absolute;
      content: "";
      top: -5px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.$bgcolor};
      transform: scaleX(0);
      transition: transform 350ms ease;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      color: ${(props) => props.theme.colors.white};

      &::after {
        transform: scaleX(1);
      }
    }

    ${(props) =>
      props.$isActive
        ? css`
            &::after {
              transform: scaleX(1);
            }
          `
        : ""}
  }
`;

export const PopupBox = styled.div`
  // position: absolute;
  // background-color: rgba(0, 0, 0, 0.8);
  // color: #fff;
  // padding: 10px 15px;
  // border-radius: 8px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  // z-index: 1001;
  // white-space: nowrap;
  // pointer-events: none;
  // transform: translate(-50%, 10px);
  // transition: opacity 200ms ease, transform 200ms ease;
  // opacity: 0;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
    max-width: 200px;
    text-align: center;
    white-space: normal;

  &.visible {
    opacity: 1;
  }
`;


export const LogoutButton = styled.button`
  display: flex;
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 25px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.whiteAlpha75};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 300ms ease;
  align-items: center;
  margin-top: 5px;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 768px) {
    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px dashed ${(props) => props.theme.colors.redLight};
      outline-offset: 3px;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const UserIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: ${(props) => props.theme.colors.whiteAlpha75};
  transition: background-color 300ms ease, color 300ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteAlpha50};
    color: ${(props) => props.theme.colors.white};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px dashed ${(props) => props.theme.colors.redLight};
    outline-offset: 3px;
    background-color: ${(props) => props.theme.colors.whiteAlpha50};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 150px;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    background-color: #f0f0f0;
  }
`;
