import { StyledAvatarName, StyledImage } from "./styles";
import { IAvatarProps } from "./types";

const Avatar = (props: IAvatarProps) => {
  const { src, alt, name, width = 24, height = 24 } = props;

  if (src) {
    return (
      <StyledImage
        src={src}
        alt={alt}
        width={`${width}px`}
        height={`${height}px`}
      />
    );
  }

  return (
    <StyledAvatarName width={`${width}px`} height={`${height}px`}>
      {name?.slice(0, 1) || ""}
    </StyledAvatarName>
  );
};

export default Avatar;
