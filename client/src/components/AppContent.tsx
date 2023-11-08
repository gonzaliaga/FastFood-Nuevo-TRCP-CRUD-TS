import FoodList from './FoodList';
import FoodForm from './FoodForm';

export function AppContent() {
    return (
        <div className='max-w-xl m-auto h-screen py-40'>
            <h1 className='text-5x1 font-bold text-center py-5'>
                Food
            </h1>
            <FoodForm />
            <FoodList />
        </div>
    )
}