import styled from "styled-components";

export const StyledMarker = styled.div<{ $lat: number; $lng: number; $isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 4px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.gray : theme.colors.primary)};
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;
