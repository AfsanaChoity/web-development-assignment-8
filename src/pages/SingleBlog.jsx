import { useLoaderData } from "react-router-dom";


const SingleBlog = () => {
    const blog = useLoaderData();
    const {comment_count, title, 
        reading_time_minutes, public_reactions_count } = blog;
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
                    <div className="flex items-center md:space-x-2">
                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300" />
                        <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                </div>
            </div>
            <div className="text-gray-100 dark:text-gray-800">
                <p>Insert the actual text content here...</p>
            </div>
        </article>
        <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#MambaUI</a>
                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#TailwindCSS</a>
                <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#Angular</a>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-semibold">Related posts</h4>
                <ul className="ml-4 space-y-1 list-disc">
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default SingleBlog;