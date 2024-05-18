import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/createBooks';
import ShowBook from './pages/showBook';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';
import Register from './pages/register';
import SignIn from './pages/Signin';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path = '/register' element = {<Register/>}/>
      <Route path='/signin' element= {<SignIn/>}/>
      
    </Routes>
  );
};

export default App;