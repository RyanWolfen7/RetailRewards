import React from 'react'
import { Card, CardHeader, CardBody, CardForm, CardFormLabel, CardFormBody, CardFormButton } from '../../styles/MainStyles'

const CalculatorForm = props => {

    return (
        <Card>
            <CardHeader> Add Mock Item </CardHeader>
            <CardBody>
                <CardFormBody>
                    <CardFormLabel> $ Price </CardFormLabel>
                    <CardForm type='number' value='2' />
                    <CardFormButton> Save </CardFormButton>
                </CardFormBody>
            </CardBody>
        </Card>
    )
}

export default CalculatorForm