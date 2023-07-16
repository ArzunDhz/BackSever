import jwt from 'jsonwebtoken'

export const sendUserSessionCookie =(user,res,message,statuscode=200)=>
{
   const token = jwt.sign({_id:user._id},process.env.JWT_URL)  //making the token out of user id and assiging a key to verity that token

   res.status(statuscode).cookie('token',token,{
    httpOnly:true,
    maxAge: new Date(Date.now()+900000),
    sameSite:'lax'
   }).json({
    user,
    success:true,
    message
   })

}