import blog from "@/assets/blogs/blog.jpg";
const Blog = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={blog}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute md:top-64 top-48 xl:left-[40%] lg:left-[32%] md:left-[30%] left-[15%]">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">BLOGS</h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
