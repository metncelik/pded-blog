import BlogCard from "../components/BlogCard";

const Home = () => {
    const blogs = [
        {
            id: 213214321,
            title: "Blog Title 1",
            preview: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur soluta placeat dolore vero fugiat nostrum, illo officiis distinctio quod voluptas cum, sapiente a iusto provident nemo quasi id quibusdam pariatur."
        },
        {
            id: 213214322,
            title: "Blog Title 2",
            preview: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur soluta placeat dolore vero fugiat nostrum, illo officiis distinctio quod voluptas cum, sapiente a iusto provident nemo quasi id quibusdam pariatur."
        }
    ]
    return (
        <ul className="blog-list">
            {blogs.map(blog =>
                <BlogCard
                    blogID={blog.id}
                    blogTitle={blog.title}
                    blogPreview={blog.preview}
                />
            )
            }
        </ul>
    );
}

export default Home;