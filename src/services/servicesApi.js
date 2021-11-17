import axios from "axios";

const API_BASE_URL = "https://6195170f74c1bd00176c6b65.mockapi.io/api/v1/items";

class itemsService {
  getItems() {
    return axios.get(API_BASE_URL);
  }
  createItem(item) {
    return axios.post(API_BASE_URL, item);
  }
  deleteItem(id) {
    return axios.delete(API_BASE_URL + "/" + id);
  }
}

export default new itemsService();
