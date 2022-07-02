export function setlocalStorage(key: string, value: Recordable) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getlocalStorage(key: string) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
}
