const fetchData = async (url) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("error :" + error);
  }
};

const debounce = (func, delay) => {
  if (typeof func !== "function") {
    throw new TypeError(`Not a valid function ${func}`);
  }
  if (typeof delay !== "number" || delay < 0) {
    throw new TypeError(`Not a valid delay ${delay}`);
  }
  let timeout;
  return (...args) => {
    return new Promise((resolve) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(async () => {
        const data = await func(...args);
        resolve(data);
      }, delay);
    });
  };
};

const debounceQuery = debounce(fetchData, 1000);
export default debounceQuery;
