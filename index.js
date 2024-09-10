const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts-el")
let postsHTML = ""

for (i = 0; i < posts.length; i++) {
    postsHTML += `
        <div class="post-header">
            <img class="avatar" src=${posts[i].avatar}>
            <div>
                <div class="post-name">${posts[i].name}</div>
                <div class="post-location">${posts[i].location}</div>
            </div>
        </div>
        
        <img class="post" src="${posts[i].post}">
        <img class="icon" src="images/icon-heart.png">
        <img class="icon" src="images/icon-comment.png">
        <img class="icon" src="images/icon-dm.png">
        <p class="bold">${posts[i].likes} likes</p>
        <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
    `
    if (i != posts.length - 1) {
        postsHTML += '<div class="grey-space"></div>'
    }
}

postsEl.innerHTML = postsHTML
