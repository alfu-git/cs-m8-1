import AddPostModal from "@/components/posts/AddPostModal";
import { getPosts } from "@/postdb/postdb";
import React from "react";

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <section className="my-10">
      <div>
        <h2 className="mb-7 text-3xl font-medium text-center">All Posts</h2>

        <div className="mb-5 flex justify-center">
          <AddPostModal />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded-xl shadow">
              <h3 className="mb-4 text-xl font-bold text-green-400">
                {post.title}
              </h3>
              <p className="text-zinc-300">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
