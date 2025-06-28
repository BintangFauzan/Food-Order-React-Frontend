import {Routes} from "react-router";
import {Route} from "react-router";
import Customer from "../page/Customer.jsx";
import LoginPage from "../page/LoginPage.jsx";
import AdminPage from "../page/AdminPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import FoodsPageAdmin from "../page/FoodsPageAdmin.jsx";

export default function RouterIndex () {
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
           <Route element={<PrivateRoute/>}>
             <Route path='/customer' element={<Customer/>}/>
             <Route path='/Admin' element={<AdminPage/>}/>
             <Route path='/foods' element={<FoodsPageAdmin/>}/>
           </Route>
        </Routes>
    )
}
