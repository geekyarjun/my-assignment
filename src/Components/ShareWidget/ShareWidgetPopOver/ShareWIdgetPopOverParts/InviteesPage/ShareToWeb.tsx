import { BiWorld } from "react-icons/bi";
import SwitchButton from "../../../../SwitchButton/SwitchButton";
import {
  StyledHeading,
  StyledIconTitleContainer,
  StyledShareToWebContainer,
  StyledSubHeading,
} from "../../../styles";

const ShareToWeb = (): JSX.Element => {
  return (
    <StyledShareToWebContainer>
      <StyledIconTitleContainer>
        <BiWorld size={32} color="var(--gray500)" />
        <div>
          <StyledHeading>Share to web</StyledHeading>
          <StyledSubHeading>
            Publish and share link with anyone
          </StyledSubHeading>
        </div>
      </StyledIconTitleContainer>
      <div>
        <SwitchButton />
      </div>
    </StyledShareToWebContainer>
  );
};

export default ShareToWeb;
