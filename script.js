document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const processor = document.getElementById('processor').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;
    const gpu = document.getElementById('gpu').value;
    const quantity = document.getElementById('quantity').value;

    const summary = `
        Processor: ${processor}<br>
        RAM: ${ram}<br>
        Storage: ${storage}<br>
        Graphics Card: ${gpu}<br>
        Quantity: ${quantity}
    `;

    document.getElementById('summary').innerHTML = summary;
    document.getElementById('confirmation').style.display = 'block';
});
