const express=require('express');
const router=express.Router();
const book = require('../model/Book');

//1. Read data by Get router use to fetch data
router.get('/fetchbook', async (req, res) => {
    try {
      const Book = await book.find({ req });
      res.json({ Book })
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error occurred!');
    }
  })

//2. Insert data by Post router use to create data
router.post('/addbook', async (req, res) => {
    try {
        const { Name, Image_url, Author, Pages, Price } = req.body;

        const Book = new book({
          Name, Image_url, Author, Pages, Price 
        })
        const savedBook = await Book.save();
        res.json({ savedBook });
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error occurred!');
      }
    })

//3. Delete data by Put router use to update data
    router.put('/updatebook/:id', async (req, res) => {
      try{
        const { Name, Image_url, Author, Pages, Price } = req.body;

        const newbook = {};
        if (Name) { newbook.Name = Name };
        if (Image_url) { newbook.Image_url = Image_url };
        if (Author) { newbook.Author = Author };
        if (Pages) { newbook.Pages = Pages };
        if (Price) { newbook.Price = Price };

        let Book = await book.findByIdAndUpdate(req.params.id, { $set: newbook },
            { new: true })

         res.json({ Book });
        }
        catch(error){
         console.error(error.message);
         res.status(500).send('Internal server error occurred!');
       }
       })

//4. Delete data by Delete router use to delete data       
    router.delete('/deletebook/:id', async (req, res) => {
        try {
          let  Book = await book.findByIdAndDelete(req.params.id)
          res.json({ 'Success': 'book has been deleted', book: Book });
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send('Internal server error occurred!');
        }
      })   

  module.exports=router;