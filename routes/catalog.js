const express = require('express');

const router = express.Router();


//REQUIRE CONTROLLER MODULES
const book_controller = require("../controllers/bookController.js");
const author_controller = require("../controllers/authorController.js");
const instance_controller = require("../controllers/instanceController.js");
const genre_controller = require("../controllers/genreController.js");

///BOOK ROUTES ///

//GET request for book's index page
router.get('/', book_controller.index);

//GET request for creating a book's page
router.get('/book/create', book_controller.book_create_get);

//POST request for creating a book
router.post('/book/create', book_controller.book_create_post);

//GET request for deleting a book
router.get('/book/:id/delete', book_controller.book_delete_get);

//POST request for deleting a book
router.post('/book/:id/delete', book_controller.book_delete_post);

//GET request for updating a book
router.get('/book/:id/update', book_controller.book_update_get);

//POST request for updating a book
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one book
router.get('/book/:id', book_controller.book_details);

//GET request to show all book items
router.get('/books', book_controller.book_list);


///AUTHOR ROUTES ///

//GET request for creating author's page
router.get('/author/create', author_controller.author_create_get);

//POST request for creating an author
router.post('/author/create', author_controller.author_create_post);

//GET request for deleting an author
router.get('/author/:id/delete', author_controller.author_delete_get);

//POST request for deleting a book
router.post('/author/:id/delete', author_controller.author_delete_post);

//GET request for updating a book
router.get('/author/:id/update', author_controller.author_update_get);

//POST request for updating a book
router.post('/author/:id/update', author_controller.author_update_post);

//GET request for one book
router.get('/author/:id', author_controller.author_details);

//GET request to show all book items
router.get('/authors', author_controller.author_list);



///BOOK INSTANCE ROUTES ///

//GET request for creating instance's page
router.get('/instance/create', instance_controller.bookinstance_create_get);

//POST request for creating an instance
router.post('/instance/create', instance_controller.bookinstance_create_post);

//GET request for deleting an author
router.get('/instance/:id/delete', instance_controller.bookinstance_delete_get);

//POST request for deleting a book
router.post('/instance/:id/delete', instance_controller.bookinstance_delete_post);

//GET request for updating a book
router.get('/instance/:id/update', instance_controller.bookinstance_update_get);

//POST request for updating a book
router.post('/instance/:id/update', instance_controller.bookinstance_update_post);

//GET request for one book
router.get('/instance/:id', instance_controller.bookinstance_detail);

//GET request to show all book items
router.get('/instances', instance_controller.bookinstance_list);



/// GENRES ///

// GET request for creating a Genre. 
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

module.exports = router;