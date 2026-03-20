// Instance formatters
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const numberFormatter = new Intl.NumberFormat("pt-BR");

const relativeDateFormatter = new Intl.RelativeTimeFormat("pt-BR", {
  numeric: "auto",
});

const longDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const monthYearFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
  year: "numeric",
});

// Export formatters functions
export const formatCurrency = (value) => currencyFormatter.format(value ?? 0);

export const formatNumber = (value) => numberFormatter.format(value ?? 0);

export const formatRelativeDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) return "";

  const now = new Date();

  const diffInDays = Math.round((date - now) / (1000 * 60 * 60 * 24));

  if (Math.abs(diffInDays) <= 15) {
    return relativeDateFormatter.format(diffInDays, "day");
  }

  return date.toLocaleDateString("pt-BR");
};

export const formatLongDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) return "";

  return longDateFormatter.format(date);
};

export const formatMonthYear = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) return "";

  const formatted = monthYearFormatter.format(date);

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
