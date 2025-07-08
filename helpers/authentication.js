import jsonwebtoken from "jsonwebtoken"

export function generateToken(email){
   return jsonwebtoken.sign({email},process.env.json_web_token,{ expiresIn:"1h" })
}

export function verifyToken(req,res,next){
    const token = req.header("Authorization")?.replace("Bearer","")

    if(!token){
        res.status(401).json({error:"token requerido"})
    }

    try {
        const datatoken = jsonwebtoken.verify(token, process.env.json_web_token)
        next();
    } catch (error) {
        res.status(401).json({error:"token no valido"})
    }
    
}