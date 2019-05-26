const input = document.querySelector("input");
const passwords = ['fiRsT', 'SeConD'];
const messages = ["works", "working"]

// const showMessage = (e) => {
//     passwords.forEach((item, i) => {
//         if (item.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()) {
//             document.querySelector('div').textContent = messages[i];
//         }
//     })
// }

//----------forEach()--------

// passwords.forEach((password, index) => {
//     passwords[index] = password.toLocaleLowerCase();
// })

// const showMessage = (e) => {
//     passwords.forEach((password, index) => {
//         const input = e.target.value
//         if (password === input) {
//             document.querySelector('div').textContent = messages[index];
//         }
//     })
// }

//-----------map()---------------

const lowerCasePasswords = passwords.map(password => password.toLocaleLowerCase()); // if written fat arrow in one line then it works like tith return. 
const showMessage = (event) => {
    lowerCasePasswords.forEach((item, index) => {
        if (item === event.target.value) {
            document.querySelector('div').textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage)