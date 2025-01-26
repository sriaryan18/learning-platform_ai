import {Router} from 'express';
import { FEATURES_ROUTES} from "../types/constants";
import examRoutes  from './exam'

const router = Router();

router.use(FEATURES_ROUTES.EXAM,examRoutes)


export default router;