const storage = window.localStorage;

export const setItem = (key, value) => {};

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch (e) {
    console.log(e);

    return defaultValue;
  }
};
