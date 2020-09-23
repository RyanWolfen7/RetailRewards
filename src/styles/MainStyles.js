import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'


export const MainContainer = styled.div`
    grid-area: 2 / 1 / span 9 / span 5;
    display: grid;
    grid-gap: 1em;
    margin: 0;
    grid-template-columns: repeat( 2, 1fr);
    grid-template-rows: auto;
`

export const Card = styled.div`
    background: ${ props => props.inverse ? '#ffffff' : '#5D5C61'} ;
    color: ${ props => props.inverse ? '#5D5C61' : '#ffffff'};
    border-radius: 2%;
    display: grid;
    transition: .5s, 1s;
    margin: 2rem 0 0;
    width: ${ props => props.fit ? 'fit-content' : '100%'};
    height: fit-content;
    ${ props => props.inverse ? 'border: .2rem solid #5D5C61;' : ''}
    ${ props => props.row ? `grid-area: 1 / 2 / span ${props.row} / span 1;` : ''}
    ${ props => props.fit ? 'place-self: center;' : '' }
`

export const CardHeader = styled.h1`
    margin: .5rem;
    display: grid;
    place-items: center;
    border-radius: 2%;
    height: min-content;
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
    padding: .5rem 3rem .5rem;
    margin: .3rem;
    border-radius: 5%;
    cursor: pointer;
    transition: ease 0.5s;
    grid-area: 3 / 1 / span 1 / span 2;  

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
    display: grid;
    grid-template-columns: repeat( 2, 1fr);
    grid-gap: .05em;
    place-items: center;
    margin: .8rem;
    padding: .5rem;
`

export const CardListBody = styled.div`
    display: grid;
`

export const CardListItem = styled.div`
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    place-items: center;
    margin: .3rem;
`

export const CardTotalElement = styled.div`
    display: grid;
    margin: .5rem;
`

export const CardDelete = styled(FaRegTrashAlt)`
    cursor: pointer;
    transition: ease 0.5s;

    :hover {
        color: red;
    }

`