function getAdmis(map){
    let admins = [];
    for([Key, value]of map){
        if(value === 'Admin'){
            Admins.push(Key)
        }
    }
    return admins
}

const usuario = new Map();

usuario.set('Luiz', 'Admin');
usuario.set('rodrigo', 'Admin');
usuario.set('thiago', 'User');
usuario.set('Vitoria', 'User');

