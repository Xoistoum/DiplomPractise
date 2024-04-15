
function Marker({ map, coordinates, name }) {
  useEffect(() => {

    const placemark = new window.ymaps.Placemark(
      coordinates,
      { hintContent: name, balloonContent: name }
    );
    map.geoObjects.add(placemark);
    return () => {
      map.geoObjects.remove(placemark);
    };
  }, []);

  return null;
}

export default Marker;