import { ChangeEvent, FormEvent, useState } from "react";
import {trpc} from '../trpc';

const initialState = {
    title: "",
    description: "",
    done: false,

}

function FoodForm() {
    const [food, setFood] = useState(initialState);
    const addFood = trpc.food.create.useMutation()
    const utils = trpc.useUtils()
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(food)
        addFood.mutate(food, {
            onSuccess: () => {
                console.log("Food add successfully")
                utils.food.get.invalidate()
                setFood(initialState)
            },
        })
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFood({...food, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto my-10 p-8 bg-white rounded shadow-xl">
            <input type="text"
                name="title"
                placeholder="Name of food"
                value={food.title}
                autoFocus
                onChange={handleChange}
                className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb.3"
            /><br />
            <textarea
            value={food.description}
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb.3"

            /><br />
            <button className="bg-zinc-500 px-3 py-2 rounded-md text-white">Guardar</button>
        </form>
    )
}

export default FoodForm