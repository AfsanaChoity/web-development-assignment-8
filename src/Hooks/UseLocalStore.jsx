import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/LocalStore";


const UseLocalStore = () => {
    const [localData, setLocalData] = useState([]);
    
    useEffect(() => {
        setLocalData(getReadBooks());
    }, []);

    return { localData };
};

export default UseLocalStore;