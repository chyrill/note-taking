// src/note.routes.ts
import { Router } from 'express';
import { Note } from './note.model';

const router = Router();
let notes: Note[] = [];
let currentId = 1;


router.get('/notes', (req, res) => {
  res.json(notes);
});


router.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

router.post('/notes', (req, res) => {
  try {
    if(!req.body.title) res.status(400).send('Title is required');
    if(!req.body.content) res.status(400).send('Content is required');
    const note: Note = { id: currentId++, ...req.body };
    notes.push(note);
    res.status(201).json(note);
  } catch(err: any) {
    res.status(400).send(err.message);
  }
});


router.put('/notes/:id', (req, res) => {
  try {
    if(!req.body.title) throw new Error('Title is required');
    if(!req.body.content) throw new Error('Content is required');
    const index = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (index > -1) {
      const note = { ...notes[index], ...req.body };
      notes[index] = note;
      res.json(note);
    } else {
      res.status(404).send('Note not found');
    }
  } catch(err: any) {
    res.status(400).send(err.message);
  } 
  
});


router.delete('/notes/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (index > -1) {
    notes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Note not found');
  }
});

export default router;
