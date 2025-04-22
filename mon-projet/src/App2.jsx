import './App.css'
import {useState} from 'react'

function App() {

  //Mauvaise pratique
  //let prenom = "David"
  //let nom = "WILS"

  //Bonne pratique
  const[prenom, setPrenom] = useState("David")
  const[nom, setNom] = useState("WILS")
  const[age, setAge] = useState(30)
  //console.log(age);
  
  //probleme boucle infini
  //setPrenom("Younes")

  function changePrenomNom(){
    setPrenom("Younes")
    setNom("FODIL")
    console.log("Le nom et le prénom sont changés");
    
  }

  function changerAge(){
    setAge(age + 1)
  }
  
  return (
    <>
      <h1>Bonjour {prenom} {nom}</h1>

      <button onClick={changePrenomNom}>
        Change le Prénom et le NOM
      </button>
      <br/><br/>
      <button onClick={changerAge}>Changer l'age</button>
      <h2>j'ai {age} ans</h2>
      

    </>
  )
}

export default App
