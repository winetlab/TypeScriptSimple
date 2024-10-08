import * as crypto from 'crypto';

// Hardcoded credentials (Sensitive data exposure)
const hardcodedPassword = 'supersecret';

// Simulate a database query with SQL injection vulnerability
export async function login(username: string, password: string): Promise<boolean> {
    // Vulnerable to SQL injection
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

    console.log(`Executing query: ${query}`);

    // Simulate a weak encryption scheme
    const encryptedPassword = weakEncrypt(password);

    return username === 'admin' && password === hardcodedPassword;
}

// Weak encryption (uses ECB mode, which is insecure)
function weakEncrypt(data: string): string {
    const cipher = crypto.createCipheriv('aes-128-ecb', 'key1234567890123', null);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Insecure deserialization (could lead to remote code execution)
export function deserialize(data: string): any {
    return JSON.parse(data);  // Insecure: assumes the input is safe
}
