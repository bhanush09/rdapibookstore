const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try{
        let user = await User.findOne({ email: 'bhanuprakash9639@gmail.com'});
        if(user) {
            console.log('user updated successfully...');
        }else{
            user = new User();
            user.firstName = 'Bhanu';
            user.lastName = 'Sharma';
            user.mobileNo = '9027408140';
            user.email = "bhanuprakash9639@gmail.com";
            let password = bcrypt.hashSync('902740', 10);
            user.password = password ;
            user.userType= 'admin';
            await user.save();
            console.log("user created successfully...");
        }
    }catch(err){
        console.log(err)
    }
}
module.exports = createAdmin 