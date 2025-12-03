import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Requests = () => {
    const requests = useSelector((store)=>store.request);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const reviewRequest = async (status, _id) => {
        try{
            const res = axios.post(API_BASE_URL + "/request/review/"+status+"/"+_id,{},{withCredentials:true});
            dispatch(removeRequest(_id));
        }catch(err){
            if(err.status == 401)navigate("/login");
            console.log("Error fetching user data", err);
        }
    }

    const fetchRequests = async() =>{
        try{

            const res = await axios.get(API_BASE_URL + "/user/requests/received", {withCredentials:true});
            dispatch(addRequests(res?.data?.data));
        }catch(err){
            if(err.status == 401)navigate("/login");
            console.log("Error fetching user data", err);
        }
    }
    useEffect(()=>{
        fetchRequests();
    },[])

    if(!requests)return;
    if(requests.length === 0)return <h2 className="flex justify-center my-10">No Request found</h2>
    return(
        <div className="text-center my-10">
            <h1 className="text-bold text-3xl">Requests</h1>
            {requests.map((request)=>{
                
                return(
                    <div key={request.fromUserId._id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-3/4 mx-auto">
                        <div>
                            <img alt="image"  className="w-20 h-20 rounded-full"  src= {request.fromUserId.photoUrl}/>
                        </div>
                        <div className="text-left mx-4 ">    
                            <h2 className="font-bold text-xl">{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h2>
                            {request.fromUserId.age && request.fromUserId.gender && <p>{request.fromUserId.age + ", " + request.fromUserId.gender}</p>}
                            <p>{request.fromUserId.about}</p>
                        </div>    
                       <div>
                            <button className="btn btn-primary mx-2" onClick={()=>reviewRequest("rejected",request._id)}>Ignore</button>
                            <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest("accepted", request._id)}>Connect</button>
                       </div>
                    </div>
                )

            })}
        </div>
    );
}
export default Requests;