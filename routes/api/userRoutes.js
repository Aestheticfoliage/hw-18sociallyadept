const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    addThought,
    removeThought
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userd/thoughts
router.route('/:userId').get(getUser).delete(deleteUser);

// /api/user/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;