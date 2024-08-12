import React, { createContext, useCallback, useRef } from "react";
export const ContextAPI = createContext({ eleRef: null, handleRef: null });
function Context({ children }) {
  const refs = useRef({});

  const setRef = useCallback(
    (key) => (node) => {
      refs.current[key] = node;
    },
    []
  );

  const scrollToRef = useCallback((key) => {
    const ref = refs.current[key];
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <ContextAPI.Provider value={{ setRef, scrollToRef }}>
      {children}
    </ContextAPI.Provider>
  );
}

export default Context;
