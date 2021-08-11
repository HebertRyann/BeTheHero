import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'
import api from '../../services/api'

import './style.css';
import heroesImg from '../../assets/heroes.png'; 
import logoImg from '../../assets/logo.svg'
import { FormEvent } from 'react';

export default function Logon(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handlerLogin(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const response = await api.post('session', { name });
            
            localStorage.setItem('ongID', response.data.id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch (err){
            console.log(err.message)
            alert('Falha')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handlerLogin}>
                    <h1>Faça Seu logon</h1>
                    <input placeholder="Seu Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="Sua Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="heroes"/>    
        </div>
    );
}