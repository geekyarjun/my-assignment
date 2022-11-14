import { StyledInviteSectionContainer } from "../../../styles";
import InviteDropDown from "./InviteDropDown";
import InviteesListSection from "./InviteesListSection";
import ShareToWeb from "./ShareToWeb";

const InviteesPage = () => (
  <>
    <ShareToWeb />
    <StyledInviteSectionContainer>
      <InviteDropDown />
      <InviteesListSection />
    </StyledInviteSectionContainer>
  </>
);

export default InviteesPage;
