import {Router} from 'express';
import {generateLongTest, generateTestBasedOnStudentProfile, generateTestBasedOnTopic} from '../controllers'


const route = Router();

route.post('/', generateTestBasedOnTopic);
route.post('/student', generateTestBasedOnStudentProfile);
route.post('/longTest', generateLongTest);
export default route;