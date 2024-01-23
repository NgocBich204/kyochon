<script>
  var map = new OpenLayers.Map("map");
  var mapnik = new OpenLayers.Layer.OSM();

  map.addLayer(mapnik);
  map.setCenter(new OpenLayers.LonLat(0, 0), 2);
</script>