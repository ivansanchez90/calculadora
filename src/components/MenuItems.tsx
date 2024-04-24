import { Dispatch } from 'react'
import type { MenuItem } from '../types'
import { OrderActions } from '../reducers/order-reducer'
type MenuItemProps = {
  item: MenuItem
  dispatch: Dispatch<OrderActions>
}

export default function MenuItems({ item, dispatch }: MenuItemProps) {
  return (
    <>
      <button
        className='border-2 hover:bg-teal-200 border-teal-400 w-full p-2 flex justify-between'
        onClick={() => dispatch({ type: 'add-item', payload: { item: item } })}
      >
        <p>{item.name}</p>
        <p className='font-black'>${item.price}</p>
      </button>
    </>
  )
}
