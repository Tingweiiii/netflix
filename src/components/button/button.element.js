import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
gap: .5rem;
background-color: ${props => props.bgColor || "#fff" };
padding: .8rem 2rem;
border-radius: 5px;
cursor: pointer;
`
export const ButtonIcon = styled.i`
color: ${props => props.fontColor || "#000"};

.btnIcon{
    font-size: 1.1rem;
    vertical-align: middle;
}
`
export const ButtonText = styled.p`
color: ${props => props.fontColor || "#000"};
`