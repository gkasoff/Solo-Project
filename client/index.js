import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import App from './App';
import Completed from './components/Completed'
import Main2 from './Main2'

const root = ReactDOM.createRoot(document.querySelector("#root"))
const completedTasks = []

root.render(
    <div>
        {/* <Main2 /> */}
        {/* <Completed tasks={completedTasks} /> */}
        <BrowserRouter>
            <Routes>
                <Route path="/completed" element={<Completed />} />
                <Route path="/" element={<App />} />

            </Routes>
            {/* <Routes>
                <Route path="/" element={<App />} />
            </Routes> */}
        </BrowserRouter>

    </div>
)



