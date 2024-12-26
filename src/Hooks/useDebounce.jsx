import { useEffect, useRef } from "react";
const useDebounce = (callback, delay) => {
  const timeOutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);

  const debounceCallBack = (...args) => {
    // if there is a setTimeOut id in timeOutIdRef then we will clear it

    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }

    //  setTimeOut will return a id and we will store it in timeOutIdRef

    timeOutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceCallBack;
};

export default useDebounce;
