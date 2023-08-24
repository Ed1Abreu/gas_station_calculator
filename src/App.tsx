import { useState, FormEvent } from 'react';
import './App.css'
import LogoImg from './assets/logo.png'

function App() {
  
  interface InfoProps{
    title: string;
    gasolina: string | number;
    alcool: string | number;
  }  

  const [alcoolInput, setAlcoolInput] = useState(1)
  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent){
    event.preventDefault();

    const calculo = (alcoolInput / gasolinaInput);
    
    if(calculo <= 0.7){
      setInfo({
        title:"Compensa encher com álcool!",
        gasolina: gasolinaInput,
        alcool: alcoolInput
      })
    }else{
      setInfo({
        title:"Compensa usar gasolina",
        gasolina: gasolinaInput,
        alcool: alcoolInput
      })
    }

  }

  return (
    <div>
      <main className='container'>
        <img 
          className='logo'
          src={LogoImg} 
          alt="Gas station calculator logo" 
        />
        <h1 className='title'>Qual a melhor opção</h1>
      
        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input 
            className='input' 
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input 
            className='input' 
            type="number"
            placeholder='4,90'
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input className='button' type="submit" value='Calcular'/>
        </form>

        {info && Object.keys(info).length > 0 &&(
          <section className='result'>
            <h2 className='result-title'>{info.title}</h2>
            <span>Álcool R${info.alcool}</span>
            <span>Gasolina R${info.gasolina}</span>
          </section>
        )}

      </main>
    </div>
        
  )
}

export default App
