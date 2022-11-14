import Select, { MultiValue } from "react-select";
import { useShareWidget } from "../../../context/ShareWidgetContext";
import { selectStyle } from "../../../styles";
import { TInviteeOption } from "../../../types";
import {
  Option,
  ClearIndicator,
  DropdownIndicator,
  IndicatorSeparator,
} from "./CustomizedSelectComponents";

const SearchAndInvitePage = () => {
  const { availableInviteesOptions, SetSelectedInvitees } = useShareWidget();

  const handleOnChange = (selectedInvitees: any) => {
    SetSelectedInvitees(selectedInvitees);
  };

  return (
    <div>
      <Select
        isMulti
        menuIsOpen
        styles={selectStyle}
        onChange={handleOnChange}
        options={availableInviteesOptions}
        components={{
          //@ts-ignore
          Option,
          ClearIndicator,
          DropdownIndicator,
          IndicatorSeparator,
        }}
        placeholder="Search emails, names or groups"
      />
    </div>
  );
};

export default SearchAndInvitePage;
