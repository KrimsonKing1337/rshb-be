import express from 'express';

import type { User } from 'types/@types.js';

import { apiGet } from 'api/apiGet.js';
import { apiPut } from 'api/apiPut.js';

export const router = express.Router();

router.get('/api', async (_req, res) => {
  const sqlResult: User[] = await apiGet();

  res.send(sqlResult);
});

router.put('/api', async (req, res) => {
  if (!req.body) {
    res.sendStatus(500);

    return;
  }

  await apiPut(req.body);

  res.send('ok!');
});
