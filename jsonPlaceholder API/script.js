
function getPosts(userId) {
    let request = new XMLHttpRequest()
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = JSON.parse(request.response)

            document.getElementById("posts").innerHTML = ""
            for (post of posts) {
                let content = `
            
                <div id="post">
                    <h2>${post.title}</h2>
                    <h4>${post.body}</h4>
                   
                </div>
       
                `
                document.getElementById("posts").innerHTML += content
            }

        }
        else {
            console.log("error");
        }
    }

}



function getUsers() {
   let  request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = JSON.parse(request.response)

            document.querySelector(".userContainer").innerHTML = ""
            for (user of users) {
                let content = `
            
                <div id="user"  onclick="userClicked(${user.id}, this)">
                        <h3>${user.name}</h3>
                        <h3>${user.email}</h3>
                </div>
       
                `
                document.querySelector(".userContainer").innerHTML += content
            }

        }
        else {
            console.log("error");
        }
    }

}
getPosts(1)
function userClicked(id , el){
    getPosts(id)
    let selectedEle = document.getElementsByClassName("selected")
    for(ele of selectedEle ){
        ele.classList.remove("selected")
    }
    el.classList.add("selected")
}

getUsers()
