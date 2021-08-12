import { useGnomes } from './hooks/useGnomes';

export const App = () => {
  const {
    data: gnomes,
    isLoading: gnomesIsLoading,
    error: gnomesError
  } = useGnomes();

  console.log(`gnomes`, gnomes)

  if (gnomesIsLoading) return <p>Loading..</p>;
  if (gnomesError) return <p>Error..</p>;

  return (
    <div>
      test
    </div>
  )
}


export default App;
