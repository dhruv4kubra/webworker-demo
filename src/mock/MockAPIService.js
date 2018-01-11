import gameData from './data/game';
import playersData from './data/players';
import playerOneData from './data/playerOne';
import itemsData from './data/items';


export const getPlayerOneData = () => Promise.resolve(playerOneData);
export const getPlayersData = () => Promise.resolve(playersData);
export const getGameData = () => Promise.resolve(gameData);
export const getItemsData = () => Promise.resolve(itemsData);

export default {
  getPlayerOneData,
  getPlayersData,
  getGameData,
  getItemsData,
}