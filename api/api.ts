import { type QueryClient } from '@tanstack/react-query';
import { BASE_URL, DATA_KEYS, WEB_SOCKET_URL } from '../constants';
import type { MatchesResponse, SuccessfulResponse } from './types';
import { useEffect } from 'react';

export const fetchMatches = async (): Promise<
  SuccessfulResponse<MatchesResponse>
> => {
  const response = await fetch(`${BASE_URL}/fronttemp`);
  return response.json();
};

export const useWebSocket = (queryClient: QueryClient) => {
  useEffect(() => {
    const socket = new WebSocket(`ws://echo.websocket.org`); // Replace with your WebSocket URL

    socket.onmessage = (event) => {
      console.log('event', event);

      const newData = JSON.parse(event.data);
      queryClient.setQueryData<SuccessfulResponse<MatchesResponse>>(
        [DATA_KEYS.MATCHES],
        (oldData) => ({
          ...oldData,
          ...newData,
        })
      );
    };

    return () => {
      socket.close();
    };
  }, [queryClient]);
};
