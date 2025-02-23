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

document.getElementById("view-profile").addEventListener("click", function () {
    alert("Redirecting to profile page...");
});

document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});

function updateMarketData() {
    const marketData = document.querySelector(".market-data");
    marketData.innerHTML = `
        <p>BTC/USD: $${(50000 + Math.random() * 5000).toFixed(2)} +53%</p>
        <p>BTC/AUD: $${(70000 + Math.random() * 5000).toFixed(2)} +40%</p>
        <p>BTC/XAU: $${(900 + Math.random() * 50).toFixed(2)}</p>
        <p>USD/AUD: $${(1.3 + Math.random() * 0.1).toFixed(2)}</p>
        <p>AUD/USD: $${(0.75 + Math.random() * 0.05).toFixed(2)}</p>
        <p>XAU/USD: $${(1900 + Math.random() * 100).toFixed(2)}</p>
    `;
}

setInterval(updateMarketData, 3000);

const helpButton = document.getElementById("help-button");
if (helpButton) {
    helpButton.addEventListener("click", function () {
        alert("Redirecting to How It Works page...");
    });
}

});

const ctx = document.getElementById("portfolioChart").getContext("2d");
new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Bitcoin", "Ethereum", "USDT"],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ["#f7931a", "#3c3c3d", "#26a17b"]
        }]
    }
});
