import React, { Component } from 'react';
import axios from 'axios';
import '../css/Busca_Sucesso.css';
import { Link, Redirect } from 'react-router-dom';
import Busca_Sucesso from '../components/Busca_Sucesso';
import Naveg from '../components/Naveg';

class paginaBusca extends Component {
 constructor(props) {
   super(props);
   this.handleCpfChange=this.handleCpfChange.bind(this);
   this.state = {
      nome: '',
      email: '',
      cpf: '',
      num_matric: '',
      dataNascimento: '',
      telefone: '',
      success: false,
  };
 }

handleCpfChange(e) {
   this.setState({cpf: e.target.value,});
}

handleSubmit = event => {
   event.preventDefault();
   axios.get(`https://testeparaaviacao.herokuapp.com/api/Aluno`,{params: {cpf:this.state.cpf}})
     .then(res => {
          if (res.data.status === 'success')
             this.setState({num_matric: res.data.data.num_matric});
             this.setState({nome: res.data.data.nome});
             this.setState({email: res.data.data.email});   
             this.setState({dataNascimento: res.data.data.data_nascimento});
             this.setState({telefone: res.data.data.telefone});
             this.setState({success: true});
          console.log(res.data.status);
          console.log(res);
          console.log(res.data);
    })
     .catch(function (error) {
          if (error.response) {
             alert(error.response.data.message);
             console.log(error.response.status);
             console.log(error.response.headers);
          } else if (error.request) {
             console.log(error.request);
          } else {

             console.log('Error', error.message);
          }
          console.log(error.config);
     })
 }

 render() {
  if (this.state.success === true){
        return (
           <div className="pagina">
               <h1>Dados Cadastrais Do Aluno:</h1>
               <Busca_Sucesso
               nome={this.state.nome}
               cpf={this.state.cpf}
               num_matric={this.state.num_matric}
               email={this.state.email}
               dataNascimento={this.state.dataNascimento}
               telefone={this.state.telefone}
               />
               <button id="buttonDanger">
                   <Link id="link" to="/">Voltar</Link>
               </button>
            </div>
        );
      
  }
    return (
        <div className="pagina">
            <Naveg/>
            <form onSubmit={this.handleSubmit}>
                <h1>Digite o CPF do aluno que deseja buscar: </h1>
                <label>CPF</label><br/>
                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleCpfChange}></input><br/>
                <button id="buttonSuccess" type="submit">Enviar</button>
                <button id="buttonDanger1">
                   <Link id="link" to="/">Voltar</Link>
               </button>
           </form>
       </div>
  );
}

}
export default paginaBusca;