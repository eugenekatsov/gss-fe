export const getRequest = (mthd, data) => {
    data.id = parseInt(data.id);
    
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let request = {
      method: mthd,
      headers: headers,
      redirect: 'follow'
    };

    if (mthd == 'GET') return request
    
    request.body = JSON.stringify(data);

    return request;
  };
