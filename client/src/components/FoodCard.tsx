import { trpc } from '../trpc';

interface Props {
  food: {
    _id: string;
    title: string;
    description: string;
    done: boolean;
  };
}

export function FoodCard({ food }: Props) {
  const deleteFood = trpc.food.delete.useMutation();
  const updateFood = trpc.food.toggleDone.useMutation();
  const utils = trpc.useUtils()
  return (
    <div className='bg-zinc-800 p-2 my-2 flex justify-between'>
      <div>
      <h1 className='font-bold text-xl'>{food.title}</h1>
      <p>{food.description}</p>
      </div>
      <div className='flex gap-x-2'>
      <button onClick={() => {
        deleteFood.mutate(food._id, {
          onSuccess: (data) => {
            if (data) { utils.food.get.invalidate(); }
          }
        })
      }}
      className='bg-red-500 px-3 py-2 rounded-md text-white ml-auto'
      >
        Borrar
      </button>
      <button onClick={async () => {
        await updateFood.mutate(food._id, {
          onSuccess: (data) => {
            if (data) { utils.food.get.invalidate(); }
          }
        })
      }}
      className={`px-3 py-2 rounded-md text-white ml-auto ${food.done ? "bg-zinc-300" : "bg-green-500 "}`}
      >
        {food.done ? "Undone" : "Done"}

      </button>
      </div>
    </div>
  )
}


