import styled from "styled-components";
import { StylesConfig } from "react-select";

export const StyledSharedButton = styled.button`
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background: #111827;

  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPopOverContainer = styled.div`
  width: 500px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const StyledShareToWebContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px 20px 10px;
  border-bottom: 1px solid #e5e7eb;
`;

export const StyledIconTitleContainer = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled.p`
  color: var(--gray900);
  font-size: 16px;
`;

export const StyledSubHeading = styled.p`
  color: var(--gray500);
  font-size: 14px;
`;

export const StyledInviteSectionContainer = styled.div`
  padding: 16px 12px;
`;

export const StyledInviteeNameIcon = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    border-radius: 50%;
  }
`;

export const StyledInviteeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const StyledAccessButton = styled.button`
  font-size: 12px;
  color: var(--gray500);
  background-color: transparent;
  border: none;
`;

export const StyledCopyLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px;
  background-color: var(--gray50);
  border-top: 1px solid #e5e7eb;
  border-radius: 0px 0px 8px 8px;

  button {
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
  }

  button:first-child {
    color: var(--gray500);
  }

  button:nth-child(2) {
    color: var(--gray900);
  }
`;

export const StyledInviteesSection = styled.div`
  margin-top: 16px;
`;

export const StyledDropdownIndicator = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: none;
  color: #374151;
  height: 100%;
  padding: 0px 15px;
  background-color: var(--gray50);
  border-left: 1px solid var(--gray300);
`;

export const inviteDropDownStyle: StylesConfig = {
  control: (provided) => ({
    ...provided,
    "&:hover": {
      borderColor: "var(--indigo500)",
    },
  }),
  input: (provided) => ({ ...provided, fontSize: "14px" }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--gray500)",
    fontSize: "14px",
  }),
};

export const selectStyle: StylesConfig = {
  menu: (provided) => ({
    ...provided,
    position: "relative",
    margin: 0,
    boxShadow: "none",
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    minHeight: 0,
    padding: "10px 16px",
    borderRadius: "8px 8px 0px 0px",
    backgroundColor: "var(--gray100)",
    border: "none",
    borderWidth: isFocused ? "0px" : "1px",
    boxShadow: isFocused ? "none" : "none",
    borderBottom: "1px solid var(--gray200)",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: "4px",
    backgroundColor: "var(--gray200)",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: "14px",
    color: "var(--gray900)",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    "&:hover": {
      cursor: "pointer",
      color: "var(--gray900)",
      backgroundColor: "var(--gray300)",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
    color: "var(--gray500)",
  }),
  input: (provided) => ({
    ...provided,
    cursor: "text",
    fontSize: "14px",
    color: "var(--gray900)",
  }),
  groupHeading: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 500,
    color: "var(--gray700)",
    textTransform: "unset",
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: "pointer",
    gap: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    backgroundColor: isFocused ? "var(--gray100)" : "transparent",
    "&: active": {
      backgroundColor: "var(--gray100)",
    },
    "& > span": {
      fontWeight: 500,
      fontSize: "14px",
      color: "var(--gray900)",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "4px 16px",
  }),
};

export const DropdownIndicatorStyledButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #fff;

  border-radius: 6px;
  border: 1px solid var(--gray300);
`;
