var roi = ee.FeatureCollection("projects/ee-learning-rahi/assets/BGD_adm3");
var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")

var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
          .filterBounds(upzla)
          .filterDate('2021-01-01', '2021-12-31')
          .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
          //.first()
print(s2,"s2")
var img = ee.Image("COPERNICUS/S2_SR_HARMONIZED/20210101T043151_20210101T043436_T46RCN")
var nir = img.select("B8")
var swir = img.select("B11")
var red = img.select("B4")
var blue = img.select("B2")
//print(swir)
//print(nir)
//print(red)
//print(blue)

var ndsi = swir.add(red).subtract(nir.add(blue)).divide(swir.add(red).add(nir.add(blue))).rename("NDSI")
var vizParam = {
  min: -1,
  max: 1,
  palette: ["blue","cyan","yellow","green",]
}
Map.addLayer(ndsi.clip(upzla),vizParam,"NDSI")