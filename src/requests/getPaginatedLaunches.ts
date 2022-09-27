import api from "../services/api";
import { LaunchSummary } from "../types/launch";

interface GetPaginatedLaunchesParams {
  perPage?: number;
  page?: number;
  upcoming?: boolean;
}

interface GetPaginatedLaunchesResponse {
  items: LaunchSummary[];
  perPage: number;
  page: number;
  pageCount: number;
  total: number;
}

const getPaginatedLaunches = async (params: GetPaginatedLaunchesParams) => {
  const { data } = await api.get<GetPaginatedLaunchesResponse>("/launches", {
    params
  });

  return data;
};

export default getPaginatedLaunches;
