(() => {
  const iframe = document.querySelector("iframe");
  const player = new Vimeo.Player(iframe);

  player.getVideoTitle().then(function (title) {
    const h = document.getElementById('video-title');
    h.innerText = `${title}`;
    document.title = `${title} Embedded SEO Demo`;
  });
  
  // console.log(player);
})();