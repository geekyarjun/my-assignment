import { HiLink } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { StyledCopyLinkContainer } from "../../styles";

const CopyLink = () => {
  return (
    <StyledCopyLinkContainer>
      <button>
        <AiOutlineQuestionCircle size={12} /> learn about sharing
      </button>
      <button>
        <HiLink size={12} /> Copy link
      </button>
    </StyledCopyLinkContainer>
  );
};

export default CopyLink;
