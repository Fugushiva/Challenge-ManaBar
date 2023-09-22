window.addEventListener("load", (e) => {
  const receptacle = document.getElementById("receptacle");
  const barre = document.getElementById("barre");
  const divPourcentage = document.getElementById("pourcentage");
  let pourcentage = 0;

  receptacle.addEventListener("mouseover", (e) => {
    barre.style.transitionProperty = "width";
    barre.style.transitionDuration = "12s";
    barre.style.width = "100%";

    setInterval(() => {
      const barreWidth = barre.offsetWidth;
      const receptacleWidth = receptacle.offsetWidth;
      pourcentage = Math.round((barreWidth / receptacleWidth) * 100);
      divPourcentage.innerHTML = pourcentage + "%";
    }, 50);
  });

  receptacle.addEventListener("mouseleave", (e) => {
    barre.style.transitionProperty = "width";
    barre.style.transitionDuration = "3s";
    barre.style.width = "0%";
  });
});
