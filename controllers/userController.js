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

    return res.status(200).json({msg:"usuario autenticado"})
  }
}

export default new usuarioController();