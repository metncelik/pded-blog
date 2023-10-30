import { useParams } from "react-router-dom";

const Blog = () => {
    const { blogID } = useParams()
    return (
        <footer>
            <p>
                Blog ID: {blogID}
            </p>
        </footer>
    );
}

export default Blog;