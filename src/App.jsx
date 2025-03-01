import './App.css';
import Games from './components/List';
import gamesData from './games.json'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to your Steam</h1>
      <div className="gameCardContainer">
        {gamesData.map((game, index) => (
          <Games key={index} title={game.title} genre={game.genre} price={game.price} link={game.link} img = {game.img}/>
        ))}
      </div>
    </div>
  );
}

export default App