import express from 'express';
import morgan from 'morgan';
import * as trpcExpress from '@trpc/server/adapters/express';
import {router, createContext} from './trpc'
import {foodRouter} from './routes/food'

const app = express();

const appRouter = router({
    food: foodRouter,
})
app.use(morgan('dev'));

app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
})
);
export type AppRouter =  typeof appRouter

export default app;