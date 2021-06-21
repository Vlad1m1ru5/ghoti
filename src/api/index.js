import axios from "axios";

export default class Api {
  async fetchConfig() {
    const { data } = await axios.get("config.json");
    return data;
  }
}
