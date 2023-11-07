import {trpc} from '../trpc';


function FoodList() {
   const food = trpc.food.get.useQuery()
  return (
    <div>{window.JSON.stringify(food.data)}</div>
  )
}

export default FoodList