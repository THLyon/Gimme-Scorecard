const Gimme = require('../database/gimmeModel'); 

const gimmeModel = {}; 

//! ADD
gimmeModel.addUser = async (req, res, next) => {
    const {firstName, lastName, email, userName, password} = req.body; 

    Gimme.create({firstName, lastName, email, userName, password})
        .then(user => {
            res.locals.newUser = user;
            return next();
        })
        .catch((err) => {
            return next({
                log: `Error in gimmeModel.addUser: ${err}`,
                message: { err: 'Error occurred in gimmeModel.addUser. Check server logs for details.' },
              });
        });
}

//! FIND
gimmeModel.findUser = async (req, res, next) => {
    // const { firstName } = req.params; 
    const { name } = req.params;
    Gimme.find({ userName: name })
      .then((user) => {
        if (user.length === 0) {
          return next({
            log: `Error in StudentController.getStudent: Unable to find student with name ${name}`,
            message: { err: 'Error occurred in StudentController.getStudent. Check server logs for details.' },
          });
        }
        console.log('found')
        res.locals.foundUser = user;
        return next();
      })
      .catch((err) => {
        return next({
            log: `Error in gimmeModel.findUser: ${err}`,
            message: { err: 'Error occurred in gimmeModel.findUser. Check server logs for details.' },
          });
      });
}

//! UPDATE
gimmeModel.updateUser = async (req, res, next) => {
    const { userName } = req.params;
    const { newUserName, email} = req.body;

    Gimme.findOneAndUpdate({userName : userName}, (err, user) => {
        {userName: userName};
        {userName: newUserName};
        {email: email}; 
        {email: newEmail};
        if (err) {
            return next({
              log: `The following error occured: ${err}`,
              status: 418,
              message: { err: 'An error occured while trying to find a Gimme account' }
            })
        }
        else if(!userName){
            return next({
                log: `The following error occured: ${err}`,
                status: 400, 
                message: { err: 'No user with this user name in the database'}
            })
        }
        res.locals.updateUser = user;
        return next();
    })
}


//! DELETE
gimmeModel.deleteUser = async (req, res, next) => {
    const {name} = req.params;

    Gimme.findOneAndDelete({userName: name})
        .then((user) => {
            if(user === null){
                return next({
                    log: 'No user found in Database',
                    message: { err: 'Error occurred in GimmeModel.deleteUser. Check server logs for details.' }
                })
            }
            res.locals.deleteUser = user;
            return next(); 
        })
        .catch((err) => {
            return next({
                log: `Error in gimmeModel.deleteUser: ${err}`,
                message: { err: 'Error occurred in gimmeModel.deleteUser. Check server logs for details.' },
            });
        });
};

//! add Favorites

// gimmeModel.addFavorites = async (re1, res, next) => {
//     const {favorites} = req.body; 

//     Gimme.findOneAndUpdate({favorite}, (err, user) => {
//         {favorites: {favorites}}
//     })
// }

//! Delete Favorites


module.exports = gimmeModel;