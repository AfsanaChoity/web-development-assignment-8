import { NavLink } from "react-router-dom";
import UseLocalStore from "../Hooks/UseLocalStore";
import ReadBook from "../components/ReadBook";
// import WishListBook from "../components/WishListBook";





const ListedBooks = () => {
    const {localData} = UseLocalStore();
    
    
    return (
        <div className="mx-20 mt-6">
            <div className="bg-gray-100 rounded-lg text-center">
                <h2 className="py-5 text-black font-bold text-[28px]">Books</h2>
                

            </div>
            <div className="text-center mt-6">
            <button className="btn btn-success text-white bg-green-500 text-center">Sort By</button>

            </div>

            <div className="flex gap-6 mb-4 mt-6 items-center">
            <NavLink  to='/listedBooks' className={({ isActive }) => isActive && ' border rounded-lg p-2 bg-orange-200  text-orange-700'}>Read Books</NavLink>
            <NavLink  to= '/wishlist' className={({ isActive }) => isActive && ' border rounded-lg p-2 bg-orange-200  text-orange-700'}>Wishlist</NavLink>
           
            </div>
            {
                localData.map((data) => (
                    <ReadBook key={data.bookId} data={data}></ReadBook>
                ))

                


            }
            


        </div>
    );
};

export default ListedBooks;