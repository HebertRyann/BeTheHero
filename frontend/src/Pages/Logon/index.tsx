import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi'
import api from '../../services/api'

import './style.css';
import heroesImg from '../../assets/heroes.png'; 
import logoImg from '../../assets/logo.svg'
import { FormEvent } from 'react';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/Auth';

export default function Logon(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const { signIn } = useAuth();

    async function handlerLogin(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await signIn(name, password);

        }catch (err){

            console.log(err.message)
            setIsError(true);
            // setTimeout(() => {
            //     setIsError(false);
            // }, 2000)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handlerLogin}>

                    <h1>Faça Seu logon</h1>

                    {isError && (
                        <div className="ContainerErrorLogin">
                            <p>Erro ao tentar se cadastrar</p>
                        </div>
                    )}

                    <Input 
                        name="Name"
                        placeholder="Nome da ong"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        name="Password"
                        placeholder="Sua senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            marginTop: '8px'
                        }}
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