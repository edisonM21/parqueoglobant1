import {ServicioAdministrador} from '../services/ServicioAdministrador.js'


export class ControladorAdmin{

    constructor(){}

    async buscarAdmins(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioAdministrador.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        }
        
    }

    async buscarAdmin(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando la celda',
                data: await servicioAdministrador.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando la celda'+error,
                data: null
            })
        }
    }

    async editarAdmin(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            let id=request.params.id
            let datos=request.body
            await servicioAdministrador.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando la celda',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando la celda'+error,
                data: null
            })

        }

    }

    async agregarAdmin(request,response){
        let servicioAdministrador=new ServicioAdministrador()
        try{

            let datos=request.body
            await servicioAdministrador.ingresar(datos)
            response.status(200).json({
                mensaje:'exito registrando la celda',
                data: null
            })

        }catch(error){

            response.status(200).json({
                mensaje:'fallo registrando la celda'+error,
                data: null
            })

        }
    }

}
