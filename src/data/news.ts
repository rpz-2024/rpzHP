export type NewsItem = {
	id: string;
	title: string;
	body?: string;
	date?: string;
};
export const NEWS: NewsItem[] = [
	{ id: "headline", title: "会社沿革" },
	{ id: "y2024", title: "2024年" },
	{ id: "2024-04-01", title: "4月：株式会社RPZ設立" },
	{ id: "2024-04-02", title: "4月：蒸とアテふぅふぅ京都駅前店運営開始" },
	{ id: "2024-09-01", title: "9月：鉄板とアテふぅふぅ四条烏丸店オープン" },
	{ id: "2024-10-01", title: "10月：蒸とアテふぅふぅ東岡崎店（FC）オープン" },
	{ id: "y2025", title: "2025年" },
	{ id: "2025-03-01", title: "3月：蒸とアテふぅふぅ烏丸六角店オープン" },
];
