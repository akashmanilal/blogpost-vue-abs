/**
* Build the query parameter URL
*
* @param params
* @return {string}
* @private
*/
export function _paramsToQueryString (params) {
 const esc = encodeURIComponent;

 return Object.keys(params)
   .map(k => `${esc(k)}=${esc(params[k])}`)
   .join('&');
}
