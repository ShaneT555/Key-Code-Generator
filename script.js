const keyInfo = document.getElementById('keyInfo');

document.addEventListener('keydown', (event) => {
    const { key, code } = event;
    const charCode = key.charCodeAt(0);

    keyInfo.innerHTML = `
        Key: ${key} | Code: ${code} | Character Code: ${charCode}
    `;
});

