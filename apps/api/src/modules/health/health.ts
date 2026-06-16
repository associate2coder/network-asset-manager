import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {

  res.json({
    sender: req.ip,
    message: "Server is operational"
  });
});

export default router;