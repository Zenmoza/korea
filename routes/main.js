const router = require('express').Router();
const controller = require('../controllers/general');

router.get('/', (req, res) => res.json({ success: true, message: 'Welcome to the Korean API' }));

router.get('/home', controller.home);
router.get('/home/:page', controller.home);
router.get('/post/:id/:episode', controller.post);
router.get('/series/:id', series)
router.get('/list-series', controller.listSeries);
router.get('/list-drama-korea', controller.listDrakor);
router.get('/list-drama-jepang', controller.listDraJep);
router.get('/list-drama-indonesia', controller.listDraina);
router.get('/list-drama-china', controller.listDonghua);
router.get('/genres', controller.genres);
router.get('/genres/:endpoint', controller.listGenre);
router.get('/genres/:endpoint/page/:page', controller.listGenre);
router.get('/search/', controller.search);
router.get('/search/page/:page', controller.search);

module.exports = router;