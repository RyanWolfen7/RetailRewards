import React from 'react'
import { MainContainer } from '../../styles/MainStyles'
import { withRouter } from 'react-router-dom'
import CalculatorForm from '../CalculatorForm/CalculatorForm'

const MainView = props => {
    return (
        <MainContainer>
            <CalculatorForm />
        </MainContainer>
    )
}

export default withRouter(MainView)