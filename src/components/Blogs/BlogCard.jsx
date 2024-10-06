/* eslint-disable react/prop-types */


const BlogCard = ({ blog }) => {
    return (
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
            <div className="overflow-hidden">
                <img
                    src={blog.img}
                    alt=""
                    className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
            </div>
            <div className="flex items-center justify-between pt-2 text-slate-600 text-sm">
                <p>{blog.date}</p>
                <p className="line-clamp-1">{blog.writer}</p>
            </div>
            <div className="space-y-3 py-3">
                <h2 className="line-clamp-1 font-bold">{blog.title}</h2>
                <p className="line-clamp-2 text-sm">{blog.description}</p>
            </div>
        </div>
    );
}

export default BlogCard;
