import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

const getCategoryList = async () => {
  try {
    const res = await axios.get('/category-list');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getPopularBooks = async () => {
  try {
    const res = await axios.get('/top-books');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getBooksByCategory = async category => {
  try {
    const res = await axios.get(`/category?category=${category}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getBookByID = async bookId => {
  try {
    const res = await axios.get(`/${bookId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const BookApiService = {
  getCategoryList,
  getPopularBooks,
  getBooksByCategory,
  getBookByID,
};

export default BookApiService;
