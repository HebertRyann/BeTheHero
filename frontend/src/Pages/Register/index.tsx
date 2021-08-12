import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';import api from '../../services/api';
import { FormEvent } from 'react';
import { Input } from '../../components/Input';
export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const history = useHistory();
    const [openModalConfirmed, setOpenModalConfirmed] = useState(false);

    async function handlerRegister(e: FormEvent){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)
            setOpenModalConfirmed(true);
            // history.push('/')
        } catch (err) {
            alert('erro')
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, Entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Tenho Cadastro
                    </Link>
                </section>
                <form onSubmit={handlerRegister}>
                    <Input
                        name="" 
                        placeholder="Nome Da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        name="" 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        name="" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <Input
                        name="" 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="input-group">
                        <Input 
                            name=""
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <Input 
                            name=""
                            placeholder="UF" 
                            styleCustom={{ maxWidth: 100, marginLeft: 5 }}
                            style={{ width: 100, textAlign: 'center' }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                {openModalConfirmed && (
                    <div className="ModalConfirmed">
                        <h1>Cadastro Realizado</h1>
                        <p>Seu Cadastro foi realizado com sucesso faça login com seu <strong>email</strong> e <strong>senha</strong></p>
                        {/* <button>Login</button> */}
                    </div>
                )}
            </div>
        </div>
    )
}