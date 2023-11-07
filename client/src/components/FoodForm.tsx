import { ChangeEvent, FormEvent, useState } from "react";
import {trpc} from '../trpc';

function FoodForm() {
    const [food, setFood] = useState({
        title:"",
        description:"",

    });
    const addFood = trpc.food.create.useMutation()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(food)
        addFood.mutate(food)
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFood({...food, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="title"
                placeholder="Name of food"
                autoFocus
                onChange={handleChange}
            /><br />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
            /><br />
            <button>Guardar</button>
        </form>
    )
}

export default FoodForm