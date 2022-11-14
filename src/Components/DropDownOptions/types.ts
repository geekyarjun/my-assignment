import { CSSObject } from "styled-components";

export type TStyledOption = {
  variant?: string;
  selected?: boolean;
};

export interface IDropDownOption extends TStyledOption {
  label: string;
}

interface IDropDownStyle {
  dropDownIndicatorLabel?: string;
  dropDownIndicator?: CSSObject;
}

export interface IDropDownOptionsProps {
  value: any;
  options: IDropDownOption[];
  placeholder?: string;
  styles?: IDropDownStyle;
  onChange?: (option: IDropDownOption) => void;
}

export interface IStyleObject {
  dropDownIndicatorLabel?: string;
  dropDownIndicator?: { color?: string; size?: number };
}
