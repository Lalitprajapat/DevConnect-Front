import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
    const requests = useSelector((store)=>store.requests);
    const dispatch = useDispatch();
    const fetchRequests = async() =>{
        try{

            const res = await axios.get(API_BASE_URL + "/user/requests/received", {withCredentials:true});
            dispatch(addRequests(res.data.data));
        }catch(err){

        }
    }
    useEffect(()=>{
        fetchRequests();
    },[])

    if(!requests)return;
    if(requests.length === 0)return <h2>No Request found</h2>
    return(
        <div className="text-center my-10">
            <h1 className="text-bold text-3xl">Requests</h1>
            {requests.map((request)=>{
                
                return(
                    <div key={request.fromUserId._id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
                        <div>
                            <img alt="image"  className="w-20 h-20 rounded-full"  src= {request.fromUserId.photoUrl}/>
                        </div>
                        <div className="text-left mx-4 ">    
                            <h2 className="font-bold text-xl">{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h2>
                            {request.fromUserId.age && request.fromUserId.gender && <p>{request.fromUserId.age + ", " + request.fromUserId.gender}</p>}
                            <p>{request.fromUserId.about}</p>
                        </div>    
                       <div>
                            <button className="btn btn-primary mx-2">Ignore</button>
                            <button className="btn btn-secondary mx-2">Connect</button>
                       </div>
                    </div>
                )

            })}
        </div>
    );
}
export default Requests;