const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
]

type TipePercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercemtageForm({ setTip }: TipePercentageFormProps) {
  return (
    <div>
      <h3 className='font-black text-2l'>Propina:</h3>
      <form>
        {tipOptions.map((tip) => (
          <div className='flex gap-2' key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type='radio'
              name='tip'
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
