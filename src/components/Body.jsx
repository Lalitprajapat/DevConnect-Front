import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./Footer";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=>store.user);
    const fetchUser = async () =>{
        if(userData)return;
        try{
            const user = await axios.get(API_BASE_URL+"/profile/view", 
            {withCredentials:true}
        );
        dispatch(addUser(user.data));
        }catch(err){
            
            if(err.status == 401)navigate("/login");
            console.log("Error fetching user data", err);
        }

    };
    useEffect(()=>{
       fetchUser();
    },[]);
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
export default Body;