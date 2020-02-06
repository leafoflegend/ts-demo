import express from 'express';

const PORT = 3000;

const app = express();

app.use((req, _res, next) => {
  console.log(req.path, 'cool');

  next();
});

app.listen(PORT);

// const sendPost = (data: { productId: string }) => {
//   axios.postkjbskjanskjdna(data);
// }
//
// sendPost(prodctId)
