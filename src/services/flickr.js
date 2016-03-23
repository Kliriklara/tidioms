import { API_KEY_FLICKR } from '../../config';

const FLICKR_URL = 'https://api.flickr.com/services/rest/',
  FLICKR_METHOD = '?method=flickr.photos.search';

function getPicture(tag) {
  return fetch(`${FLICKR_URL}${FLICKR_METHOD}&per_page=1&api_key=${API_KEY_FLICKR}&tags=${tag}&format=json`)
  .then(response => response.text())
  .then(text => {
    // Remove the "jsonFlickrApi()" jsonp callback around the JSON ;(
    return text.substring( 14, text.length - 1 );
  })
  .then(JSON.parse)
  .then(json => {
    const { photos: { photo } = {} } = json;

    if (!photo) return null;

    const [ { id, secret, farm, server } ] = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
}

export { getPicture };
