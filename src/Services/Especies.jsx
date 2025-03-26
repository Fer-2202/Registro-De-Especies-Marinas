async function getEspecies() {
    try {
        const response = await fetch('http://localhost:3000/EspeciesRegis', {
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

async function postEspecies(info,imagen) {
    try {
     
        const userData = { 
            info,
            imagen       
        
        };

        const response = await fetch("http://localhost:3000/EspeciesRegis", {
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

async function updateEspecies(info,id) 
{
    try {
     
        const userData = { 
           info
           
        };

        const response = await fetch("http://localhost:3000/EspeciesRegis/"+id, {
            method: 'PATCH',
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

async function deleteEspecies(id) {

    
    try {
        const response = await fetch(`http://localhost:3000/EspeciesRegis/${id}`, {
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

export default {deleteEspecies,updateEspecies,getEspecies,postEspecies}