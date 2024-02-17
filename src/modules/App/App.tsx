import { Route, Routes } from "react-router-dom";
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonList from './components/PokemonList/PokemonList';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}
