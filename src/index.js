import AMapLoader from "@amap/amap-jsapi-loader";

AMapLoader.load({
  //首次调用 load
  key: "dd0a7a79b96543f94563c879d4bcc1b4",
  version: "2.0"
})
  .then((AMap) => {
    debugger;
    new AMap.Map("amap", {
      center: [116.397428, 39.90923],
      zoom: 11
    });
  })
  .catch((e) => {
    console.error(e);
  });
