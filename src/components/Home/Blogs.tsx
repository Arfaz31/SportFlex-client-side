import SmBlogs from "../shared/ResponsiveBlogs/SmBlogs";
import XlBlogs from "../shared/ResponsiveBlogs/XlBlogs";

const Blogs = () => {
  return (
    <div>
      <div className="md:block hidden">
        <XlBlogs />
      </div>
      <div className="md:hidden block">
        <SmBlogs />
      </div>
    </div>
  );
};

export default Blogs;
