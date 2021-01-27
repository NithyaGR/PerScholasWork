import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import { Link } from 'react-router-dom';
import './GamePage.css'; 
const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

const GamePage = (props) => {
  return (
      <div className="App">
        {/*test render*/}



          <GameTimer />

        <div className="flex-h align-flex-end">
          <GameBoard
            colors={props.colors}
            guesses={props.guesses}
            handlePegClick={props.handlePegClick}
            handleScoreClick={props.handleScoreClick}
          />
          <div className='App-controls'>
            <ColorPicker
              colors={colors}cd
              selColorIdx={props.selColorIdx}
              handleColorSelection={props.handleColorSelection}
            />
            <GameTimer />
            <Link className='btn btn-default' to='/settings'> Difficulty </Link>
            <NewGameButton handleNewGameClick={props.handleNewGameClick}/>
          </div>
        </div>
        <footer className='App-header-footer'>
          {(props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
  }



export default GamePage;
