const button = document.querySelector(".button");

function createPost() {
  const userTitle = document.getElementById("title").value;
  const userText = document.getElementById("text").value;

  const post = {
    title: userTitle,
    body: userText,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      const postContainer = document.querySelector(".post-container");
      const newTitle = document.createElement("h3");
      const newText = document.createElement("p");
      newTitle.innerHTML = data.title;
      newText.innerHTML = data.body;
      postContainer.appendChild(newTitle);
      postContainer.appendChild(newText);

      document.getElementById("title").value = "";
      document.getElementById("text").value = "";
    })
    .catch((err) => {
      const newPostContainer = document.createElement("div");
      newPostContainer.innerHTML = "Error occured";
    });
}

button.addEventListener("click", createPost);
