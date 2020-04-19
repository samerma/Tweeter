const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

// add post
const post = function () {
    inp = $("#input").val()
    if (inp) {
        tweeter.addPost(inp)
        renderer.renderPosts(tweeter.getPosts())
        $("#input").val('')
    }
    else {
        alert("Write something first")
    }
}

//delete post
$("#posts").on("click", ".delete", function () {
    tweeter.removePost($(this).closest(".post").data("id"))
    renderer.renderPosts(tweeter.getPosts())
})


//add comment
$("#posts").on("click", ".post-comment", function () {
    commentInput = $(this).closest(".post").find(".comment-input").val()
    postId = $(this).closest(".post").data("id")
    if (commentInput) {
        tweeter.addComment(commentInput, postId)
        renderer.renderPosts(tweeter.getPosts())
    }
    else {
        alert("Write some comment first!")
    }

})

//delete comment
$("#posts").on("click", ".delete-comment", function () {
    const curPostId = $(this).closest(".post").data("id")
    const commentId = $(this).closest(".comment").data("id")
    tweeter.removeComment(curPostId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})