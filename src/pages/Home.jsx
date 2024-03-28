import { Link } from "react-router-dom";


import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
    const books = useLoaderData();
    console.log(books);


    return (
        <div>
            <section className="bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 mx-20 mt-8 rounded-lg">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="hero  bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse  lg:py-5  ">
                            <img src={books[0].image} className="max-w-sm rounded-lg shadow-2xl   h-60 lg:ml-20" />
                            <div className=" lg:mr-20">
                                <h1 className=" text-3xl lg:text-5xl font-bold text-black lg:w-[526px]">Books to freshen up your bookshelf</h1>
                                
                                <Link to='/listedBooks' className="btn btn-primary text-white bg-green-600 border-none my-4 lg:mt-10">View The List</Link>
                            </div>
                        </div>
                    </div>


                    

                </div>
            </section>

            <h2 className="text-[40px] font-bold text-center mt-20 mb-10">Books</h2>

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-20">


                        {
                           
                            books.map((book) => (
                                <BookCard book={book} key={book.bookId}></BookCard>
                            ))
                        }



                    </div>
        </div>

        
    );
};

export default Home;