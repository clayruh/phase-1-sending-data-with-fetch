function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(response => response.json())
    .then(data => document.querySelector('body').append(data.id))
    .catch((error) => {
        document.querySelector('body').append(error.message)
    })
}

submitData("", "")

