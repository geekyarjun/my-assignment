import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
`;

type TStyledAvatarNameProps = {
  width?: string;
  height?: string;
};

export const StyledAvatarName = styled.div<TStyledAvatarNameProps>`
  color: #fff;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: 14px;
  border-radius: 6px;
  background-color: var(--gray500);

  display: flex;
  align-items: center;
  justify-content: center;
`;
