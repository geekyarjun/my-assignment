import { StyledLabel, StyledSlider } from "./styles";

const SwitchButton = () => {
  return (
    <StyledLabel className="switch">
      <input type="checkbox" />
      <StyledSlider className="slider round"></StyledSlider>
    </StyledLabel>
  );
};

export default SwitchButton;
