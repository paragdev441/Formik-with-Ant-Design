import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AntdForm from "./components/AntdForm";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AntdForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;