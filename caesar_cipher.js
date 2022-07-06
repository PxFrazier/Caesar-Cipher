class Caesar_Cipher
{
    constructor(){}

    encrypt(key, input_string)
    {
        let encrypted_string = [];
        let input = input_string.split('');

        input.forEach(entry => {
            let num = entry.charCodeAt(0);
            num += key;
            let str_val = String.fromCharCode(num);
            encrypted_string.push(str_val);
        });

        encrypted_string = encrypted_string.join('');
        return encrypted_string;
    }

    decrypt(key, input_string)
    {
        let decrypted_string = [];
        let input = input_string.split('');

        input.forEach(entry => {
            let num = entry.charCodeAt(0);
            num -= key;
            let str_val = String.fromCharCode(num);
            decrypted_string.push(str_val);
        });

        decrypted_string = decrypted_string.join('');
        return decrypted_string;
    }
}

let unencrypted_string = "Why would I tell you?";
let key = 5;

const cipher = new Caesar_Cipher();

let encrypted_string = cipher.encrypt(key, unencrypted_string);

console.log(`Input: ${unencrypted_string}\nOutput: ${cipher.encrypt(key, unencrypted_string)}`);
console.log(`Input: ${encrypted_string}\nOutput: ${cipher.decrypt(key, encrypted_string)}`);