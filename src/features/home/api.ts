import callApi from 'services/apiService'

export const getData = () => {
  return callApi({
    url: `/checkPhoneMale`,
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data: {
      phone: '0387233858'
    }
  });
};