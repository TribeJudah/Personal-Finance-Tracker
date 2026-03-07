export const formatCurrency = (amount, currency = 'EUR') => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount)
}

export const formatDate = (dateStr) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export const CATEGORY_COLORS = {
  Salary:        '#10b981',
  Freelance:     '#34d399',
  Investment:    '#6ee7b7',
  Gift:          '#a7f3d0',
  Groceries:     '#ef4444',
  Dining:        '#f97316',
  Transport:     '#eab308',
  Utilities:     '#8b5cf6',
  Entertainment: '#ec4899',
  Healthcare:    '#06b6d4',
  Shopping:      '#f43f5e',
  Other:         '#94a3b8',
}

export const CHART_COLORS = [
  '#ef4444','#f97316','#eab308','#8b5cf6',
  '#ec4899','#06b6d4','#f43f5e','#94a3b8',
]
