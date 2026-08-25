import { createFerry } from "@jeremy46231/ferry";

const ferry = createFerry({ basePath: "/api/submit" });

export default {
	async fetch(request: Request): Promise<Response> {
		return (
			(await ferry.handle(request)) ??
			new Response("Not found", { status: 404 })
		);
	},
};
