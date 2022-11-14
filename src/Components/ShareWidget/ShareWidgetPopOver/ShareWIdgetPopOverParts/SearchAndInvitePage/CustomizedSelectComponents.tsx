import {
  components,
  OptionProps,
  ClearIndicatorProps,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
} from "react-select";
import Avatar from "../../../../Avatar/Avatar";
import DropDownOptions from "../../../../DropDownOptions/DropDownOptions";
import {
  IDropDownOption,
  IStyleObject,
} from "../../../../DropDownOptions/types";
import { accessOptions } from "../../../config";
import { useShareWidget } from "../../../context/ShareWidgetContext";
import { DropdownIndicatorStyledButton } from "../../../styles";
import { TAccess } from "../../../types";

export const ClearIndicator = ({ innerProps }: ClearIndicatorProps) => (
  <span {...innerProps} />
);

export const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => (
  <span {...innerProps} />
);

interface IOptionProps extends OptionProps {
  data: { profileImg: string };
}

export const Option = (props: IOptionProps) => {
  return (
    <components.Option {...props}>
      <Avatar
        name={props?.label}
        alt={`${props?.label} profile`}
        src={props?.data?.profileImg}
      />
      <span>{props?.label}</span>
    </components.Option>
  );
};

/* Dropdown Indicator - start */
const accessDropdownStyles: IStyleObject = {
  dropDownIndicatorLabel: `
    font-size: 12px;
    color: var(--gray500);
  `,
  dropDownIndicator: {
    color: "var(--gray500)",
  },
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const {
    HideSearchAndInvitePage,
    SetGlobalAccess,
    SetSelectedInvitees,
    globalAccess,
    selectedInvitees,
  } = useShareWidget();

  const handleAccessOptionChange = (selectedAccess: IDropDownOption) => {
    SetGlobalAccess(selectedAccess.label as TAccess);
  };

  const handleInviteClick = () => {
    if (selectedInvitees?.length) {
      SetSelectedInvitees(
        selectedInvitees.map((invitee) => ({
          ...invitee,
          access: globalAccess,
        }))
      );
    }

    HideSearchAndInvitePage();
  };

  return (
    <div className="ControlComponent">
      <components.DropdownIndicator {...props}>
        <DropDownOptions
          value={globalAccess}
          options={accessOptions}
          styles={accessDropdownStyles}
          onChange={handleAccessOptionChange}
        />
        <DropdownIndicatorStyledButton onClick={handleInviteClick}>
          Invite
        </DropdownIndicatorStyledButton>
      </components.DropdownIndicator>
    </div>
  );
};
/* Dropdown Indicator - end */
