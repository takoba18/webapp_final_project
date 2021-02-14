import {Database} from "./database.js"
export	
const forumContent =`
<div id="forum">
		<div id="user_container" class="container">
			<input type="text" id="username" placeholder="what's your name?">
		</div>
		<div id="post_container" class="container">
			<textarea id="post_text"  placeholder="hey, what's up?"></textarea>
			<button id="new_post">post</button>
		</div>
		<div class="container">
            Posts
			<div id="posts">

			</div>
		</div>
	</div> `;
    var posts = new Database('posts')
    function displayAllPosts() {
        var allPosts = posts.getAll()
        for (let post of allPosts) {
            var elem = createPost(post)
            addNewPost(elem)
        }
        return allPosts
    }
    
    displayAllPosts()
    
    function newPost() {
        var post = posts.create({
            text: getPostText(),
            user: getUser(),
            date:new Date()
        })
        if(post.text!=''){
        var elem = createPost(post)
        addNewPost(elem,post.id)}
    }
    
    
    function getPostText() {
        var postInputElement = document.getElementById('post_text')
        return postInputElement.value
    }
    
    function getUser() {
        return localStorage.getItem('currentUser') || 'unknown user'
    }
    
    function setUser(username) {
        localStorage.setItem('currentUser', username)
        document.getElementById('username').value = username
    }
    
    
    
    function createPost(post) {
        return `
            <div id="post-${post.id}" class="post container">
                <div class="post_title">
                    ${post.user}
                </div>
                <div class="post_text">
                    ${post.text}
                </div>
                <div class="post_date" >
                    ${new Date(post.date).getDate()}
                </div>
            </div>
        `
    }
    function addNewPost(elem,postId) {
        var posts = document.getElementById('posts')
        var post = document.createElement('div')
        post.innerHTML = elem
        posts.insertAdjacentElement('afterbegin', post)
        document.getElementById('post_text').value=''
    }
    function buttonListener(){
        document.getElementById("new_post").addEventListener("click",newPost)
    }
    export function forumPage(){
        buttonListener();

    }
    
    