import { useMemo, useRef } from "react";
import Tippy from "@tippyjs/react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  StyledContainer,
  StyledDropDownButton,
  StyledDropDownButtonLabel,
  StyledOption,
} from "./styles";
import { IDropDownOptionsProps } from "./types";

const DropDownOptions = ({
  styles = {},
  value,
  options,
  onChange = () => {},
  placeholder = "Select...",
}: IDropDownOptionsProps) => {
  const tippyRef = useRef<any>(null);
  const formattedOption = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        selected: option.label === value,
      })),
    [options, value]
  );

  const { dropDownIndicator, dropDownIndicatorLabel } = styles;

  return (
    <Tippy
      ref={tippyRef}
      interactive
      trigger="click"
      animation="scale"
      theme="light-border"
      placement={"bottom"}
      content={
        <StyledContainer>
          {formattedOption.map((option) => (
            <StyledOption
              key={option.label}
              variant={option?.variant}
              selected={option?.selected}
              onClick={() => {
                onChange(option);
                tippyRef?.current?._tippy?.hide();
              }}
            >
              {option?.label}
            </StyledOption>
          ))}
        </StyledContainer>
      }
    >
      <StyledDropDownButton>
        <StyledDropDownButtonLabel customStyle={dropDownIndicatorLabel}>
          {value || placeholder}
        </StyledDropDownButtonLabel>
        <RiArrowDownSLine
          size={20}
          color={"var(--gray500)"}
          style={dropDownIndicator}
        />
      </StyledDropDownButton>
    </Tippy>
  );
};

export default DropDownOptions;
