import Select from "react-select";
import { useShareWidget } from "../../../context/ShareWidgetContext";
import { inviteDropDownStyle, StyledDropdownIndicator } from "../../../styles";
import { IInviteDropDownProps } from "../../../types";

const DropdownIndicator = ({ innerRef, innerProps }: any) => {
  return (
    <StyledDropdownIndicator ref={innerRef} {...innerProps}>
      Invite
    </StyledDropdownIndicator>
  );
};

const IndicatorSeparator = () => null;

const InviteDropDown = ({
  placeholder = "People, emails, groups",
}: IInviteDropDownProps) => {
  const { ShowSearchAndInvitePage } = useShareWidget();

  const handleFocus = () => {
    ShowSearchAndInvitePage();
  };

  return (
    <div>
      <Select
        options={[]}
        placeholder={placeholder}
        styles={inviteDropDownStyle}
        onFocus={handleFocus}
        components={{ DropdownIndicator, IndicatorSeparator }}
      />
    </div>
  );
};

export default InviteDropDown;
