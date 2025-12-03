import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constants";

const Login = () =>{
    const [emailId, setEmailId] = useState("example@gmail.com");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLogInForm, setIsLogInForm] = useState(true);

    const handleLogin = async () => {
        try {
            const res= await axios.post(API_BASE_URL+"/login", {
            emailId: emailId,
            password: password
            },{withCredentials:true});
            console.log("Login successful:", res.data);
            dispatch(addUser(res.data));
            return navigate('/');
        } catch (err) {

            setError(err?.response?.data||"Login failed");
            console.log("err failed bcz of "+ err);
            
        }    
    };
    const handleSignUp = async () => {
        try{
            const res = await axios.post(API_BASE_URL+"/signup",
                {firstName, lastName, emailId, password}, {withCredentials:true}
            );
            dispatch(addUser(res.data.data));
            return navigate("/profile");
        }catch(err){
            setError(err?.response?.data||"SignUp failed");
        }
    };

    return(

        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLogInForm?"Login":"SignUp"}</h2>
                    <div>
                       {!isLogInForm && <> 
                          <label className="form-control w-full max-w-xs my-4">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input type="text" 
                                value={firstName} 
                                className="input input-bordered w-full max-w-xs" 
                                onChange={(e)=>setFirstName(e.target.value)}
                                />
                            
                         </label>
                         <label className="form-control w-full max-w-xs my-4">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" 
                                value={lastName} 
                                className="input input-bordered w-full max-w-xs" 
                                onChange={(e)=>setLastName(e.target.value)}
                                />
                            
                         </label>
                        </>}
                         <label className="form-control w-full max-w-xs my-4">
                            <div className="label">
                                <span className="label-text">Email ID</span>
                            </div>
                            <input type="text" 
                                value={emailId} 
                                className="input input-bordered w-full max-w-xs" 
                                onChange={(e)=>setEmailId(e.target.value)}
                                />
                            
                         </label>
                         <label className="form-control w-full max-w-xs my-4">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input 
                                type="password" 
                                value={password} 
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            
                         </label>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={isLogInForm?handleLogin:handleSignUp}>{isLogInForm?"Login":"Sign-Up"}</button>
                    </div>
                    <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLogInForm(value=>!value)}>{
                        isLogInForm? "Don't have an account, Signup Here": "Existing User? Login Here"}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;