import { useState, useEffect } from "react";

interface NetworkStatus {
  online: boolean;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

/**
 * Hook to detect network status and adapt resource loading
 */
export const useNetworkStatus = (): NetworkStatus => {
  const [status, setStatus] = useState<NetworkStatus>({
    online: typeof navigator !== 'undefined' ? navigator.onLine : true,
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      setStatus({
        online: navigator.onLine,
        effectiveType: connection?.effectiveType,
        downlink: connection?.downlink,
        rtt: connection?.rtt,
        saveData: connection?.saveData,
      });
    };

    updateNetworkStatus();

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      connection.addEventListener('change', updateNetworkStatus);
    }

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      if (connection) {
        connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  return status;
};

/**
 * Check if user has a slow connection
 */
export const useSlowConnection = (): boolean => {
  const { effectiveType, saveData } = useNetworkStatus();
  return saveData || effectiveType === 'slow-2g' || effectiveType === '2g';
};

/**
 * Adapt quality based on network speed
 */
export const useAdaptiveQuality = () => {
  const isSlowConnection = useSlowConnection();
  
  return {
    imageQuality: isSlowConnection ? 'low' : 'high',
    enableVideos: !isSlowConnection,
    enableAnimations: !isSlowConnection,
  };
};
