import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";


const UserCard = ({user}) =>{
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try{
            const res = await axios.post(API_BASE_URL+"/request/send/"+ status+"/"+userId, {}, {withCredentials:true});
            dispatch(removeUserFromFeed(userId));
        }catch(err){
            if(err.status == 401)navigate("/login");
            console.log("Error fetching user data", err);
        }
    }
    
    
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                src={user.photoUrl}
                alt="Profile Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName + "" + user.lastName}</h2>
                {user && <p>{(user.age ? user.age : "") + ", " + (user.gender ? user.gender : "")}</p>}
                <p>{user.about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" onClick={()=>handleSendRequest("interested",user._id)}>Interested</button>
                    <button className="btn btn-secondary" onClick={()=>handleSendRequest("ignore",user._id)}>Ignore</button>
                </div>
            </div>
        </div>
    );
}
export default UserCard;