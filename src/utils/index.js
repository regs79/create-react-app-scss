export const isHome = (location) => {
  return location.pathname === '/'
}

export const getPageName = (location) => {
  const str = location.pathname
  if (typeof str !== 'string') {
    throw new Error('STRING ONLY');
  }
  return str.replace('/','');
}

export const firstLetterUppercase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
