import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  /* position: fixed; */
  position: absolute;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  border: 1px solid red;
  /* z-index: 99; */
  /* background-color: ${({ mode, theme }) => {
    switch ('dark') {
      case 'light':
        return theme.colors.light;
      case 'dark':
        return theme.colors.dark;
      default:
        return theme.colors.default;
    }
  }}; */
  /* background-color: purple; */
`;

export const Title = styled.h1`
  color: black;
`;
