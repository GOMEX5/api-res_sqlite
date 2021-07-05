const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/controllers');

router.get('/api',(req,res)=>{
    res.json({Menssage:'welcome to api'})
})

router.get('/api/read',controllers.read);
router.get('/api/read/:id',controllers.listar);
router.post('/api/create',controllers.create);
router.put('/api/update/:id',controllers.update);
router.delete('/api/delete/:id',controllers.delete);

module.exports = router;