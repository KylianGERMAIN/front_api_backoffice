import React from "react";

interface Props {
  text: string;
  icon: any;
  cssDiv: string;
  cssText: string;
  ClickFonction: (text: string | JSX.Element) => void;
}

export const IconButton = ({ icon, cssDiv, ClickFonction }: Props) => {
  return (
    <div className={cssDiv} onClick={() => ClickFonction(icon)}>
      {icon}
    </div>
  );
};

export const IconTextButton = ({
  icon,
  text,
  cssDiv,
  cssText,
  ClickFonction,
}: Props) => {
  return (
    <div className={cssDiv} onClick={() => ClickFonction(text)}>
      {icon}
      <p className={cssText}>{text}</p>
    </div>
  );
};

export const Button = ({ text, cssDiv, cssText, ClickFonction }: Props) => {
  return (
    <div className={cssDiv} onClick={() => ClickFonction(text)}>
      <p className={cssText}>{text}</p>
    </div>
  );
};
