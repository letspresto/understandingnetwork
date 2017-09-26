function initialize() {
    // map settings
    var mapOptions = {
        center: new google.maps.LatLng(40.7317,-73.9885),
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.ROAD
    };
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    
    // route
    var lineCordinates = [
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(38.9268,-76.7118),
        new google.maps.LatLng(41.677,-73.8619),
        new google.maps.LatLng(41.677,-73.8619),
        new google.maps.LatLng(37.4192,-122.0574),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(35.4198,-80.6748),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(38.9266,-77.3936),
        new google.maps.LatLng(40.7317,-73.9885),
        new google.maps.LatLng(37.4192,-122.0574),
        new google.maps.LatLng(26.937,-80.135)
        ];
    
        var lineCordinates2 = [
            new google.maps.LatLng(41.8843,-73.7488),
            new google.maps.LatLng(0,0),
            new google.maps.LatLng(40.7873,-73.8113),
            new google.maps.LatLng(0,0),
            new google.maps.LatLng(40.7405,-73.484),
            new google.maps.LatLng(40.7405,-73.484),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(39.0438,-77.4874),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(37.4192,-122.0574),
            new google.maps.LatLng(37.4192,-122.0574)
            ];
    
    // symbol
    var arrow = {
        //icon: 'https://cdn.iconscout.com/public/images/icon/free/png-512/spiderman-marvel-super-hero-earth-saver-avenger-31c6edd44f500aed-512x512.png',
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        //path: google.maps.SymbolPath.CIRCLE,
        rotation: 0,
        strokeColor: '#ff0000'
    };

    // path setting
    var linePath = new google.maps.Polyline({
        path: lineCordinates,
        geodesic: true,
        scale: 1.5,
        strokeColor: '#000000',
        strokeOpacity: 0.6,
        strokeWeight: 4,
        icons: [{
            icon: arrow,
            offset: '100%'
        }],
        map: map
    });

    var linePath2 = new google.maps.Polyline({
        path: lineCordinates2,
        geodesic: true,
        scale: 1.5,
        strokeColor: '#fff',
        strokeOpacity: 0.6,
        strokeWeight: 4,
        icons: [{
            icon: arrow,
            offset: '100%'
        }],
        map: map
    });
    
   lineAnimation(linePath);
   lineAnimation(linePath2);
    
   // animation
   function lineAnimation(path) {
	var count = 0;
	setInterval(function() {
		count = (count + 1) % 300;
		var icons = path.get('icons');
		icons[0].offset = (count / 3) + '%';
		path.set('icons', icons);
	}, 20);
}
    
    
}
    // load map
	google.maps.event.addDomListener(window, 'load', initialize);   