import React, { useState } from 'react'

function Formulario({usuarioDatos, finalizarCompra}) {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [tarNum, setTarNum] = useState()
    const [tarName, setTarName] = useState("")
    const [tarCode, setTarCode] = useState()

    const [pagar, setPagar] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`name: ${name}, surname: ${surname}, mail: ${mail}, tarNum: ${tarNum}, tarName: ${tarName}, tarCode: ${tarCode}`)

        const arr = {
            name: name,
            surname: surname,
            mail: mail,
            tarNum: tarNum,
            tarName: tarName,
            tarCode: tarCode
        }

        usuarioDatos(arr)
        setPagar(1)
    }
    

  return (
    <div>
        <div>
            <p>Nombre</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <p>Apellido</p>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
        </div>
        <div>
            <p>Email</p>
            <input type="text" value={mail} onChange={(e) => setMail(e.target.value)}/>
        </div>
        <div>
            <p>Numero de Tarjeta</p>
            <input type="number" value={tarNum} onChange={(e) => setTarNum(e.target.value)}/>
        </div>
        <div>
            <p>Nombre del titular</p>
            <input type="text" value={tarName} onChange={(e) => setTarName(e.target.value)}/>
        </div>
        <div>
            <p>Codigo de Seguridad</p>
            <input type="number" value={tarCode} onChange={(e) => setTarCode(e.target.value)}/>
        </div>
        <input type="submit" onClick={handleSubmit}/>
        {pagar ? <button onClick={finalizarCompra}>Pagar</button> : <></>}
        
    </div>
  )
}

export default Formulario