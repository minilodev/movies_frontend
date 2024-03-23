import { Route, Routes } from "react-router-dom"
import Home from "../Home/home"
import Menu from "../Menu/menu"
import People from "../People/people"
import Group from "../JoinGroup/joingroup"
import Login from "../Login/login"

const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/People" element={<People />}></Route>
                <Route path="/Group" element={<Group />}></Route>
                <Route path="/Login" element={<Login />}></Route>
            </Route>
        </Routes>
    )
}

export default RouterCustom;