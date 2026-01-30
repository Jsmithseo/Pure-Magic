// libs/money.js
export function formatMoney(amount, currencyCode = "USD") {
    const n = Number(amount || 0);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  }
  