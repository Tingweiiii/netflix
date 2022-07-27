import React from "react";
import { IconContext } from "react-icons";
import { ButtonContainer, ButtonIcon, ButtonText } from './button.element'

function Button({ text, fontColor, bgColor, icon }) {
  return (
    <ButtonContainer bgColor={bgColor} >
      <IconContext.Provider value={{className: "btnIcon"}}>
        <ButtonIcon fontColor={fontColor}>{icon}</ButtonIcon>
      </IconContext.Provider>
      <ButtonText fontColor={fontColor}>{text}</ButtonText>
    </ButtonContainer>
  )
}

export default Button;
