import { trpc } from './trpc';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import FoodList from './components/FoodList';
import FoodForm from './components/FoodForm';


function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <FoodForm />
        <FoodList />


        <div>esta es la App de Client</div>
      </QueryClientProvider>
    </trpc.Provider>



  )
}

export default App