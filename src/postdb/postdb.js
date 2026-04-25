const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js and how to create your first app.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description:
      "A simple guide to useState, useEffect, and other React hooks.",
  },
  {
    id: 3,
    title: "Styling with Tailwind CSS",
    description:
      "How to quickly design modern UI using Tailwind CSS utility classes.",
  },
  {
    id: 4,
    title: "Building REST APIs",
    description:
      "An introduction to creating RESTful APIs with Node.js and Express.",
  },
  {
    id: 5,
    title: "Authentication Basics",
    description:
      "Learn how authentication works and how to implement it in web apps.",
  },
];

export const getPosts = async () => {
  return posts;
};

export const sendPost = async (newPost) => {
  newPost.id = posts.length + 1;
  posts.push(newPost);

  return { ok: true, message: "New Post Added Successfully" };
};
