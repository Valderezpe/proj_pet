const request = require('supertest')
const app = require('../app.js')

describe('API test', () => {
    it('should show api', async () => {
        const res = await request(app).get('/api')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('msg')
    })
})

describe('Create User', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                firstName: "Jose",
                lastName: "Doe",
                email: "jose.doe@example.com",
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('users')
    })
})

describe('Users API', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    })
})

describe('Users API', () => {
    it('should show one users by id', async () => {
        const res = await request(app).get('/api/users/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    })
})

describe('Update User', () => {
    it('should update a user', async () => {
        const res = await request(app)
            .put('/api/users/1')
            .send({
                firstName: "Jose",
                lastName: "Silva",
                email: "jose.Silva@example.com",
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    })
})

describe('Delete User', () => {
    it('should delete a user', async () => {
        const res = await request(app)
            .del('/api/users/1')
        expect(res.statusCode).toEqual(204)
    })
})