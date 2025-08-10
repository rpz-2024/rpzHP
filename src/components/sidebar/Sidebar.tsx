"use client";
import SidePillNav from "@/components/ui/SidePillNav";

const Sidebar = () => {
	return (
		<aside
			className="hidden lg:flex fixed top-6 left-3 md:left-4 z-[80] w-[220px] xl:w-[240px] h-[calc(100vh-1.5rem)] flex-col gap-4 overflow-auto px-3"
			aria-label="サイドナビゲーション"
		>
			<SidePillNav />
		</aside>
	);
};

export default Sidebar;
