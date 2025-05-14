// const videoModal = document.getElementById("videoModal");
//       const youtubeVideo = document.getElementById("youtubeVideo");
    
//       const videoURL = "https://www.youtube.com/embed/NWHU8wKrhok?si=xmnG0vZKztiy2F5z";
    
//       videoModal.addEventListener("show.bs.modal", function () {
//         youtubeVideo.src = videoURL;
//       });
    
//       videoModal.addEventListener("hidden.bs.modal", function () {
//         youtubeVideo.src = "";
//       });


// video-modal.js

document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".video-modal");

  modals.forEach((modal) => {
    const youtubeFrame = modal.querySelector("iframe");
    const videoURL = modal.getAttribute("data-video-url");

    modal.addEventListener("show.bs.modal", function () {
      youtubeFrame.src = videoURL;
    });

    modal.addEventListener("hidden.bs.modal", function () {
      youtubeFrame.src = "";
    });
  });
});
