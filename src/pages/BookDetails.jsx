import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookDetails = () => {
    const book = useLoaderData();
    

    
    

    const [clicked, setClicked] = useState(false);
    const [wishclicked, setWishClicked] = useState(false);


    const handleRead = () => {
        if(!clicked){
            
            setClicked(true);
            toast('Added to Read-list');
            
        localStorage.setItem('readlistBooks', JSON.stringify(book));
        }
        else {
            toast('Already added to Read-list');
        }
        
 };
 

    const handleWishlist = () => {
        if(!clicked && !wishclicked){
            
            setClicked(true);
            setWishClicked(true);
            toast('Added to Wishlist');
            
        localStorage.setItem('wishlistBooks', JSON.stringify(book));
        }
        else if(clicked) {
            toast('Already added to Read-list');
        }
        else
        {
            toast('Already added to Wishlist');
        }

       
    }


    return (
        <div>
            <section className="mx-20 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-gray-100 rounded-lg">
                        <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  p-10 lg:px-20 " />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl  font-bold leading-none ">{book.bookName}
                        </h1>
                        <p className="text-black mt-5 text-xs font-medium">By : {book.author}</p>
                        <hr className="my-3" />
                        <p className="text-black  text-xs font-medium"> {book.category}</p>
                        <hr className="my-3" />


                        <p className="mt-6 mb-8 text-[16px]"><span className="font-bold">Review: </span>{book.review}
                        </p>

                        <div className="flex gap-10 text-[16px]  items-center">
                            <p className="font-bold">Tag</p>
                            <p className="text-[#23BE0A] bg-gray-100 rounded-full py-1 px-4">{book.tags[0]}</p>
                            <p className="text-[#23BE0A] bg-gray-100 rounded-full py-1 px-4">{book.tags[1]}</p>
                        </div>
                        <hr className="my-5" />

                        <div className="flex justify-between text-[16px] text-[#131313] mb-4">
                            <p className="opacity-70">Number of pages:</p>
                            <p className="font-bold ">{book.totalPages}</p>
                        </div>
                        <div className="flex justify-between text-[16px] text-[#131313] mb-4">
                            <p className="opacity-70">Publisher:</p>
                            <p className="font-bold ">{book.publisher}</p>
                        </div>
                        <div className="flex justify-between text-[16px] text-[#131313] mb-4">
                            <p className="opacity-70">Year of Publishing:</p>
                            <p className="font-bold ">{book.yearOfPublishing}</p>
                        </div>
                        <div className="flex justify-between text-[16px] text-[#131313] mb-5">
                            <p className="opacity-70">Rating:</p>
                            <p className="font-bold ">{book.rating}</p>
                        </div>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800" onClick={handleRead}>Read</a>

                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50" onClick={handleWishlist}>Wishlist</a>
                            <ToastContainer></ToastContainer>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;