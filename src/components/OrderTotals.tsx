import { Dispatch, useCallback } from 'react'
import { formatCurrency } from '../helpers'
import { OrderItem } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: Dispatch<OrderActions>
}
export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subTotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order])

  return (
    <>
      <div className='space-y-3'></div>
      <h2 className='font-black text-2xl'>Totales y Propina:</h2>
      <p>
        Subtotal a pagar:{' '}
        <span className='font-bold'>{formatCurrency(subTotalAmount())}</span>
      </p>
      <p>
        Propina:{' '}
        <span className='font-bold'>{formatCurrency(tipAmount())}</span>
      </p>
      <p>
        Total a Pagar:{' '}
        <span className='font-bold'>
          {formatCurrency(subTotalAmount() + tipAmount())}
        </span>
      </p>
      <button
        className='w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10'
        disabled={subTotalAmount() === 0}
        onClick={() => dispatch({ type: 'place-order' })}
      >
        Guardar Orden
      </button>
    </>
  )
}
