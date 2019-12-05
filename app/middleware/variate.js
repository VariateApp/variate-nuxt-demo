export default function ({ app: { $variate }, route }) {
  if($variate) {
    $variate.initialize({
      view: route,
      targeting: {
        country: 'Canada',
        state: 'BC',
      }
    });
  }
};

