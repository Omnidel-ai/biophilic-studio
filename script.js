(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveals
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      if (el.closest(".hero")) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
  }

  // Lightbox
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  var lbImg = lb.querySelector("img");
  var closeBtn = lb.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lb.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".g-item").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = btn.getAttribute("data-full") || btn.querySelector("img").src;
      var alt = (btn.querySelector("img") || {}).alt || "";
      openLightbox(src, alt);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });
})();
