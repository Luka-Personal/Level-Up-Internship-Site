interface LeaderboardEntry {
  place: number;
  voucher: string;
  prize: string;
  icon?: string;
}

export interface LeaderboardData {
  [0]: {
    place: boolean;
    titleCustom: boolean;
  };
  [1]: LeaderboardEntry[];
}
