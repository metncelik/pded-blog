import { useNavigate } from "react-router-dom";

const BlogCard = ({ blogID,blogTitle, blogPreview }) => {
    const navigate = useNavigate()
    return (
        <li className="blog-card" onClick={()=>navigate(`/blog/${blogID}`)}>
            <h3 className="title">
                {blogTitle}
            </h3>
            <p className="preview">
                {blogPreview}
            </p>
        </li>
    );
}

export default BlogCard;