import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFormBody, CardTotalElement } from '../../styles/MainStyles'

const Calculator = props => {
    const { items } = props

    const calculatetotal = () => {
        return items.reduce( (t , item) => t + Number(item.price), 0)
    }

    const calculatePoints = () => {
        const totalPrice = items.reduce( (t , item) => t + Number(item.price), 0)
        if(totalPrice >= 100) {
            const doublePoint = (totalPrice - 100) * 2
            const singlePoint = 50
            return doublePoint + singlePoint
        } else {
            const value = totalPrice - 50
            return value > 0 ? value : 0
        }
    }

    return (
        <Card fit>
            <CardHeader > Point Total </CardHeader>
            <CardBody>
                <CardFormBody>
                    <CardTotalElement> Total Price: </CardTotalElement>
                    <CardTotalElement> {calculatetotal()} </CardTotalElement>
                    <CardTotalElement> Total Points: </CardTotalElement>
                    <CardTotalElement> {calculatePoints()} </CardTotalElement>
                </CardFormBody>
            </CardBody>
        </Card>
    )
}

export default Calculator