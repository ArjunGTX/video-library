export const getAccessToken = () => localStorage.getItem("auth");

export const getArray = (length: number) => Array.from(Array(length).keys());
