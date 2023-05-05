const userOtp = require('./../db/userOtp');

const forgotOtpCheck = async(req,res,next)=>{
    try{
        if(req.body.otp){
            const uOtp = await userOtp.find({email:req.email});
        if(uOtp.length){
            if(uOtp[0].otp == req.body.otp){
                await userOtp.deleteOne({email:req.email});
                next();
            }else{
                res.json({mgs:"Otp not match 🥴. Check you mail plz",code:2}); 
            }
        }else{
            res.json({mgs:"User not found try again menually 😴",code:2});
        }
        }else{
            res.json({mgs:"Plz enter the otp 😟",code:2}); 
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = forgotOtpCheck;