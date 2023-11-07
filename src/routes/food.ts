import {publicProcedure, router} from '../trpc'
import {z} from 'zod'

const getFood = publicProcedure.query(()=>{
    return [{
        id: 1,
        title: 'Nombre titulo',
        description: 'descripcion de titulo, esto es para prueba'
    }]
})
const createFood = publicProcedure.input(z.object({
    title: z.string(),
    description: z.string()
})).
mutation(({input})=>{
/*     return {
        id: 1,
        title: input.title,
        description: input.description
    } */

    console.log(input)
    return "recibido"

})

export const foodRouter = router({
    create: createFood,
    get: getFood,
})