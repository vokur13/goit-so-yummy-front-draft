import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  background-color: ${({ mode, theme }) => {
    switch ('dark') {
      case 'light':
        return theme.colors.light;
      case 'dark':
        return theme.colors.dark;
      default:
        return theme.colors.default;
    }
  }};
  color: ${(props) => props.theme.colors.white};
`;
