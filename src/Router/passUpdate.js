const signupUser = require('./../db/signupUser');
const bcrypt = require('bcrypt');

const passUpdate = async(req,res,next)=>{
    const {pass,rePass} = req.body;

    if(pass && rePass){
        if((pass == rePass) && (pass.length >= 4)){
            let cryptPass = await bcrypt.hash(pass,8);
            await signupUser.findOneAndUpdate({email:req.email},{$set:{pass:cryptPass}});
            res.json({mgs:"Password update successful",code:0});
        }else{
            res.json({mgs:"Password Require not match",code:2});
        }
    }else{
        res.json({mgs:"Fill the from",code:2});
    }

}


module.exports = passUpdate;

