export type Store = {
	id: string;
	name: string; // 店舗名（共通名）
	area: string; // エリアラベル（京都駅前／烏丸六角／四条烏丸）
	image: string;
	description: string;
	address: string;
	hours: string;
	tel: string;
	instagram?: string;
	hotpepper?: string;
};

export const STORES: Store[] = [
	{
		id: "kyo-eki",
		name: "蒸とアテふぅふぅ",
		area: "京都駅前",
		image: "/images/gallery-02.svg",
		description: "素材の旨味を活かす蒸しと旬のアテを京都駅前で。",
		address: "京都市下京区東塩小路町　607-10　サンプレ京都ビル2階",
		hours: "17:00–23:00",
		tel: "075-000-0000",
		instagram: "https://www.instagram.com/",
		hotpepper: "https://www.hotpepper.jp/strJ001266915/",
	},
	{
		id: "rokkaku",
		name: "蒸とアテふぅふぅ",
		area: "烏丸六角",
		image: "/images/gallery-02.svg",
		description: "街中の隠れ家で、蒸し×アテをゆったりと。",
		address: "京都市中京区堀之上町129-3階",
		hours: "17:00–23:00",
		tel: "075-000-0001",
		instagram: "https://www.instagram.com/",
		hotpepper: "https://www.hotpepper.jp/strJ004005465/",
	},
	{
		id: "shijo",
		name: "蒸とアテふぅふぅ",
		area: "四条烏丸",
		image: "/images/gallery-02.svg",
		description: "鉄板の香りと旬のアテ。四条烏丸ど真ん中。",
		address: "京都市中京区元法然寺町６８５ ウィステリアビル 2階",
		hours: "17:00–23:00",
		tel: "075-000-0002",
		instagram: "https://www.instagram.com/",
		hotpepper: "https://www.hotpepper.jp/strJ003873030/",
	},
];
