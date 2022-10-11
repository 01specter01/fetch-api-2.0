async function getEmails() {
    const response = await fetch("http://localhost:4000/emails");
    const emails = await response.json();
    console.log(emails);
}
getEmails();
