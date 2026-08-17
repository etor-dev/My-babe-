 const notes = {
  1: {
    title: "Why I Love You ❤️",
    content: "1. You make me laugh even on bad days.<br>2. Your smile instantly lights up my room.<br>3. You are endlessly kind, smart, and caring.<br><br>I appreciate everything you do!"
  },
  2: {
    title: "Our Special Memories 🌟",
    content: "From our first conversation to our late-night talks, every moment with you is my favorite. Thank you for making life such a fun adventure! With your UNEXPLAINABLE LOVE back by GOD'S ULTIMATE LOVE"
  },
  3: {
    title: "Redeemable Coupons 🎟️",
    content: "✨ <b>Coupon 1:</b> One Late-Night Ice Cream Run<br>✨ <b>Coupon 2:</b> You Pick the Next Movie<br>✨ <b>Coupon 3:</b> Spending little time in person<br><br><i>(Valid forever!)</i>"
  }
};

function openNote(id) {
  const modal = document.getElementById("noteModal");
  const modalBody = document.getElementById("modalBody");
  const note = notes[id];

  modalBody.innerHTML = `
    <h2 style="color: #ff75a0; margin-bottom: 15px;">${note.title}</h2>
    <p style="line-height: 1.6;">${note.content}</p>
  `;
  modal.style.display = "flex";
}

function closeNote() {
  document.getElementById("noteModal").style.display = "none";
}

// Close modal if clicked outside of content
window.onclick = function(event) {
  const modal = document.getElementById("noteModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function calculateLove() {
  const result = document.getElementById("loveResult");
  result.style.opacity = "0";
  setTimeout(() => {
    result.innerHTML = "Result: ∞% (Infinite Love!) 🚀💖";
    result.style.opacity = "1";
    result.style.transition = "opacity 0.5s ease";
  }, 300);
}