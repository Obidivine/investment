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

document.addEventListener("DOMContentLoaded", function () {
    // Check if the canvas exists to prevent errors
    const canvas = document.getElementById("portfolioChart");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        // Create Portfolio Chart
        new Chart(ctx, {
            type: "pie", // Pie chart type
            data: {
                labels: ["Bitcoin-60%", "Ethereum-25%", "USDT-10%", "BNB-5%"],
                datasets: [{
                    data: [60, 25, 10, 5], // Example allocation in percentage
                    backgroundColor: ["#f7931a", "#3c3c3d", "#26a17b", "#f3ba2f"]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});