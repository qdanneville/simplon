import express from 'express';

const router = express.Router();

const books = [
  {
    name: 'Les misérables'
  },
  {
    name: 'La horde du contrevent'
  }
];

router.get('/', function (req, res) {
  res.status(200).json(books);
});

export default router;
