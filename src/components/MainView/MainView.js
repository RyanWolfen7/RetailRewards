import React, { useState } from 'react'
import { MainContainer } from '../../styles/MainStyles'
import { withRouter } from 'react-router-dom'
import CalculatorForm from '../CalculatorForm/CalculatorForm'
import ItemizedList from '../ItemizedList/ItemizedList'

const MainView = props => {
    const [ items, setItems ] = useState([])

    const addToList = item => {
        let itemData = {...item}
        itemData.id = itemData.name + itemData.price
        setItems([...items, ...[itemData]])
    }
    console.log(items)
    return (
        <MainContainer>
            <CalculatorForm addToList={addToList}/>
            <ItemizedList items={items}/>
        </MainContainer>
    )
}

export default withRouter(MainView)