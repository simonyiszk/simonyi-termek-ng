import { createTRPCRouter } from "~/server/api/trpc";
import { resourceRouter } from "./routers/resource";
import { eventRouter } from "./routers/event";
import { rentalRouter } from "./routers/rental";
import { renterAccountRouter } from "./routers/renterAccount";
import { resourceGroupRouter } from "./routers/resourceGroup";
import { resourceTypeRouter } from "./routers/resourceType";
import { rentableGroupRouter } from "./routers/rentableGroup";
import { rentingRouter } from "./routers/renting";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  event: eventRouter,
  rentableGroup: rentableGroupRouter,
  rental: rentalRouter,
  renterAccount: renterAccountRouter,
  resource: resourceRouter,
  resourceGroup: resourceGroupRouter,
  resourceType: resourceTypeRouter,
  renting: rentingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
