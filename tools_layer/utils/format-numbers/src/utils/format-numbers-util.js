export function formatPrice(locale, currency, value) {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);

  return price;
};
