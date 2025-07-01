import express from 'express';
import { createUser } from '../controller/UserController.js';


const router = express.Router()

router.get('/user',(req,res)=>{
    res.send('Hello World')
})

router.post('/createUser',createUser)




export default router;
