import { useEffect, useState } from "react";
import { getWishListBooks } from "../utils/LocalStore";


const UseLocalWishListBook = () => {
    const [wishData, setWishData] = useState([]);
    useEffect(() => {
        setWishData(getWishListBooks());
    }, []);
    return {wishData};
};

export default UseLocalWishListBook;



