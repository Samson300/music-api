const controller = require('../controllers/music');

const musicRoutes = Router();

module.exports = musicRoutes;


const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/music');


musicRoutes.get('/', retrieveAll);


musicRoutes.post('/', create);


musicRoutes.put('/', update);


musicRoutes.delete('/', deleteOne);