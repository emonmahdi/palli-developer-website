const images = [
    "assets/images/gallery/g1.avif",
    "assets/images/gallery/g2.avif",
    "assets/images/gallery/g3.avif",
    "assets/images/gallery/g4.avif",
    "assets/images/gallery/g5.avif",
    "assets/images/gallery/g6.avif",
  ];

  let currentIndex = 0;

  const modal = document.getElementById("imageModal");
  const popupImage = document.getElementById("popupImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  document.querySelectorAll(".overlay").forEach((el) => {
    el.addEventListener("click", (e) => {
      currentIndex = parseInt(e.currentTarget.getAttribute("data-index"));
      popupImage.src = images[currentIndex];
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImage.src = images[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    popupImage.src = images[currentIndex];
  });

  // Optional: close modal on click outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });