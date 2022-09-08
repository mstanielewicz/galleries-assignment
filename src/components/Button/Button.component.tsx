import React from "react";
import { SButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  disabled,
  onClick,
  label,
  selected,
  width,
}: ButtonProps): JSX.Element => (
  <SButton
    disabled={disabled}
    onClick={onClick}
    selected={selected}
    width={width}
  >
    {label}
  </SButton>
);

export default Button;
