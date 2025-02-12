import ky from "ky";
import { env } from "../env";

const kyServer = ky.create({
  prefixUrl: env.JWT_SECRET,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});

export default kyServer;
