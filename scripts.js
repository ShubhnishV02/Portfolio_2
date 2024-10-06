
document.addEventListener('DOMContentLoaded', function () {
    const postsPerPage = 2; // Set how many posts you want per page
    const blogPosts = document.querySelectorAll('.blog-page-post-box'); // Get all blog posts
    const totalPosts = blogPosts.length; // Total number of posts
    const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages
    let currentPage = 1;

    const pageInfo = document.getElementById('page-info');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Function to show the correct set of blog posts
    function showPage(page) {
        blogPosts.forEach((post, index) => {
            post.style.display = 'none'; // Hide all posts
            if (index >= (page - 1) * postsPerPage && index < page * postsPerPage) {
                post.style.display = 'block'; // Show posts for the current page
            }
        });

        pageInfo.textContent = `Page ${page} of ${totalPages}`;

        // Disable/enable prev/next buttons
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }

    // Pagination controls
    prevBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial page load
    showPage(currentPage);
});



// Blog Search
function filterBlogs() {
    let input = document.getElementById('blogSearchInput').value.toLowerCase();
    let blogPosts = document.getElementsByClassName('blog-page-post-box');

    for (let i = 0; i < blogPosts.length; i++) {
        let title = blogPosts[i].getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            blogPosts[i].style.display = "";
        } else {
            blogPosts[i].style.display = "none";
        }
    }
}
