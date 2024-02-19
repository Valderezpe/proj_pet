module.exports = app => {
    const helloRouter = require('../controllers/hello.controller')
    const userRouter = require('../controllers/users.controller')

    const router = require("express").Router();

    router.get('/', helloRouter.hello);
    router.get('/users', userRouter.listAll)
    router.get('/users/:id', userRouter.listOne)
    router.post('/users', userRouter.create);
    router.put('/users/:id', userRouter.update);
    router.delete('/users/:id', userRouter.delete)

    app.use('/api', router);
}