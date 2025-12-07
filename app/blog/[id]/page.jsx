"use client"
import { useParams, useRouter } from "next/navigation";
import blogData from '@/components/data/blog-data';
import BlogDetails from '@/components/pages/blogs/blog-details';

const BlogDetail = () => {
    const params = useParams();
    const singleData = blogData?.find((blog) => blog.id === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }
    return (
        <>
            <BlogDetails singleData={singleData} />
        </>
    );
};

export default BlogDetail;