import { BASE_URL } from '../constants';
import type { MatchesResponse, SuccessfulResponse } from './types';

export const fetchMatches = async (): Promise<
  SuccessfulResponse<MatchesResponse>
> => {
  const response = await fetch(`${BASE_URL}/fronttemp`);
  return response.json();
};
