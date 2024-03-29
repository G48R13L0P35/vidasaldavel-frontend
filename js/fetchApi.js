document.getElementById('send').addEventListener('click', sendDataToServer);

export async function sendDataToServer(e) {
    e.preventDefault();

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('mensagem').value;

    if (!name ||!email) {
        alert('Preencha o Nome e Email');
        return;
    }

    const data = {
        name,
        email,
        text
    }
    await fetch(`https://vidasaldavel-api.onrender.com/post/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    location.reload()
}