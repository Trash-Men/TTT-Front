import styled from "@emotion/styled";

export const NavigationBarWrap = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  height: 60px;
  background-color: var(--background-color);
  z-index: 10;
  > a {
    flex: 1 0 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    border: 1px solid var(--border-color);
    text-align: center;
    font-size: 12px;
    &.current {
      background-color: rgba(55, 53, 47, 0.08);
      color: #2e6dff;
    }
    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
    > img {
      width: 20px;
      height: 20px;
    }
  }
`;
