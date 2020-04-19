const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            const postContainer = createPostContainer(post)
            $("#posts").append(postContainer)
        }
    }

    return {
        renderPosts
    }
}

const createPostContainer = function (post) {
    const postContainer = $(`<div class="post" data-id=${post.id}></div>`)
    const postText = $(`<div class="postText">${post.text}</div>`)
    const comments = $('<div class="comments"></div>')
    for (let comment of post.comments) {
        comments.append(
            `<div class="comment" data-id=${comment.id}>
             <span class="delete-comment">x</span>${comment.text}
             </div>`)
    }
    postContainer.append(postText)
    postContainer.append(comments)
    postContainer.append(`<div>
        <input type="text" placeholder="Write a comment" class="comment-input">
        <div class="post-comment">Reply</div>
    </div>`)
    postContainer.append($('<button class="delete">Delete Post</button>'))
    return postContainer
}

