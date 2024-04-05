First I filtered out Moulvibazar sadar upazila from administrative border shape file. Then from Sentinel-2 imagery I filtered by date('2021-01-01', '2021-12-31'), upazila boundary and cloud cover. Then I extract a image and use the formula to calculate normalized index of soil and add a new layer to visualize it.

[NDSI Moulvibazar Sadar Upazila Image](https://github.com/AtikulRahi/ndsiUpazila/blob/main/moulviBazarNDSI.JPG)

[NDSI Moulvibazar Sadar Upazila Code](https://github.com/AtikulRahi/ndsiUpazila/blob/main/ndsiUpazila.js)

[NDSI Moulvibazar Sadar Upazila GEE Code link](https://code.earthengine.google.com/c46b47c1b79d57caa5c85e0837aeeb9a)
