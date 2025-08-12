import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "@/styles/globals.css";
import HeaderMobile from "@/components/header/HeaderMobile";
import Footer from "@/components/sections/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const sans = Noto_Sans_JP({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sans",
	display: "swap",
});

const serif = Noto_Serif_JP({
	subsets: ["latin"],
	weight: ["600"],
	variable: "--font-serif",
	display: "swap",
});

export const metadata: Metadata = {
	title: "五十棲 | 季節の料理とお酒",
};

type Props = { children: React.ReactNode };

const SiteLayout = ({ children }: Props) => {
	return (
		<div className={`${sans.variable} ${serif.variable}`}>
			<HeaderMobile />
			<main>
				<Sidebar />
				<div className="w-full lg:pl-[244px] xl:pl-[268px]">
					<div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-3 md:px-6">
						<div className="grid lg:grid-cols-[200px_32px_minmax(0,1fr)] xl:grid-cols-[200px_36px_minmax(0,1fr)] gap-4 xl:gap-6">
							{children}
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
};

export default SiteLayout;
