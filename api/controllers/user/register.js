module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    firstName: { type: 'string',required:true },
    lastName: { type: 'string',required:true},
    dob:{type:'string',required:true},
    gender:{type:'string',required:true},
    age:{type:'number',required:true},
    role:{type:'string'},
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },


  exits: {
    
  success: {
    statusCode: 201,
    description: 'New muna user created',
  },
  emailAlreadyInUse: {
    statusCode: 400,
    description: 'Email address already in use',
  },
  error: {
    description: 'Something went wrong',
  },
  

  },


  fn: async function (inputs,exits) {
try {
  const newEmailAddress = inputs.email.toLowerCase();
  const token = await sails.helpers.strings.random('url-friendly');
  let newUser = await User.create({
    firstName: inputs.firstName,
    lastName: inputs.lastName,
    dob: inputs.dob,
    gender: inputs.gender,
    age:inputs.age ,
   role:inputs.role,
   
    email: newEmailAddress,
    password: inputs.password,
    emailProofToken: token,
    emailProofTokenExpiresAt:
      Date.now() + sails.config.custom.emailProofTokenTTL,
  }).fetch();
  const confirmLink = `${sails.config.custom.baseUrl}/user/confirm?token=${token}`;
  const email = {
    to: newUser.email,
    subject: 'Confirm Your account',
    template: 'confirm',
    context: {
      name: newUser.firstName,
      confirmLink: confirmLink,
    },
  };
await sails.helpers.sendMail(email);
return exits.success({
  message: `An account has been created for ${newUser.email} successfully. Check your email to verify`,
});
} 
catch (error) {
  if (error.code === 'E_UNIQUE') {
    return exits.emailAlreadyInUse({
      message: 'Oops :) an error occurred',
      error: 'This email address already exits',
    });
}
return exits.error({
  message: 'Oops :) an error occurred',
  error: error.message,
});


}
    // All done.
  
    

  }
  
  


};
