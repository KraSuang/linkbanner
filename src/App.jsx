import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./context/profile"
import Developer_Detail from "./context/Developer_Detail"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/developer-detail" element={<Developer_Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}