const videoModal = document.getElementById("videoModal");
      const youtubeVideo = document.getElementById("youtubeVideo");
    
      const videoURL = "https://www.youtube.com/embed/NWHU8wKrhok?si=xmnG0vZKztiy2F5z";
    
      videoModal.addEventListener("show.bs.modal", function () {
        youtubeVideo.src = videoURL;
      });
    
      videoModal.addEventListener("hidden.bs.modal", function () {
        youtubeVideo.src = "";
      });