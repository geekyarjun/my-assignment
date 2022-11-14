import { useEffect } from "react";
import If from "../../Conditional/If";
import { useShareWidget } from "../context/ShareWidgetContext";
import { StyledPopOverContainer } from "../styles";
import CopyLink from "./ShareWIdgetPopOverParts/CopyLink";
import InviteesPage from "./ShareWIdgetPopOverParts/InviteesPage/InviteesPage";
import SearchAndInvitePage from "./ShareWIdgetPopOverParts/SearchAndInvitePage/SearchAndInvitePage";

const ShareWidgetPopOver = (): JSX.Element => {
  const { showSearchAndInvitePage } = useShareWidget();

  return (
    <StyledPopOverContainer>
      <If
        condition={showSearchAndInvitePage}
        then={<SearchAndInvitePage />}
        elseCase={<InviteesPage />}
      />
      <CopyLink />
    </StyledPopOverContainer>
  );
};

export default ShareWidgetPopOver;
