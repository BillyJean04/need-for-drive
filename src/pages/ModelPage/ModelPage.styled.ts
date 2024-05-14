import styled from "styled-components";

export const ModelPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 15px;
  width: 70%;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 100%;
  }
`;

export const StyledRadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`;

export const StyledCarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  overflow-y: scroll;
  width: 100%;
  padding-right: 15px;

  @media (min-width: ${({ theme }) => theme.device.laptopM}) {
    grid-template-columns: repeat(auto-fill, 368px);
    padding-bottom: 25px;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding-bottom: 25;
    padding-right: 0;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledCarsNotFoundMessage = styled.div`
  display: flex;
  justify-content: center;
`;
