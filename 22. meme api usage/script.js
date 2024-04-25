let isLoading = false;
let after = '';

function fetchMemes() {
    if (isLoading) {
        return;
    }

    isLoading = true;

    fetch(`https://www.reddit.com/r/dankmemes/hot/.json?after=${after}&limit=10`)
        .then(response => response.json())
        .then(data => {
            after = data.data.after;
            const container = document.getElementById('container');

            data.data.children.forEach(post => {
                if (post.data.url_overridden_by_dest && post.data.url_overridden_by_dest.match(/\.(jpg|png|gif)$/)) {
                    const image = document.createElement('img');
                    image.src = post.data.url_overridden_by_dest;
                    container.appendChild(image);
                }
            });

            isLoading = false;
        })
        .catch(error => {
            console.error('Error fetching memes:', error);
            isLoading = false;
        });
}

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchMemes();
    }
}

document.addEventListener('DOMContentLoaded', fetchMemes);
window.addEventListener('scroll', checkScroll);
