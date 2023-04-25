import express from 'express';

import { getUsers, getData1, getData2, getData3, getData4, getData5} from '../controllers/users.js';

const router=express.Router();



// http://localhost:5000/users
router.get('/', getUsers);
router.get('/data1', getData1);
router.get('/data2', getData2);
router.get('/data3', getData3);
router.get('/data4', getData4);
router.get('/data5', getData5);



export default router; 