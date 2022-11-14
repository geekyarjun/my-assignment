import { createContext, FC, useContext, useReducer, useEffect } from "react";
import {
  Actions,
  fakeOptions,
  initialShareWidgetReducerState,
} from "../config";
import { IShareWidgetContext, TAccess, TInviteeOption } from "../types";
import ShareWidgetReducer from "./ShareWidgetReducer";

const ShareWidgetContext = createContext<IShareWidgetContext>(
  {} as IShareWidgetContext
);

export const ShareWidgetContextProvider: FC<any> = ({
  children,
  inviteesOptions,
}) => {
  const [state, dispatch] = useReducer(
    ShareWidgetReducer,
    initialShareWidgetReducerState
  );

  useEffect(() => {
    // Mimic the fetching of available users and groups
    setTimeout(() => {
      dispatch({
        type: Actions.SET_INVITEES_OPTIONS,
        payload: inviteesOptions || fakeOptions,
      });
    }, 1000);
  }, []);

  const ShowSearchAndInvitePage = () =>
    dispatch({ type: Actions.SHOW_INVITEES_PAGE });
  const HideSearchAndInvitePage = () =>
    dispatch({ type: Actions.HIDE_INVITEES_PAGE });
  const SetSelectedInvitees = (payload: TInviteeOption[]) =>
    dispatch({ type: Actions.SET_SELECTED_INVITEES, payload });
  const SetGlobalAccess = (access: TAccess) =>
    dispatch({ type: Actions.SET_GLOBAL_ACCESS, payload: access });

  return (
    <ShareWidgetContext.Provider
      value={{
        ...state,
        ShowSearchAndInvitePage,
        HideSearchAndInvitePage,
        SetSelectedInvitees,
        SetGlobalAccess,
      }}
    >
      {children}
    </ShareWidgetContext.Provider>
  );
};

export const useShareWidget = () => useContext(ShareWidgetContext);
