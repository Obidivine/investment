document.addEventListener("DOMContentLoaded", function () { const username = localStorage.getItem("username"); const usernameSpan = document.getElementById("username");

if (username) {
    usernameSpan.textContent = username;
} else {
    usernameSpan.textContent = "User";
}

});

function goToDashboard() { window.location.href = "dashboard.html"; }

