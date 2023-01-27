import {useRef} from 'react';

const useDebounce = (action, delay) => {
  const timeoutRef = useRef(null);

  const debouncedFn = (...args) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      action(...args);
    }, delay);
  }

  return debouncedFn;
}

export default useDebounce;
