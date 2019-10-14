import {useState, useLayoutEffect} from 'react'

//custom hooks that return the windows width and height each time it changes
function useWindowSize() {
    let [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


  export default useWindowSize