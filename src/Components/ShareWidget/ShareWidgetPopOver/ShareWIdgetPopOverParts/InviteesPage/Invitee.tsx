import Tippy from "@tippyjs/react";
import If from "../../../../Conditional/If";
import Avatar from "../../../../Avatar/Avatar";
import {
  StyledAccessButton,
  StyledHeading,
  StyledInviteeContainer,
  StyledInviteeNameIcon,
  StyledSubHeading,
} from "../../../styles";
import { IInviteeProps } from "../../../types";
import DropDownOptions from "../../../../DropDownOptions/DropDownOptions";
import { accessOptions } from "../../../config";
import {
  IDropDownOption,
  IStyleObject,
} from "../../../../DropDownOptions/types";

const accessDropdownStyles: IStyleObject = {
  dropDownIndicatorLabel: `
    font-size: 12px;
    color: var(--gray500);
  `,
  dropDownIndicator: {
    color: "var(--gray500)",
  },
};

const Invitee = ({
  label,
  members = 0,
  profileImg,
  access,
  handleAccessOptionChange,
}: IInviteeProps) => {
  return (
    <StyledInviteeContainer>
      <StyledInviteeNameIcon>
        <Avatar
          width={40}
          height={40}
          name={label}
          alt={`${label} profile`}
          src={profileImg}
        />
        <div>
          <StyledHeading>{label}</StyledHeading>
          <If
            condition={members > 0}
            then={
              <StyledSubHeading>{members} workspack members</StyledSubHeading>
            }
          />
        </div>
      </StyledInviteeNameIcon>
      <DropDownOptions
        value={access}
        options={accessOptions}
        styles={accessDropdownStyles}
        onChange={(selectedAccess: IDropDownOption) =>
          handleAccessOptionChange({ label, selectedAccess })
        }
      />
    </StyledInviteeContainer>
  );
};

export default Invitee;
