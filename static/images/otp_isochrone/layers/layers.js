var wms_layers = [];


        var lyr_StamenTonerBasemap_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
            })
        });
var format_Fade_box_1 = new ol.format.GeoJSON();
var features_Fade_box_1 = format_Fade_box_1.readFeatures(json_Fade_box_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fade_box_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fade_box_1.addFeatures(features_Fade_box_1);
var lyr_Fade_box_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fade_box_1, 
                style: style_Fade_box_1,
                interactive: false,
                title: '<img src="styles/legend/Fade_box_1.png" /> Fade_box'
            });
var format_MartaTrainAlignment_2 = new ol.format.GeoJSON();
var features_MartaTrainAlignment_2 = format_MartaTrainAlignment_2.readFeatures(json_MartaTrainAlignment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MartaTrainAlignment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MartaTrainAlignment_2.addFeatures(features_MartaTrainAlignment_2);
var lyr_MartaTrainAlignment_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MartaTrainAlignment_2, 
                style: style_MartaTrainAlignment_2,
                interactive: false,
    title: 'Marta Train Alignment<br />\
    <img src="styles/legend/MartaTrainAlignment_2_0.png" /> 0075B2<br />\
    <img src="styles/legend/MartaTrainAlignment_2_1.png" /> 009D4B<br />\
    <img src="styles/legend/MartaTrainAlignment_2_2.png" /> CE242B<br />\
    <img src="styles/legend/MartaTrainAlignment_2_3.png" /> D4A723<br />\
    <img src="styles/legend/MartaTrainAlignment_2_4.png" /> <br />'
        });
var format_QuarterMileBuffer_3 = new ol.format.GeoJSON();
var features_QuarterMileBuffer_3 = format_QuarterMileBuffer_3.readFeatures(json_QuarterMileBuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuarterMileBuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuarterMileBuffer_3.addFeatures(features_QuarterMileBuffer_3);
var lyr_QuarterMileBuffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuarterMileBuffer_3, 
                style: style_QuarterMileBuffer_3,
                interactive: false,
                title: '<img src="styles/legend/QuarterMileBuffer_3.png" /> Quarter Mile Buffer'
            });
var format_OTPIsochrone_4 = new ol.format.GeoJSON();
var features_OTPIsochrone_4 = format_OTPIsochrone_4.readFeatures(json_OTPIsochrone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTPIsochrone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTPIsochrone_4.addFeatures(features_OTPIsochrone_4);
var lyr_OTPIsochrone_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTPIsochrone_4, 
                style: style_OTPIsochrone_4,
                interactive: true,
    title: 'OTP Isochrone<br />\
    <img src="styles/legend/OTPIsochrone_4_0.png" /> 2.3 - 15.6<br />\
    <img src="styles/legend/OTPIsochrone_4_1.png" /> 15.6 - 22.5<br />\
    <img src="styles/legend/OTPIsochrone_4_2.png" /> 22.5 - 25.5<br />\
    <img src="styles/legend/OTPIsochrone_4_3.png" /> 25.5 - 28.1<br />\
    <img src="styles/legend/OTPIsochrone_4_4.png" /> 28.1 - 68.2<br />'
        });
var format_TrainStations_5 = new ol.format.GeoJSON();
var features_TrainStations_5 = format_TrainStations_5.readFeatures(json_TrainStations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainStations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrainStations_5.addFeatures(features_TrainStations_5);
var lyr_TrainStations_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrainStations_5, 
                style: style_TrainStations_5,
                interactive: false,
                title: '<img src="styles/legend/TrainStations_5.png" /> Train Stations'
            });

lyr_StamenTonerBasemap_0.setVisible(true);lyr_Fade_box_1.setVisible(true);lyr_MartaTrainAlignment_2.setVisible(true);lyr_QuarterMileBuffer_3.setVisible(true);lyr_OTPIsochrone_4.setVisible(true);lyr_TrainStations_5.setVisible(true);
var layersList = [lyr_StamenTonerBasemap_0,lyr_Fade_box_1,lyr_MartaTrainAlignment_2,lyr_QuarterMileBuffer_3,lyr_OTPIsochrone_4,lyr_TrainStations_5];
lyr_Fade_box_1.set('fieldAliases', {'id': 'id', });
lyr_MartaTrainAlignment_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shape_id': 'shape_id', 'route_id': 'route_id', 'route_shor': 'route_shor', 'route_long': 'route_long', 'route_desc': 'route_desc', 'route_type': 'route_type', 'route_url': 'route_url', 'route_colo': 'route_colo', 'route_text': 'route_text', 'route_ty_1': 'route_ty_1', 'Shape__Len': 'Shape__Len', });
lyr_QuarterMileBuffer_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATION': 'STATION', 'Stn_Code': 'Stn_Code', 'Stn_Site': 'Stn_Site', 'Extrude': 'Extrude', 'GlobalID': 'GlobalID', 'last_edite': 'last_edite', });
lyr_OTPIsochrone_4.set('fieldAliases', {'time': 'time', 'STATION': 'STATION', 'shed_acre': 'shed_acre', 'percentage': 'percentage', 'rank': 'rank', });
lyr_TrainStations_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATION': 'STATION', 'Stn_Code': 'Stn_Code', 'Stn_Site': 'Stn_Site', 'Extrude': 'Extrude', 'GlobalID': 'GlobalID', 'last_edite': 'last_edite', });
lyr_Fade_box_1.set('fieldImages', {'id': 'TextEdit', });
lyr_MartaTrainAlignment_2.set('fieldImages', {'OBJECTID': 'Range', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'route_shor': 'TextEdit', 'route_long': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'TextEdit', 'route_url': 'TextEdit', 'route_colo': 'TextEdit', 'route_text': 'TextEdit', 'route_ty_1': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_QuarterMileBuffer_3.set('fieldImages', {'OBJECTID': 'Range', 'STATION': 'TextEdit', 'Stn_Code': 'TextEdit', 'Stn_Site': 'TextEdit', 'Extrude': 'Range', 'GlobalID': 'TextEdit', 'last_edite': 'TextEdit', });
lyr_OTPIsochrone_4.set('fieldImages', {'time': 'Range', 'STATION': 'TextEdit', 'shed_acre': 'TextEdit', 'percentage': 'TextEdit', 'rank': 'TextEdit', });
lyr_TrainStations_5.set('fieldImages', {'OBJECTID': 'Range', 'STATION': 'TextEdit', 'Stn_Code': 'TextEdit', 'Stn_Site': 'TextEdit', 'Extrude': 'Range', 'GlobalID': 'TextEdit', 'last_edite': 'TextEdit', });
lyr_Fade_box_1.set('fieldLabels', {'id': 'no label', });
lyr_MartaTrainAlignment_2.set('fieldLabels', {'OBJECTID': 'no label', 'shape_id': 'header label', 'route_id': 'no label', 'route_shor': 'inline label', 'route_long': 'inline label', 'route_desc': 'no label', 'route_type': 'no label', 'route_url': 'no label', 'route_colo': 'no label', 'route_text': 'inline label', 'route_ty_1': 'no label', 'Shape__Len': 'no label', });
lyr_QuarterMileBuffer_3.set('fieldLabels', {'OBJECTID': 'no label', 'STATION': 'no label', 'Stn_Code': 'no label', 'Stn_Site': 'no label', 'Extrude': 'no label', 'GlobalID': 'no label', 'last_edite': 'no label', });
lyr_OTPIsochrone_4.set('fieldLabels', {'time': 'header label', 'STATION': 'header label', 'shed_acre': 'header label', 'percentage': 'header label', 'rank': 'header label', });
lyr_TrainStations_5.set('fieldLabels', {'OBJECTID': 'no label', 'STATION': 'header label', 'Stn_Code': 'no label', 'Stn_Site': 'no label', 'Extrude': 'no label', 'GlobalID': 'no label', 'last_edite': 'no label', });
lyr_TrainStations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});