import renderer from './renderer';
import Terrain from './terrain';

/**
 * Initialize the game
 */
const init = function() {
  renderer.init();

  // Generate some random terrain
  const detailLevel = 8;
  const terrain = Terrain.generate(detailLevel);
  renderer.addPlane(800, 800, terrain);

  requestAnimationFrame(update);
};

/**
 * Update the state of the game at the beggining of each frame
 */
const update = function() {
  render();
};

/**
 * Render the current state of the game to the view
 */
const render = function() {
  renderer.render();
  requestAnimationFrame(update);
};

/**
 * Expose functionality
 */
export default {
  init
};
