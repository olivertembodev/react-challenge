import Axios from "axios";

const api = Axios.create({
  baseURL: "http://a1227b11d75c94850b3a36b22f5e41e8-412576299.us-east-2.elb.amazonaws.com/",
  headers: { "Content-Type": "application/json" },
});

export default api;
