var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WILAYAHKERJAPKMPS_3 = new ol.format.GeoJSON();
var features_WILAYAHKERJAPKMPS_3 = format_WILAYAHKERJAPKMPS_3.readFeatures(json_WILAYAHKERJAPKMPS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHKERJAPKMPS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHKERJAPKMPS_3.addFeatures(features_WILAYAHKERJAPKMPS_3);
var lyr_WILAYAHKERJAPKMPS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WILAYAHKERJAPKMPS_3, 
                style: style_WILAYAHKERJAPKMPS_3,
                popuplayertitle: "WILAYAH KERJA PKM PS",
                interactive: true,
                title: '<img src="styles/legend/WILAYAHKERJAPKMPS_3.png" /> WILAYAH KERJA PKM PS'
            });
var format_JENTIK_PSTG123_4 = new ol.format.GeoJSON();
var features_JENTIK_PSTG123_4 = format_JENTIK_PSTG123_4.readFeatures(json_JENTIK_PSTG123_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENTIK_PSTG123_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENTIK_PSTG123_4.addFeatures(features_JENTIK_PSTG123_4);
var lyr_JENTIK_PSTG123_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENTIK_PSTG123_4, 
                style: style_JENTIK_PSTG123_4,
                popuplayertitle: "JENTIK_PST G123",
                interactive: true,
    title: 'JENTIK_PST G123<br />\
    <img src="styles/legend/JENTIK_PSTG123_4_0.png" /> kali<br />\
    <img src="styles/legend/JENTIK_PSTG123_4_1.png" /> kolam_permanent<br />\
    <img src="styles/legend/JENTIK_PSTG123_4_2.png" /> kolam_sementara<br />\
    <img src="styles/legend/JENTIK_PSTG123_4_3.png" /> parit<br />'
        });
var group_KLUSTERIRS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "KLUSTER IRS"});
var group_KEPADATAN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "KEPADATAN"});
var group_KARAKTERISTIK = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "KARAKTERISTIK"});
var group_POSNEG = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "POS/NEG"});
var group_CITRASATELLITE = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_GoogleRoad_1,lyr_GoogleSatellite_2,lyr_WILAYAHKERJAPKMPS_3,],
                                fold: "open",
                                title: "CITRA SATELLITE"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_WILAYAHKERJAPKMPS_3.setVisible(true);lyr_JENTIK_PSTG123_4.setVisible(true);
var layersList = [group_CITRASATELLITE,lyr_JENTIK_PSTG123_4];
lyr_WILAYAHKERJAPKMPS_3.set('fieldAliases', {'id': 'id', 'Kelurahan': 'Kelurahan', 'Luas Wilay': 'Luas Wilay', 'luas_km2': 'luas_km2', 'km2': 'km2', 'meter pers': 'meter pers', });
lyr_JENTIK_PSTG123_4.set('fieldAliases', {'No': 'No', 'group_loka': 'group_loka', 'group_lo_1': 'group_lo_1', 'group_lo_2': 'group_lo_2', 'identitas_': 'identitas_', 'identita_1': 'identita_1', 'identita_2': 'identita_2', 'perindukan': 'perindukan', 'perinduk_1': 'perinduk_1', 'perinduk_2': 'perinduk_2', 'perinduk_3': 'perinduk_3', 'perinduk_4': 'perinduk_4', 'kepadatan_': 'kepadatan_', 'padat/kura': 'padat/kura', 'perinduk_5': 'perinduk_5', 'perinduk_6': 'perinduk_6', 'perinduk_7': 'perinduk_7', 'perinduk_8': 'perinduk_8', 'perinduk_9': 'perinduk_9', 'perinduk10': 'perinduk10', 'perinduk11': 'perinduk11', 'perinduk12': 'perinduk12', 'perinduk13': 'perinduk13', 'perinduk14': 'perinduk14', 'perinduk15': 'perinduk15', 'perinduk16': 'perinduk16', 'perinduk17': 'perinduk17', 'perinduk18': 'perinduk18', });
lyr_WILAYAHKERJAPKMPS_3.set('fieldImages', {'id': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas Wilay': 'TextEdit', 'luas_km2': 'TextEdit', 'km2': 'TextEdit', 'meter pers': 'TextEdit', });
lyr_JENTIK_PSTG123_4.set('fieldImages', {'No': 'TextEdit', 'group_loka': 'DateTime', 'group_lo_1': 'TextEdit', 'group_lo_2': 'TextEdit', 'identitas_': 'TextEdit', 'identita_1': 'TextEdit', 'identita_2': 'TextEdit', 'perindukan': 'TextEdit', 'perinduk_1': 'TextEdit', 'perinduk_2': 'TextEdit', 'perinduk_3': 'TextEdit', 'perinduk_4': 'TextEdit', 'kepadatan_': 'TextEdit', 'padat/kura': 'TextEdit', 'perinduk_5': 'TextEdit', 'perinduk_6': 'TextEdit', 'perinduk_7': 'TextEdit', 'perinduk_8': 'TextEdit', 'perinduk_9': 'TextEdit', 'perinduk10': 'TextEdit', 'perinduk11': 'TextEdit', 'perinduk12': 'TextEdit', 'perinduk13': 'TextEdit', 'perinduk14': 'TextEdit', 'perinduk15': 'TextEdit', 'perinduk16': 'TextEdit', 'perinduk17': 'TextEdit', 'perinduk18': 'TextEdit', });
lyr_WILAYAHKERJAPKMPS_3.set('fieldLabels', {'id': 'no label', 'Kelurahan': 'no label', 'Luas Wilay': 'no label', 'luas_km2': 'no label', 'km2': 'no label', 'meter pers': 'no label', });
lyr_JENTIK_PSTG123_4.set('fieldLabels', {'No': 'inline label - always visible', 'group_loka': 'no label', 'group_lo_1': 'no label', 'group_lo_2': 'no label', 'identitas_': 'no label', 'identita_1': 'no label', 'identita_2': 'no label', 'perindukan': 'no label', 'perinduk_1': 'no label', 'perinduk_2': 'no label', 'perinduk_3': 'no label', 'perinduk_4': 'no label', 'kepadatan_': 'no label', 'padat/kura': 'no label', 'perinduk_5': 'no label', 'perinduk_6': 'no label', 'perinduk_7': 'no label', 'perinduk_8': 'no label', 'perinduk_9': 'no label', 'perinduk10': 'no label', 'perinduk11': 'no label', 'perinduk12': 'no label', 'perinduk13': 'no label', 'perinduk14': 'no label', 'perinduk15': 'no label', 'perinduk16': 'no label', 'perinduk17': 'no label', 'perinduk18': 'no label', });
lyr_JENTIK_PSTG123_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});