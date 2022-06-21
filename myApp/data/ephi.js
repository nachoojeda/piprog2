precesarLogin : (req, res) => {
       
    let info = req.body;

    let errors = {};

    if (info.email == "") {
        errors.message = "El input de email esta vacio";
        res.locals.errors = errors;
        return res.render("login");
        
    } else if (info.password == ""){
        errors.message = "El input de password esta vacio";
        res.locals.errors = errors;
        return res.render('login')

    }  else {
        user.findOne({
            where : [{ email :  info.email}]
        }).then((result) => {
            if (result != null) {
                let claveCorrecta = bcryptjs.compareSync(info.password  , result.password )
                if (claveCorrecta) {
                    req.session.user = result.dataValues;

                    /* Evaluar si el checkbox esta en true o existe */

                    if (req.body.remember != undefined) {
                        res.cookie('userId', req.session.user.id, { maxAge : 1000 * 60 * 5})
                    }
                   
                    return res.redirect("/movies/all")
                } else {
                    /* Este paso se ejecuta por cada validacion que queramos */
                    errors.message = "La clave es incorrecta"
                    res.locals.errors = errors;
                    return res.render('login');
                }
                
            } else {
                /* Este paso se ejecuta por cada validacion que queramos */
                errors.message = "No existe el email " + info.email
                res.locals.errors = errors;
                return res.render('login');
            }
        });
    },








    procesarLogin: (req,res) => {

        let info = req.body ;
        let errors = {}
    
    
        usuario.findOne({where: [{usuario : info.usuario}] }) .then((result) =>{
          if (result != null) {
    
            let clave = bcryptjs.compareSync(info.contrasenia , result.contrasenia)
            if (clave) {
              
              req.session.user = result.dataValues;
            
                if (req.body.remember_token != undefined) {
                  res.cookie('userId' , result.dataValues.id , {maxAge: 1000 * 60 * 5})
                }
    
                return res.render('profile' , {profile: result}) 
            }
             else {
              return res.send("Existe el usuario " + info.usuario + " y la clave es incorrecta")
            }
          } 
          else {
             {
              errors.message = "El usuario o la contraseña son incorrectos";
              res.locals.errors = errors;
              return res.render('login')
            } 
          }
        })
      },