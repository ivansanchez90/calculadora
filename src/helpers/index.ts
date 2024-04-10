export const formatCurrency = (quantity: number) => {
  return new Intl.NumberFormat('EN-us', {
    style: 'currency',
    currency: 'USD',
  }).format(quantity)
}
