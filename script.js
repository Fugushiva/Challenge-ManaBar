window.addEventListener("load", (e) => {
  const receptacle = document.getElementById("receptacle");
  const barre = document.getElementById("barre");
  const pourcentage = document.getElementById("pourcentage");
  let computedStyle = window.getComputedStyle(barre, null);

  receptacle.addEventListener("mouseover", (e) => {
    barre.style.transitionProperty = "width";
    barre.style.transitionDuration = "3s";
    barre.style.width = "100%";
  });

  receptacle.addEventListener("mouseleave", (e) => {
    barre.style.transitionProperty = "width";
    barre.style.transitionDuration = "3s";
    barre.style.width = "0%";
  });
});
