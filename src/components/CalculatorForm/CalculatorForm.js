import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardForm, CardFormLabel, CardFormBody, CardFormButton } from '../../styles/MainStyles'

const CalculatorForm = props => {
    const [ state, setState ] = useState({ price: 0, name: ''})
    console.log(state)

    const updatePrice = event => { 
        setState({...state, ...{ [event.target.name]: event.target.value } }) 
    }

    return (
        <Card>
            <CardHeader> Add Mock Item </CardHeader>
            <CardBody>
                <CardFormBody>
                    <CardFormLabel> Name </CardFormLabel>
                    <CardForm type='text' value={state.name} name='name' onChange={ event => updatePrice(event)}/>
                    <CardFormLabel> Price </CardFormLabel>
                    <CardForm type='number' value={state.price} name='price' onChange={ event => updatePrice(event)}/>
                    <CardFormButton> Add </CardFormButton>
                </CardFormBody>
            </CardBody>
        </Card>
    )
}

export default CalculatorForm