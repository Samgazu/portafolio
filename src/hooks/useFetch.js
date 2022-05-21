import request from '../utils/request';

export function getViewPdf(quoteID) {
  return function (dispatch, getState) {
      return request({
          partialUrl: `/API/Quotation/GetQuotationPDF?id=${quoteID}`,
          method: 'GET',
          state: getState().user.request,
          body:{}
      })
      .then(response => response.json())
      .then(data => {
          window.open(`https://sandbox1.tsi.mx/API/${data.response}`);
      })
      .catch(err => {
          return (err)
      });
  }
}


