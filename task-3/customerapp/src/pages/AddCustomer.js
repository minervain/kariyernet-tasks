import React, { useState } from 'react';
import './addCustomer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCustomer() {
  const [post, setPost] = useState({ id: '', company: '', name: '', city: '' });

  const navigate = useNavigate()

  const addCustom = () => {
    const newCustom = {
      id: post.id,
      companyName: post.company,
      contactName: post.name,

      address: {
        city: post.city
      }
    };

    axios.post('https://northwind.vercel.app/api/customers', newCustom)
      .then(res => {
        alert('Success!!');
        navigate('/');


      })
      .catch(error => {
        console.error('Error while adding custom:', error);
      });


  };


  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <div className='auth'>
      <div className='islem'>kayıt</div>
      <input value={post.id} name='id' type='text' placeholder='ID ' onChange={onChangeFunc} />
      <input value={post.company} name='company' type='text' placeholder='COMPANY' onChange={onChangeFunc} />
      <input value={post.name} name='name' type='text' placeholder='CONTACT NAME' onChange={onChangeFunc} />
      <input value={post.city} name='city' type='text' placeholder='CITY' onChange={onChangeFunc} />
      <button className='buton' onClick={addCustom}>ADD</button>
    </div>
  );
}

export default AddCustomer;
