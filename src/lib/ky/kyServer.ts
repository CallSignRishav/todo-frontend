import ky from "ky";

const kyServer = ky.create({
  prefixUrl: "127.0.0.1:8055",
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});

export default kyServer;
