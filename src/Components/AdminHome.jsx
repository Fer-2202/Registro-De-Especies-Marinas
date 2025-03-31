import React, { useState, useEffect } from 'react'
import Especies from '../Services/Especies'
import Swal from 'sweetalert2'
import '../Style/Admin.css'

function admin() {

  const [pecesAgregados,setEspecies] = useState("")
  const [Peces, setAnimales] = useState([""])
  const [pezAgregada,setEspeciesAnadidas] = useState("")
  

    useEffect(() => {
  
      async function fetchDataUsers() {
          
        
        const datos = await Especies.getEspecies();
        setAnimales(datos);
        
      };
    
      fetchDataUsers()
      
    }, []);


 async function agregar() {

  if (pecesAgregados === "" || imgs === "") {
          Swal.fire({
              title: 'Error',
              text: 'Llene los espacios',
              icon: 'error',
              confirmButtonText: 'Ok'
            })

          }else{
            
            const pecesRegis = await Especies.postEspecies(pecesAgregados, imgs) 
            setAnimales([...Peces,pecesRegis])
            Swal.fire({
                title:"Especie Registrada",
                icon: "success",
                draggable: true
              });
          }
  }


 function agregado(evento) {

  setEspecies(evento.target.value)

 }


 async function btnEliminar(id) {
  // Usamos Swal con async/await correctamente
  const result = await Swal.fire({
    title: "Quieres eliminar esta especie?",
    text: "No se podra revertir esta accion",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Conservar Especie",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar especie"
  });

  if (result.isConfirmed) {
    try {
      // Aquí haces la eliminación con await
      const pezEliminado = await Especies.deleteEspecies(id);

      // Actualizas el estado con la nueva lista
      const datos = await Especies.getEspecies();
      setAnimales(datos);

      // Notificas al usuario que la eliminación fue exitosa
      Swal.fire({
        title: "Eliminado",
        text: " La especie fue eliminada",
        icon: "success"
      });
    } catch (error) {
      console.error('Error eliminando el pez:', error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue deleting the file.",
        icon: "error"
      });
    }
  }
}

  function anadida(evento) {

    setEspeciesAnadidas(evento.target.value)
    
  }

  async function btnEdit(nombre, id){

      const prueba = Especies.updateEspecies(nombre, id)
      const datos = await Especies.getEspecies();
      setAnimales(datos);

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
  <div className='contenedorAdmin'>
    
      <div className='contenedorSubirFoto'>
      <img className='fotoAdmin' src={ imgs } alt="" /> <br />
      <input className='subirFoto' onChange={handleChange} type="file" /> <br />
      <input className='SubirTexto' value={pecesAgregados} onChange={agregado} type="text" />
      <button onClick={agregar} className='botonGuardarEspecie'>Guardar</button>
      </div>

      <div className='contenedorPez'>
      {Peces.map((Pez,index) => ( 
        
      <div className='pecesguardados' key={index}><br /> <br />
     
      <h2>{Pez.info}</h2>
      <img className='fotoAdmin2' src={ Pez.imagen } alt="" /> <br />
      <button onClick={e=>btnEliminar(Pez.id)}>Eliminar</button>
      <button onClick={e=>btnEdit(pezAgregada, Pez.id)}>Editar</button>
      <input onChange={anadida} type="text" />
   
      </div>
        ))} 
        </div>
    </div>
  )
}


export default admin