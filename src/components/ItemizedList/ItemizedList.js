import React from 'react'
import { Card, CardListBody, CardHeader, CardListItem, CardFormButton } from '../../styles/MainStyles'
import { FaRegTrashAlt } from 'react-icons/fa'

const ItemizedList = props => {
    const { items, deleteFromList } = props

    const renderItems = () => {
        return items.map( item => {
            return (
                <CardListItem key={item.id}> 
                    <div> Name: {item.name} </div>
                    <div> $ {Number(item.price)} </div>
                    <FaRegTrashAlt onClick={() => deleteFromList(item.id)}/>
                </CardListItem>
            )
        })
    }

    return (
        <Card inverse row={4}> 
            <CardHeader> Item List </CardHeader>
            <CardListBody>
                {items && renderItems()}
            </CardListBody>        
        </Card>
    )
}

export default ItemizedList