export interface IOngCreate {
  id: string;
  
  name: string;
   
  email: string;
   
  whatsapp: string;
   
  city: string;
   
  uf: string;
  
}
export interface IIncidentCreate {
  id: string;
  
  title: string;
   
  description: string;
   
  value: number;
   
  ong_id: string;
}