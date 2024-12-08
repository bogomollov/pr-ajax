document.getElementById('getMessage').addEventListener('click', () => {
    fetch('/api/message')
    .then(res => res.json())
    .then(data => {
        document.getElementById('output').innerText = `${data.message}
        Время: ${data.datetime}`;
    })
    .catch(error => console.error('Ошибка:', error));
})

document.getElementById('echoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('inputText').value;
    fetch('/api/echo', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('echoOutput').innerText = `${data.echo}
        Время: ${data.datetime}`;
    })
})

document.getElementById('mathForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const math = +document.getElementById('mathText').value;
    const math2 = +document.getElementById('math2Text').value;
    fetch('/api/math', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ math, math2 }),
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('mathOutput').innerText = data.message;
    })
})