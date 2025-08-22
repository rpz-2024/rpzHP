import { StoresList } from "@/components";

export default function Page() {
	return (
		<main className="min-h-[60vh] grid place-items-center py-16">
			<div className="text-center">
				<StoresList />
			</div>
		</main>
	);
}
