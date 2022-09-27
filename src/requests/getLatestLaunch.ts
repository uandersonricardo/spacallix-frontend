import api from "../services/api";
import { Launch } from "../types/launch";

const getLatestLaunch = async () => {
  const { data } = await api.get<Launch>("/launches/latest");

  return data;
};

export default getLatestLaunch;
