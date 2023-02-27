import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/app-header/AppHeader";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const App = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <CssBaseline/>
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path="/" element={<h1>Home</h1>}/>
                            <Route path="/completed" element={<h1>Main</h1>}/>
                            <Route path="/uncompleted" element={<h1>Base</h1>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;