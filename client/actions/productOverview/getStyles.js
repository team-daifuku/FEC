import axios from 'axios';
import currentStyleAction from './currentStyle.js';
import allStylesAction from './allStyles.js';
import { previewListLastAction } from './previewList.js';


const getStyles = (productID) => {
  return (dispatch) => {
    return axios.get('http://3.21.164.220/products/' + productID + '/styles')
    .then(({data}) => {
      dispatch(allStylesAction(data.results));
      dispatch(previewListLastAction(data.results[0].photos.length - 1))
      dispatch(currentStyleAction(data.results[0]));

    })
    .catch((err) => {
      console.log("Error fetching style! Error: ", err);
    })
  }
}

export default getStyles;