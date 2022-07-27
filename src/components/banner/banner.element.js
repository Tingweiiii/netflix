import styled from "styled-components";

export const BannerContainer = styled.div`
width: 100%;
height: 80vh;
background: ${props => `url(${props.bg})`} no-repeat center 20% / cover;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

&::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 80vh;
    background: linear-gradient(to right, rgba(0, 0, 0, .9) 10%, rgba(0, 0, 0, .85) 15%, rgba(0, 0, 0, .8) 20%, rgba(0, 0, 0, .7) 30%, rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0, .3) 70%, rgba(0, 0, 0, .1) 90%);
}
`
export const BannerContent = styled.div`
width: 100%;
max-width: 600px;
display: flex;
flex-direction: column;
gap: 2rem;
padding: 0 2rem;
z-index: 1;

@media screen and (max-width: 991px){
    padding: 0 1.5rem;
}
@media screen and (max-width: 768px){
    padding: 0 1rem;
}
`
export const BannerTitle = styled.h1`
font-size: 4rem;
color: #fff;

@media screen and (max-width: 991px){
    font-size: 3rem;
}
@media screen and (max-width: 768px){
    font-size: 2.5rem;
}
`
export const BannerText = styled.p`
font-size: 1rem;
line-height: 1.3;
color: #fff;
`
export const BannerButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`