import {publicProcedure, router} from '../trpc'

const getFood = publicProcedure.query(()=>{
    return {hello: 'world'}
})

export const foodRouter = router({
    get: getFood
})