import type { MenuItem } from '../types'
type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className='border-2 hover:bg-teal-200 border-teal-400 w-full p-2 flex justify-between'
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className='font-black'>${item.price}</p>
      </button>
    </>
  )
}
