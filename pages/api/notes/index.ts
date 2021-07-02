import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
// import cors from 'cors';

import notes from '../../../src/data/data';

const handler = nc<NextApiRequest, NextApiResponse>()
    .get((req, res) => {
        res.json({ data: notes });
    })
    .post((req, res) => {
        const id = Date.now();
        const note = {...req.body, id};
        notes.push(note);
        res.json({ data: note });
    });

export default handler;