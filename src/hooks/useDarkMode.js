// import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initName) => {
    const [darkMode, setDarkMode] = useLocalStorage(false, initName);


    return [darkMode, setDarkMode]
}

export default useDarkMode;