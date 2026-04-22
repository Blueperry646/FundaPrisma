import { Router } from 'express';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (requestAnimationFrame, res) =>{
    const user = await prisma.user.create({
        data: {
            name: "John Name",
            email: "johnemail@john.com"
        }
    })
    
    res.json(user)
} )