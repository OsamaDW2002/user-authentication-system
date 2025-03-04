const validUsername = "osama";
const validPassword = "123";

function authenticateUser(username, password) {
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

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    const messageParagraph = document.getElementById("message");

    authenticateUser(username, password)
        .then((message) => {
            messageParagraph.textContent = message;
            messageParagraph.style.color = "green";
        })
        .catch((error) => {
            messageParagraph.textContent = error;
            messageParagraph.style.color = "red";
        }).finally(()=>{
            setTimeout(()=> {
                messageParagraph.textContent= "";
            },5000);
        });
});
