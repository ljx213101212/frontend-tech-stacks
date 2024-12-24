const postContainer = document.getElementById("post-container");
const loader = document.getElementById("loader");

// Simulate fetching posts from an API
let page = 1;
const fetchPosts = async () => {
  loader.style.display = "block";

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
  }));

  loader.style.display = "none";
  return posts;
};

// Render posts
const renderPosts = (posts) => {
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <div class="post-image"></div>
        <h2>${post.title}</h2>
      `;
    postContainer.appendChild(postElement);
  });
};

// Infinite scroll logic
const loadMorePosts = async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    page++;
    const posts = await fetchPosts();
    renderPosts(posts);
  }
};

// Load initial posts
const init = async () => {
  const posts = await fetchPosts();
  renderPosts(posts);
};

window.addEventListener("scroll", loadMorePosts);
window.addEventListener("DOMContentLoaded", init);
