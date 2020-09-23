import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardForm, CardFormLabel, CardFormBody, CardFormButton } from '../../styles/MainStyles'

const CalculatorForm = props => {
    const [ price, setPrice ] = useState(0)

    const updatePrice = event => { setPrice(event.target.value) }

    return (
        <Card>
            <CardHeader> Add Mock Item </CardHeader>
            <CardBody>
                <CardFormBody>
                    <CardFormLabel> $ Price </CardFormLabel>
                    <CardForm type='number' value={price} onChange={ event => updatePrice(event)}/>
                    <CardFormButton> Save </CardFormButton>
                </CardFormBody>
            </CardBody>
        </Card>
    )
}

export default CalculatorForm