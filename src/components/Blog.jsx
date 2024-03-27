import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'

const Blog = ({blog}) => {
    console.log(blog);
    const {cover_image, title, description, published_at, id} = blog;
    return (
        <div className="transition border-2 border-primary hover:scale-105 hover:border-secondary border-opacity-30">
            <Link to={`/blog/${id}`}
            className="max-w-sm mx-auto group  hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                                <span className="text-xs text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                                <p>{description}</p>
                            </div>
                        </Link>
        </div>
    );
};

export default Blog;