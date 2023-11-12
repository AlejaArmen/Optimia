"use client";

import { useEffect, useState } from 'react';
import Input from './Input';
import Chat from './Chat';
import axios from "axios";

const Container = ({}) => {
  const [form, setForm] = useState('');
  const [messages, setMessages] = useState([{ role: 'system', content: `hola soy tu cotizador de confianza`}]); // [ { user: 'user', text: 'text' }
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setForm('');
    try {
        setMessages([...messages, { role: 'user', content: form }]);
      if (typeof window !== 'undefined') 
      console.log(form); 
      {
        const res =  await axios.post('api/openai', {
          prompt: form,
        }).then((res) => { console.log (res.data)}).catch((err) => { console.log(err) });
      
       
        setMessages([...messages, { role: 'user', content: form }, { role: 'system', content: res }]);
      }
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen bg-slate-100 text-gray-800 p-10'>
      <div className='flex flex-col flex-grow w-screen h-screen bg-slate-100 shadow-xl overflow-hidden'>
        <Chat messages={messages} loading={loading} />
        <Input from={form} setForm={setForm} handleSubmitForm={handleSubmitForm} />
      </div>
    </main>
  );
}

export default Container;