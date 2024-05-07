import styled from "styled-components";

export const StyledHeaderContainer = styled.div<{ $isLayout?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: ${({ $isLayout }) => $isLayout && "32px 32px 32px 128px"};
  }

  padding: 16px;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    padding: 0;
    align-items: baseline;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 30px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 7px;

    span {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 14px;
    }
  }
`;
