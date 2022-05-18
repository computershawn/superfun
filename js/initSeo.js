(() => {
  const metadata = {
    thumbnailUrl:
      "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1430785835-10fc63c6afd15dad094efc3ec0cdcd8096b1f2dc87b24bf3b2fc21adabfb6146-d_1280x720&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png",
    embedUrl: "https://player.vimeo.com/video/709239537?h=5cd05de0f1",
    name: "Super Fun Video SEO Test Case",
    description:
      "This is a film about stuff. But if you look beneath the surface, you&#039;ll realize that it&#039;s also about things.",
    uploadDate: "2022-05-12T16:00:48-04:00",
    duration: "PT00H03M00S",
    hasPart: [
      {
        "@type": "Clip",
        name: "Things Begin",
        startOffset: 30,
        endOffset: 90,
        url: "https://test-embedded-video-seo-v1.glitch.me?vimeo_t_709239537=30",
      },
      {
        "@type": "Clip",
        name: "Right Now Something Happens",
        startOffset: 90,
        endOffset: 150,
        url: "https://test-embedded-video-seo-v1.glitch.me?vimeo_t_709239537=90",
      },
      {
        "@type": "Clip",
        name: "Then, Finally, a Resolution",
        startOffset: 150,
        endOffset: 180,
        url: "https://test-embedded-video-seo-v1.glitch.me?vimeo_t_709239537=150",
      },
    ],
    "@type": "VideoObject",
    "@context": "http://schema.org",
  };

  const structuredDataRawText = JSON.stringify(metadata);
  const scriptElem = document.createElement('script');
  scriptElem.setAttribute('type', 'application/ld+json');
  scriptElem.textContent = structuredDataRawText;
  document.head.appendChild(scriptElem);
})();
