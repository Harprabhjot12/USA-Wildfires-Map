require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "adae9ce02b2646d98e57f5985e1bf04a"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  window.view = view;
});
document.getElementById("clickButton").addEventListener("click", () => {
  if (window.view) {
    alert("Zooming to California Wildfire Region ");
    window.view.goTo({
      center: [-119.4179, 36.7783],
      zoom: 6
    });
  } else {
    alert("Map is still loading. Try again in a moment!");
  }
});
