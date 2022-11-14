import { Actions, initialShareWidgetReducerState } from "../config";
import { IShareWidgetState, TShareWidgetAction } from "../types";

const ShareWidgetReducer = (
  state: IShareWidgetState = initialShareWidgetReducerState,
  { type, payload }: TShareWidgetAction
) => {
  switch (type) {
    case Actions.SHOW_INVITEES_PAGE: {
      return { ...state, showSearchAndInvitePage: true };
    }
    case Actions.HIDE_INVITEES_PAGE: {
      return { ...state, showSearchAndInvitePage: false };
    }
    case Actions.SET_INVITEES_OPTIONS: {
      return { ...state, availableInviteesOptions: payload };
    }
    case Actions.SET_SELECTED_INVITEES: {
      return { ...state, selectedInvitees: payload };
    }
    case Actions.SET_GLOBAL_ACCESS: {
      return { ...state, globalAccess: payload };
    }
    default:
      return { ...state };
  }
};

export default ShareWidgetReducer;
