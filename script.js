function updateStreak() {
  let startDate = localStorage.getItem("nofap_start");
  if (!startDate) {
    startDate = new Date().toISOString();
    localStorage.setItem("nofap_start", startDate);
  }

  let diffTime = Math.abs(new Date() - new Date(startDate));
  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let points = days * 10;
  
  // Total 10 Ranks Logic
  let rank = "Beginner 🥉";

  if (days >= 360) {
    rank = "10. Legend 👑";
  } else if (days >= 190) {
    rank = "9. Grandmaster ⚡";
  } else if (days >= 100) {
    rank = "8. Titan 🛡️";
  } else if (days >= 60) {
    rank = "7. Diamond 💎";
  } else if (days >= 30) {
    rank = "6. Platinum 🏆";
  } else if (days >= 21) {
    rank = "5. Gold 🥇";
  } else if (days >= 14) {
    rank = "4. Warrior ⚔️";
  } else if (days >= 10) {
    rank = "3. Fighter 🥊";
  } else if (days >= 7) {
    rank = "2. Silver 🥈";
  } else if (days >= 3) {
    rank = "1. Bronze 🥉";
  }

  document.getElementById("daysCount").innerText = days;
  document.getElementById("userPoints").innerText = points;
  document.getElementById("userRank").innerText = rank;
}

function resetStreak() {
  if (confirm("Are you sure you want to reset your streak?")) {
    localStorage.setItem("nofap_start", new Date().toISOString());
    updateStreak();
  }
}

updateStreak();
