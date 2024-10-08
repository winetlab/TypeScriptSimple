import { login } from './auth';

// Simulate login request with unsafe input
const username = process.argv[2];  // insecure: allows SQL injection
const password = process.argv[3];

login(username, password).then(result => {
    if (result) {
        console.log("Login successful!");
    } else {
        console.log("Login failed!");
    }
}).catch(err => {
    console.error("Error during login:", err);
});
