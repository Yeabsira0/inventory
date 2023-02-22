import React from 'react'

const Item = ({item}) => {
  return (
    <tr>
        <td>{item.item}</td>
        <td>{item.quantity}</td>
        <td className='before-last'>{item.price}</td>
        <td className='last'><button className='controls'>Edit</button><button className='controls'>Delete</button></td>
    </tr>
  )
}
 export default Item;