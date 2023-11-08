import { publicProcedure, router } from '../trpc'
import { z } from 'zod'
import Food from '../models/food'

const getFood = publicProcedure.query(async () => {
    const foods = await Food.find()
    return foods
});
const createFood = publicProcedure.input(z.object({
    title: z.string(),
    description: z.string()
})).
    mutation(async ({ input }) => {
        const newFood = new Food({
            title: input.title,
            description: input.description,

        })
        const saveFood = await newFood.save()
        return saveFood;
    });
const deleteFood = publicProcedure.input(z.string()).mutation(async ({ input }) => {
    const foodFound = await Food.findByIdAndRemove(input)
    if (!foodFound) {
        throw new Error('No such food found');
    }
    return true;
});
const toggleDone = publicProcedure.input(z.string()).mutation(async ({ input }) => {
    try {
        const foundFood = await Food.findById(input);
        if (!foundFood) {
            throw new Error('No such food found');
        }
        foundFood.done = !foundFood.done;
        await foundFood.save();
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
})
export const foodRouter = router({
    create: createFood,
    get: getFood,
    delete: deleteFood,
    toggleDone: toggleDone, //se puede escribir una sola vez y es lo mismo
})