import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import notes from '../../../src/data/data';

const getNote = id => notes.find(note => note.id === parseInt(id));

const handler = nc<NextApiRequest, NextApiResponse>()
    .get((req, res) => {
        const note = getNote(req.query.id);
        if(!note) {
            res.status(404);
            res.end();
            return;
        }
        res.json({ data: note });
    })
    .patch((req, res) => {
        const note = getNote(req.query.id);
        if(!note) {
            res.status(404);
            res.end();
            return;
        }
        const i = notes.findIndex(note => note.id === parseInt(req.query.id as string));
        const updatedNote = {...note, ...req.body};
        notes[i] = updatedNote;
        res.json({ data: updatedNote });
    })
    .delete((req, res) => {
        const note = getNote(req.query.id);
        if(!note) {
            res.status(404);
            res.end();
            return;
        }
        const i = notes.findIndex(note => note.id === parseInt(req.query.id as string));
        notes.splice(i, 1);
        res.json({ data: req.query.id });
    });

export default handler;