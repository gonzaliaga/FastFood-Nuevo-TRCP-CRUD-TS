import { trpc } from '../trpc';
import { FoodCard } from './FoodCard'


function FoodList() {
  const { data, isLoading, isError, error } = trpc.food.get.useQuery();
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>;
  console.log(data)
  return (
    <>
      {data?.map((food: any) => (
        <FoodCard food={food} key={food._id} />
      ))}
    </>
  );
}

export default FoodList