import styled from "styled-components";

export const StyledOrderItemContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes["font-14"]};
  line-height: 16px;

  @media (max-width: ${({ theme }) => theme.device.laptopM}) {
    flex-direction: column;
    gap: 2px;
    margin-bottom: 4px;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    flex-direction: row;
    margin-bottom: 16px;
    gap: 10px;
  }
`;

export const StyledDots = styled.span`
  position: relative;
  flex-grow: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    width: 100%;
    height: 0;
    line-height: 0;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.gray};
  }
  @media (max-width: ${({ theme }) => theme.device.laptopM}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    display: block;
  }
`;

export const StyledOrderItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: gray;
`;

export const StyledStep = styled.span`
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.device.laptopM}) {
    align-self: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    display: block;
    align-self: flex-end;
  }
`;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.device.laptopM}) {
    align-items: flex-start;
    align-self: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    align-items: flex-end;
    align-self: flex-end;
  }
`;
