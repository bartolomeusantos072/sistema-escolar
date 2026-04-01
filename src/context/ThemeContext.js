import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {/* Essa div garante que a classe 'dark' ou 'light' envolva todo o conteúdo renderizado */}
            <div className={darkMode ? 'dark-mode-global' : 'light-mode-global'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
// Exportação nomeada (Named Export)