const array = ["teste@gmail.com", "contato@google.com", "admin@outlook.com", "suporte@google.com"];

const emailsGoogle = array.filter((email) => email.includes("@google.com"));

console.log(emailsGoogle);