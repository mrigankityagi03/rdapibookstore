const User = require('./models/User');
const bcrypt = require('bcrypt');
const createAdmin = async () => {
    try {
        let user = await User.findOne({ email: 'mt@gmail.com' });
        if (user) {
            console.log('user updated successfully....');
        } else {
             user = new User();
            user.firstName = 'mriganki';
            user.lastName = 'tyagi';
            user.mobileNo = '9560363403';
            user.email = 'mt@gmail.com';
            const password = bcrypt.hashSync('123456', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log('user created successfully..');
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = createAdmin;