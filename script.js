const validUsername = "osama";
const validPassword = "123";

const authenticateUser = (username, password)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === validUsername && password === validPassword) {
                resolve("Login successful! Welcome, " + username);
            } else {
                reject("Invalid username or password. Please try again.");
            }
        }, 1000);
    });
}

document.querySelector("form").addEventListener("submit",  (event)=> {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const messageParagraph = document.getElementById("message");

    authenticateUser(username, password)
        .then((message) => {
            messageParagraph.textContent = message;
            messageParagraph.classList.add("accepted");
        })
        .catch((error) => {
            messageParagraph.textContent = error;
            messageParagraph.classList.add("rejected");
        }).finally(()=>{
            setTimeout(()=> {
                messageParagraph.textContent= "";
                event.target.reset();
            },5000);
        });
});
