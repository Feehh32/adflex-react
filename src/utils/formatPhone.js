export function formatPhone(value) {
  if (!value) return;

  const numbers = value.replace(/\D/g, "");

  const limited = numbers.slice(0, 11);

  if (limited.length <= 2) {
    return `(${limited})`;
  }

  if (limited.length <= 6) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
  }
  if (limited.length <= 10) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 6)}-${limited.slice(
      6
    )}`;
  }

  return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
}

export function unformatPhone(value) {
  return value.replace(/\D/g, "");
}
