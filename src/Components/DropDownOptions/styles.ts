import styled from "styled-components";
import { TStyledOption } from "./types";

export const StyledContainer = styled.div`
  padding: 8px;
  min-width: 150px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid var(--gray100);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

export const StyledDropDownButton = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;
`;

export const StyledOption = styled.div<TStyledOption>`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  borderradius: "4px";

  ${({ variant }: { variant?: string }) =>
    variant === "danger" && {
      color: "var(--red600)",
    }}

  ${({ selected }: { selected?: boolean }) =>
    selected && {
      backgroundColor: "var(--gray100)",
    }}

  ${({ selected }: { selected?: boolean }) =>
    !selected &&
    `
        :hover {
            background-color: var(--gray50);
        }
    `};
`;

export const StyledDropDownButtonLabel = styled.span<{ customStyle?: string }>`
  ${({ customStyle }) => customStyle || ""}
`;
