import styled from 'styled-components'

export const MainContainer = styled.div`
    grid-area: 2 / 1 / span 9 / span 5;
    display: grid;
    grid-gap: 1em;
    margin: 0;
    grid-template-columns: repeat( 2, 1fr);
    place-items: center;
`

export const Card = styled.div`
    min-width: 100%;
    background: #5D5C61;
    border-radius: 2%;
    display: grid;
    transition: .5s, 1s;
    margin: 2rem;
    width: ;
`

export const CardHeader = styled.h1`
    margin: .5rem;
    display: grid;
    place-items: center;
    border-radius: 2%;
    color: white;
`

export const CardBody = styled.div`
    background: #7395AE;
    margin: .5rem;
    border-radius: 2%;
    display: grid;
    place-items: center;
    padding: 0 .5rem 0;
`
export const CardFormLabel = styled.label`

`

export const CardFormButton = styled.div`
    background: #5D5C61;
    color: #ffffff;
    padding: .3rem;
    margin: .3rem;
    border-radius: 20%;
    cursor: pointer;
    transition: ease 0.5s;

    :hover {
        color: #5D5C61;
        background: #ffffff;
    }
`

export const CardForm = styled.input`
    background: #7395AE;
    border: .5rem solid #557A95;
    width: fit-content;
    color: #ffffff;
    
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const CardFormBody = styled.div`
    background-color: #557A95;
    border: .1rem solid #ffffffff;
    color: #ffffff;
    width: 100%;
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    grid-gap: .05em;
    place-items: center;
    margin: .8rem;
`