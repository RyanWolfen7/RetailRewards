import React from 'react'
import { Card, CardListBody, CardHeader, CardListItem, CardDelete } from '../../styles/MainStyles'

const ItemizedList = props => {
    const { items, deleteFromList } = props

    const renderItems = () => {
        return items.map( item => {
            return (
                <CardListItem key={item.id}> 
                    <div> Name: {item.name} </div>
                    <div> $ {Number(item.price)} </div>
                    <CardDelete onClick={() => deleteFromList(item.id)}/>
                </CardListItem>
            )
        })
    }

    return (
        <Card inverse row={items.length}> 
            <CardHeader> Item List </CardHeader>
            <CardListBody>
                {items && renderItems()}
            </CardListBody>        
        </Card>
    )
}

export default ItemizedList