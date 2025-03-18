async function getUsuario() {
    try {
        const response = await fetch('http://localhost:3000/UsuariosRegis', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////

async function postUsuario(nombre,contrasena) {
    try {
     
        const userData = { 
            nombre,
            contrasena
        
        };



        const response = await fetch("http://localhost:3000/UsuariosRegis", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////


async function updateUsuario(nombre,contrasena,id) 
{
    try {
     
        const userData = { 
            nombre, 
            contrasena
        
        };


        const response = await fetch("http://localhost:3000/UsuariosRegis"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}



//////////////LLAMADO DELETE/////////////


async function deleteUsuario(id) {
    try {
        const response = await fetch(`http://localhost:3000/UsuariosRegis/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}


export default {deleteUsuario,updateUsuario,getUsuario,postUsuario}