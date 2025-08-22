export function isEmail(email) {
  if (isEmpty(email)) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format";
  return "";
}

export function hasMinLength(value, len) {
  if (!value || value.length < len) return true;
  return false;
}
export function isEmpty(value) {
  if (value.trim() === "") return true;
  return false;
}

export function hasMinlength(value, minLength) {
  if (value.length >= minLength) return true;
  return false;
}
