interface PokerDataItem {
  mainTitle: string;
  paragraph: string;
  paragraph2?: string;
  span?: string;
  diffIcon?: boolean;
}

export type PokerData = PokerDataItem[][];
