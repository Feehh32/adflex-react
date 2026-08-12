export function formatPhone(value) {
  // Formatting helpers used while editing form values.
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
      6,
    )}`;
  }

  return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
}

export function unformatPhone(value) {
  // Removes formatting so the phone number can be stored or validated as digits only.
  return value.replace(/\D/g, "");
}
