import { useCallback } from "react";
import { useShareWidget } from "../../../context/ShareWidgetContext";
import { StyledInviteesSection } from "../../../styles";
import { IHandleAccessChangeParams, TAccess } from "../../../types";
import Invitee from "./Invitee";

const InviteesListSection = () => {
  const { selectedInvitees, SetSelectedInvitees } = useShareWidget();

  const handleAccessOptionChange = ({
    label,
    selectedAccess,
  }: IHandleAccessChangeParams) => {
    if (selectedInvitees?.length) {
      const indexOfInvitee = selectedInvitees.findIndex(
        (invitee) => invitee.label === label
      );

      if (indexOfInvitee >= 0) {
        const copyOfSelectedInvitees = [...selectedInvitees];
        copyOfSelectedInvitees[indexOfInvitee].access =
          selectedAccess.label as TAccess;

        SetSelectedInvitees(copyOfSelectedInvitees);
      }
    }
  };

  const renderInvitees = useCallback(() => {
    return selectedInvitees.map(({ value, ...rest }) => (
      <Invitee
        key={value}
        handleAccessOptionChange={handleAccessOptionChange}
        {...rest}
      />
    ));
  }, []);

  return <StyledInviteesSection>{renderInvitees()}</StyledInviteesSection>;
};

export default InviteesListSection;
