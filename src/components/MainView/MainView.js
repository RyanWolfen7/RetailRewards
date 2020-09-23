import React, { useState } from 'react'
import { MainContainer } from '../../styles/MainStyles'
import { withRouter } from 'react-router-dom'
import CalculatorForm from '../CalculatorForm/CalculatorForm'
import ItemizedList from '../ItemizedList/ItemizedList'
import Calculator from '../Calculator/Calculator'

const MainView = props => {
    const [ items, setItems ] = useState([])

    const addToList = item => {
        let itemData = {...item}
        itemData.id = itemData.name + itemData.price
        setItems([...items, ...[itemData]])
    }

    const deleteFromList = id => {
        let itemsClone = [...items]
        const removeIndex = itemsClone.map(item => item.id).indexOf(id)
        itemsClone.splice(removeIndex, 1)
        setItems(itemsClone)
    }

    return (
        <MainContainer>
            <CalculatorForm addToList={addToList}/>
            <ItemizedList items={items} deleteFromList={deleteFromList}/>
            <Calculator items={items}/>
        </MainContainer>
    )
}

export default withRouter(MainView)