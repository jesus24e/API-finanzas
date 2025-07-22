import { generateToken } from "../helpers/authentication.js";
import usersRepository from "../repositories/usersRepository.js";
import bcrypt from "bcrypt";

class usuarioController {
  constructor() {}
  
  async register(req, res){
    try {

      const {email, nombre, clave} = req.body;
      const userExist = await usersRepository.getOne({email})

      if (userExist){
        return res.status(400).json({error:"el usuario ya existe"})
      }

      const claveEncriptada = await bcrypt.hash(clave,10);
      const data = await usersRepository.create({
        email, nombre, clave: claveEncriptada
      })

      res.status(201).json(data)

    } catch (error) {

      console.log(error)
      res.status(500).send(error)

    }
  }

  async login(req,res){

    const {email, clave}=req.body;
    const userExist = await usersRepository.getOne({email})

    if (!userExist){
        return res.status(400).json({error:"el usuario no existe"})
      }
    
    const correctPassword = await bcrypt.compare(clave, userExist.clave)

    if(!correctPassword){
      return res.status(400).json({error:"contraseña incorrecta"})
    }

    const token = generateToken(email)
    return res.status(200).json({msg:"usuario autenticado",token})
  }

  async obtainSections(req,res){
    try{
      const { email } = req.user;
      const secciones = await usersRepository.getSections({email})

      res.status(200).json({secciones});
    }catch(e){
      console.log(e)
      res.status(500).send(e)
    }
       
  }

  async addSection(req,res){
    try {
            
      if (!req.body || Object.keys(req.body).length == 0) {
        return res.status(204).send("body sin contenido");
      }

      const {email} = req.user;
      const {seccion} =req.body;
      const data = await usersRepository.addSection(email,seccion);

      if(!data){
       return res.status(400).send("usuario no encontrado.");
      }
      
      res.status(200).json({ message: "Sección añadida correctamente"});
    } catch (error) {
      res.status(500).send(error)
    }
  }

  async deleteSection(req,res){
    try {
            
      if (!req.body || Object.keys(req.body).length == 0) {
        return res.status(204).send("body sin contenido");
      }

      const {email} = req.user;
      const {seccion} =req.body;
      const data = await usersRepository.deleteSection(email,seccion);

      if(!data){
       return res.status(400).send("usuario no encontrado.");
      }
      
      res.status(200).json({ message: "Sección eliminada correctamente"});
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default new usuarioController();