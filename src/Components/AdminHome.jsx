import React, { useState, useEffect } from 'react'
import Especies from '../Services/Especies'
import Swal from 'sweetalert2'

function admin() {

  const [pecesAgregados,setEspecies] = useState("")
  const [Peces, setAnimales] = useState([""])
  const [pezAgregada,setEspeciesAnadidas] = useState()
  

    useEffect(() => {
  
      async function fetchDataUsers() {
          
        
        const datos = await Especies.getEspecies();
        setAnimales(datos);
        
      };
    
      fetchDataUsers()
      
    }, []);


 async function agregar() {
    
   const pecesRegis = await Especies.postEspecies(pecesAgregados, imgs) 
    setAnimales([...Peces,pecesRegis])

  }


  
 function agregado(evento) {

  setEspecies(evento.target.value)

 }


  async function btnEliminar(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Especies.deleteEspecies(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        
      }
    });
   
    
    
    
    
  }


  function anadida(evento) {

    setEspeciesAnadidas(evento.target.value)
    
  }

  function btnEdit(nombre, id){
      Especies.updateEspecies(nombre, id)
  }


  const [imgs,Setimgs] = useState()

  const handleChange = (e)=>{
    console.log(e.target.files)
    const data = new FileReader()
    data.addEventListener('load',()=>{
        Setimgs(data.result)
  })
  data.readAsDataURL(e.target.files[0])
  
  }
  

  return (
    <div>

      <input onChange={handleChange} type="file" /> <br />
      <input value={pecesAgregados} onChange={agregado} type="text" />
      <button onClick={agregar} className='boton'>Guardar</button>

      {Peces.map((Pez,index) => ( 
      <div key={index}><br /> <br />
      <h2>{Pez.info}</h2>
      <img className='foto' src={ Pez.imagen } alt="" /> <br />
      <button onClick={e=>btnEliminar(Pez.id)}>Eliminar</button>
      <button onClick={e=>btnEdit(pezAgregada, Pez.id)}>Editar</button>
      <input value={pezAgregada} onChange={anadida} type="text" />
      </div>
        ))} 
    </div>
  )
}


export default admin