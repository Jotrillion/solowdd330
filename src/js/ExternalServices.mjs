
const baseURL = import.meta.env.VITE_SERVER_URL || "https://wdd330-backend.onrender.com/";

async function convertToJson(res) {
  const data = await res.json();
  if( !res.ok) {
    throw { name: 'servicesError', message: data };
  }
  return data;
}

export default class ExternalServices{
  constructor() {
    this.baseURL = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  }
  async getData(category) { 
    const response = await fetch(`${this.baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    //console.log(data.Result);
    return data.Result;
  }
  
  async findProductById(id) {
    
    const response = await fetch(`${this.baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result; 
  }

  async checkout(orderData) {
    const response = await fetch(`${this.baseURL}checkout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
    const data = await convertToJson(response);
    return data;
  }
}//end of class definition

