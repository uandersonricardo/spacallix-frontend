import api from "../services/api";
import { Launch } from "../types/launch";

const getNextLaunch = async () => {
  const { data } = await api.get<Launch>("/launches/next");

  return data;
};

export default getNextLaunch;
