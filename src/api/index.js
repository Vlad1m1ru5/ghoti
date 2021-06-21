import axios from "axios";

export default class Api {
  constructor(config) {
    this.config = config;
    this.fetchConfig = this.fetchConfig.bind(this);
  }

  async fetchConfig() {
    const { data } = await axios.get(this.config);
    return data;
  }
}
