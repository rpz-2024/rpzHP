export type KvItem = { label: string; value: string };

export type HistoryItem = {
  year: string;
  month?: string;
  text: string;
};

export type CompanyContent = {
  title: string;
  lead?: string;
  profileTitle: string;
  profile: KvItem[];
  historyTitle?: string;
  history?: HistoryItem[];
};