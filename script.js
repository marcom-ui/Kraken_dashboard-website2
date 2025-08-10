function randomChange(value) {
    let change = (Math.random() - 0.5) * 200; // random between -100 and +100
    return (value + change).toFixed(2);
}

setInterval(() => {
    let btc = parseFloat(document.getElementById("btc").innerText.replace('$', ''));
    let eth = parseFloat(document.getElementById("eth").innerText.replace('$', ''));
    let xrp = parseFloat(document.getElementById("xrp").innerText.replace('$', ''));

    document.getElementById("btc").innerText = `$${randomChange(btc)}`;
    document.getElementById("eth").innerText = `$${randomChange(eth)}`;
    document.getElementById("xrp").innerText = `$${randomChange(xrp)}`;
}, 2000);