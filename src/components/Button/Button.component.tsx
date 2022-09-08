import React from "react";

import { SButton } from "./Button.styles";

const Button = ({
  disabled,
  onClick,
  label,
  selected,
  width,
}: any): JSX.Element => (
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
