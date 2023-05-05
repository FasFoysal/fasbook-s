const otpGenerator = require('otp-generator');
const userOtp = require('./../db/userOtp');
const otpGen  = async(req,res,next)=>{
    try {
        let otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });
        const user = await userOtp.find({email:req.email});
        if(user.length){
            await userOtp.updateOne({email:req.email},{$set:{otp:otp}})
        }else{
            const uOtp = new userOtp({email:req.email,otp:otp})
            await uOtp.save();
        }
        req.otp = otp;
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = otpGen;