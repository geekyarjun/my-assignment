import Tippy from "@tippyjs/react";
import { FaShareAlt } from "react-icons/fa";
import "tippy.js/animations/scale.css";

// Custom Modules
import { IShareWidgetProps } from "./types";
import { StyledSharedButton } from "./styles";
import GlobalStyle from "../../style/GlobalStyle";
import ShareWidgetPopOver from "./ShareWidgetPopOver/ShareWidgetPopOver";
import If from "../Conditional/If";
import {
  ShareWidgetContextProvider,
  useShareWidget,
} from "./context/ShareWidgetContext";

const ShareWidget = ({
  label = "Share",
  children,
}: IShareWidgetProps): JSX.Element => {
  const { HideSearchAndInvitePage } = useShareWidget();

  return (
    <>
      <GlobalStyle />
      <Tippy
        onHidden={() => HideSearchAndInvitePage()}
        interactive
        trigger="click"
        animation="scale"
        theme="light-border"
        placement={"bottom"}
        content={<ShareWidgetPopOver />}
      >
        <StyledSharedButton>
          <If
            condition={!!children}
            then={children}
            elseCase={
              <>
                {label} <FaShareAlt />
              </>
            }
          />
        </StyledSharedButton>
      </Tippy>
    </>
  );
};

const WrappedShareWidget = (props: IShareWidgetProps) => (
  <ShareWidgetContextProvider {...props}>
    <ShareWidget {...props} />
  </ShareWidgetContextProvider>
);

export default WrappedShareWidget;
