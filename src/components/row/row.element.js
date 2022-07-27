import styled from "styled-components";

export const RowContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`
export const RowContent = styled.div`
display: flex;
overflow-x: scroll;
overflow-y: hidden;

&::-webkit-scrollbar {
    display: none;
}
`
export const RowTitle = styled.h2`
color: #fff;
`
export const RowItem = styled.img`
width: 10rem;
margin: 0 .3rem;
vertical-align: middle;
cursor: pointer;

&:hover {
    transform: scale(1.1);
}
`