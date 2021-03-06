import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactPage.css';

const ContactPage = (props)=>{

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

    return(

            <main className="holder">
                <div className="d-flex w-100" >
                    
                    <form action="/contacto" method="post" className="form d-flex w-100" onSubmit={handleSubmit}>
                    
                        <input className="input" type="text" name="email" placeholder="YOUR EMAIL ADDRESS" 
                        value={formData.email} onChange={handleChange}/>

                        <input className="input" type="text" name="name" value={formData.nombre} onChange={handleChange} 
                        placeholder="YOUR NAME"/>

                        <input className="input" type="text" name="telephone" value={formData.telefono} onChange={handleChange} 
                        placeholder="CELULAR"/>

                        <textarea className="input" id="coment" name="mesage" value={formData.mensaje} onChange={handleChange} 
                        placeholder="YOUR MESSAGE"/>

                        {sending ? <p>Sending...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <div className='d-flex w-100'>
                            <div className='d-flex justify-content-center w-100 '>
                                <input className="input" id="send" type="submit" value="SEND"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="columns  d-block w-100">
                            <div className="rightColumn d-block  w-100">
                                <ul>
                                        <li>(02) 9999  1321</li>
                                        <li>Monday to Friyday:<br></br>8am - 4pm</li>
                                        <li>Saturday &amp; Sunday: Closed</li>
                                </ul>

                                <div className="rightColumn d-block  w-100">

                                    <ul>
                                        <li>177/43 Beauchamper Rd</li>
                                        <li>Matraville</li>
                                        <li>NSW </li>
                                        <li><a className="mail"href="mailto:diegocartelle@gmail.com?Subject=Please%20contact%20me">info@greatalchemy.com.au</a></li>
                                    </ul>
                                </div>
                            </div>
                </div>
            </main>
        
    );
}

export default ContactPage;