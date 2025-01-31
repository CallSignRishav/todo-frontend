import ky from "ky";

const kyClient = ky.create({
  prefixUrl: "http://localhost:8055",
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});

export default kyClient;
