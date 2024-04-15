
function Route({ map, points }) {
  useEffect(() => {
    const buildRoute = () => {

      const multiRoute = new window.ymaps.multiRouter.MultiRoute(
        {
  
          referencePoints: points,
          params: {
            routingMode: 'auto'
          }
        },
        {
          boundsAutoApply: true
        }
      );
      map.geoObjects.add(multiRoute);
    };

    buildRoute();
  }, []);

  return null;
}

export default Route;