import { schema } from 'normalizr';

/**
 * item and player are schemas for Entities, meaning they will be normalized and available under the assocaited key (items,players)
 */
export const item = new schema.Entity('items', {
  owner: itemUnionSchema,
});
export const player = new schema.Entity('players', {
    items: [ item ],
});
export const monster = new schema.Entity('monsters', {
    items: [ item ],
});

/**
 * arrayOfPLayers is the schema for an Array of player schemas
 */
export const arrayOfPlayers = new schema.Array(player);
export const arrayOfItems = new schema.Array(item);

const itemUnionSchema = new schema.Union({
  player: player,
  monster: monster,
}, 'type');

// game is an Object, it will not be stored under entities, but we've mapped the players property to an array of player entities
export const game = new schema.Object({
    loggedInPlayers: [ player ],
    monsters: [ monster ],
});

export default {
    player,
    arrayOfPlayers,
    game,
    monster,
    arrayOfItems,
    itemUnionSchema,
};
