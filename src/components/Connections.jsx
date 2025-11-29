import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {

    const connections = useSelector((store)=>store.connections);
    const dispatch = useDispatch();
    const fetchConnections = async () => {
        try{
            const res = await axios.get(API_BASE_URL+"/user/connections",{withCredentials:true});
            // console.log(res,data.data);
            dispatch(addConnections(res?.data?.data))
        }catch(err){

        }
    };
    useEffect(()=>{
        fetchConnections();
    },[]);

    if(!connections)return;
    if(connections.length === 0)return <h2>No Connections found</h2>
    return(
        <div  className="text-center my-10">
            <h1 className="text-bold text-3xl">Connections</h1>
            {connections.map((connection)=>{
                
                return(
                    <div key={connection._id} className="flex m-4 p-4 rounded-lg bg-base-300 max-w-0.5 mx-auto">
                        <div>
                            <img alt="image"  className="w-20 h-20 rounded-full "  src= {connection.photoUrl}/>
                        </div>
                        <div className="text-left mx-4 ">    
                            <h2 className="font-bold text-xl">{connection.firstName + " " + connection.lastName}</h2>
                            {connection.age && connection.gender && <p>{connection.age + ", " + connection.gender}</p>}
                            <p>{connection.about}</p>
                        </div>  
                      
                    </div>
                )

            })}
        </div>
    );
};
export default Connections;