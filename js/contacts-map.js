let map;

async function initMap() {
    const position = {lat: 48.463, lng: 35.071};
    const {Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement, PinElement} = await google.maps.importLibrary("marker");
    const customGlyph = document.createElement("img");
    customGlyph.src = "../img/index-contacts/custom-glyph.png";
    customGlyph.className = "custom-glyph";
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h4 id="firstHeading" class="firstHeading">Центральний парк культури <br>' +
        'та відпочинку імені <br>Тараса Шевченка</h4>' +
        '<div id="bodyContent">' +
        "<p> <strong>Україна</strong> Дніпро, пл. Шевченка, 1</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Dnipro",
    });

    map = new Map(document.getElementById("contacts-map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
        disableDefaultUI: true,
    });
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        content: customGlyph,
        gmpClickable: true,
    });
    infoWindow.open({
        anchor: marker,
        map,
    });
    marker.element.addEventListener("click", () => {
        infoWindow.open({
            anchor: marker,
            map,
        });
    });
    console.log(customGlyph);
}

initMap();