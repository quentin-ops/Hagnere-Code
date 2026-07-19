interface FunnelAnalyticsDataset {
  writeDataPoint(point: {
    indexes?: string[];
    blobs?: string[];
    doubles?: number[];
  }): void;
}

declare global {
  interface CloudflareEnv {
    FUNNEL_ANALYTICS?: FunnelAnalyticsDataset;
  }
}

export {};
