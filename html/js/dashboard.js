document.addEventListener("DOMContentLoaded", function () { const username = localStorage.getItem("username") || "User"; const btcAddress = localStorage.getItem("btcAddress") || "Not Available"; const balance = localStorage.getItem("balance") || "$0.00";

document.getElementById("username").textContent = username;
document.getElementById("btc-address").textContent = btcAddress;
document.getElementById("balance").textContent = balance;

document.getElementById("deposit").addEventListener("click", function () {
    alert("Redirecting to deposit page...");
});

document.getElementById("withdraw").addEventListener("click", function () {
    alert("Redirecting to withdraw page...");
});

// Simulating market data updates
function updateMarketData() {
    const marketData = document.querySelector(".market-data");
    marketData.innerHTML = `<p>BTC/USD: $${(50000 + Math.random() * 5000).toFixed(2)}</p>`;
}

setInterval(updateMarketData, 3000);

});

