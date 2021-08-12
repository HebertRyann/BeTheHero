import React, {useState, useEffect} from 'react';
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiUser } from 'react-icons/fi';
import api from '../../services/api'
import './style.css'
import { IIncident } from '../../types';
import { useAuth } from '../../hooks/Auth';


export default function Profile(){
    const [incidents, setIncidents] = useState<IIncident[]>([]);
    const history = useHistory();
    const { ong, logout } = useAuth();
    useEffect(() => {
       api.get('profile')
       .then(response => {
        setIncidents(response.data);
       })
    }, []);

    async function handleDeleteIncident(id: string){
        try {
            await api.delete(`incidents/${id}`);            
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch {
            alert('Error ao deletar')
        }
    }

    return (
        <div className="profile-container">
            <header>
               <div className="Container-Header-Profile">
                <button>
                    <FiUser size={24} color="#e02041"/>
                </button>
                <span>{ong?.name}</span>
               </div>

                <Link className="button" to="/incidents/new">Cadastra Novo Caso</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#E02041"/>

                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASOS:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇAO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} />
                    </button>
                </li>
                ))}
                
            </ul>
        </div>
    );
}