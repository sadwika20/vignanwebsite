const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const images = document.querySelectorAll(".gallery-img");
let currentIndex = 0;

// Show modal with selected image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Navigation
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
};

// Close modal when clicking outside image
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
