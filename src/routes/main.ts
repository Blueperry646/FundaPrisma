import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { createUser, createUsers} from '../services/user'

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) =>{
    const user = await createUser({
            name: 'John Name',
            email: 'johnemail@john.com'
    })
    if (user) {
        res.status(201).json
    } else {
        res.status(400)
    }
} )

mainRouter.post('/users', async(req,res) => {
    const result = await createUsers([
        {name: 'Satoro', email: 'johnhonored@exemple.com'},
        {name: 'Not Megumi', email: 'sukunafrfr@exemple.com'},
        {name: 'Kenjaku', email: 'fortheplan@exemple.com'}
    ])
    if (result) {
    res.status(201).json({ ok : true})
    } else {
        res.status(400).json({error: 'Error creating users'})
    }
})