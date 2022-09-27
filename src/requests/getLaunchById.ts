import api from "../services/api";
import { Launch } from "../types/launch";

const getLaunchById = async (id: string) => {
  const { data } = await api.get<Launch>(`/launches/${id}`);

  return data;
};

export default getLaunchById;
