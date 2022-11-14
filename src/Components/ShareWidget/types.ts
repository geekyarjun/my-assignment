import { ReactNode } from "react";
import { IDropDownOption } from "../DropDownOptions/types";
import { Actions } from "./config";

export type TInviteeOptions = {
  label: string;
  options: TInviteeOption[];
};

export interface IShareWidgetState {
  showSearchAndInvitePage: boolean;
  availableInviteesOptions: TInviteeOptions[];
  selectedInvitees: TInviteeOption[];
  globalAccess: TAccess;
}

export interface IShareWidgetContext extends IShareWidgetState {
  ShowSearchAndInvitePage: () => void;
  HideSearchAndInvitePage: () => void;
  SetSelectedInvitees: (selectedInvitees: TInviteeOption[]) => void;
  SetGlobalAccess: (access: TAccess) => void;
}

export interface IShareWidgetProps {
  label?: string;
  children?: ReactNode;
  inviteesOptions?: TInviteeOptions[];
}

export type TAccess = "Full access" | "Can edit" | "Can view" | "No access";

export type TShareWidgetAction =
  | { type: Actions.SET_GLOBAL_ACCESS; payload: TAccess }
  | { type: Actions.SHOW_INVITEES_PAGE; payload?: any }
  | { type: Actions.HIDE_INVITEES_PAGE; payload?: any }
  | { type: Actions.SET_INVITEES_OPTIONS; payload: TInviteeOptions[] }
  | { type: Actions.SET_SELECTED_INVITEES; payload: TInviteeOption[] };

export interface IInviteDropDownProps {
  placeholder?: string;
}

export interface IInviteSectionProps {
  handleFocus: () => void;
}

export type TInviteesData = {
  id: number;
  name: string;
  email: string;
  access: string;
};

export interface IHandleAccessChangeParams {
  label: string;
  selectedAccess: IDropDownOption;
}

export interface IInviteeProps {
  label: string;
  profileImg: string;
  members?: number;
  access?: TAccess;
  handleAccessOptionChange: ({
    label,
    selectedAccess,
  }: IHandleAccessChangeParams) => void;
}

export type TInviteeOption = {
  value: any;
  label: string;
  profileImg: string;
  members?: number;
  access?: TAccess;
};
