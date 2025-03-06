import { WEB_SOCKET_URL } from '@/constants';
import { type QueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Match, MatchesResponse, SuccessfulResponse, WSMatches } from './types';

interface WebSocketService {
  (
    onMessage?: (e: WSMatches) => void,
    onError?: (e: Event) => void,
    onClose?: (e: CloseEvent) => void
  ): boolean;
}

export const useWebSocket: WebSocketService = (
  onMessage = (e) => {
    console.log(e);
  },
  onError = (e) => {
    console.log(e);
  },
  onClose = (e) => {
    console.log(e);
  }
) => {
  const [isWebSocketConnected, setWebSocketConnected] = useState(false);

  const ws = useRef<WebSocket | null>(null);
  const reconnectIntervalRef = useRef(1000);

  const url = WEB_SOCKET_URL; // replace it with your URL

  const connectWebSocket = () => {
    try {
      // Create a WebSocket connection
      ws.current = new WebSocket(url);

      // WebSocket event listeners
      ws.current.onopen = (e) => {
        setWebSocketConnected(true);
        reconnectIntervalRef.current = 1000; // Reset reconnection interval on successful connection
      };

      ws.current.onmessage = (event) => {
        const wsData = event.data as string | undefined;
        wsData && onMessage(JSON.parse(wsData));
      };

      ws.current.onerror = (error) => {
        onError(error);
      };

      ws.current.onclose = (event) => {
        setWebSocketConnected(false);
        onClose(event);
        // Attempt to reconnect
        setTimeout(() => {
          reconnectIntervalRef.current = Math.min(
            reconnectIntervalRef.current * 2,
            30000
          ); // Exponential backoff, max 30 seconds
          connectWebSocket();
        }, reconnectIntervalRef.current);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectWebSocket();
    // Clean up WebSocket connection on component unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  return isWebSocketConnected;
};
