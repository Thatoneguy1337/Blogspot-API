import * as shortid from 'shortid';

export const generateSscNumber = (): string => {
    const timestampPart = Date.now().toString().slice(-6);
  
    
    const randomPart = shortid.generate().slice(-5);
  
    
    const sscNumber = `${timestampPart}${randomPart}`;
  
    
    return sscNumber.slice(0, 11);
  };


export default {
    userComplete: {
        fullname:"John Doe" , 
        username:"johnthedoughy89" , 
        email:`test-${Date.now()}@example.com`, 
        password:"12345678", 
        reset_password:"", 
        user_img:"", 
        bg_img:"",
        ssc_number:generateSscNumber(), 
        telephone:"1122604433",
        birthdate:"06/04/1989",
        description:"",
        zip_code:"20068397",
        state:"Texas",
        city:"El Passo",
        street:"Benson Stt",
        number:"267"
    },
    userWithoutAdmin: {
        fullname:"Jane Doe" , 
        username:"janethedoughy07" , 
        email:`test-${Date.now()}@example.com`, 
        password:"12345678", 
        reset_password:"", 
        user_img:"", 
        bg_img:"", 
        ssc_number:generateSscNumber(), 
        telephone:"1122604433",
        birthdate:"06/04/1989",
        description:"",
        zip_code:"20068397",
        state:"Texas",
        city:"El Passo",
        street:"Benson Stt",
        number:"267"
    },
    userUnique: {
      fullname:"John Doe" , 
      username:"johnthedoughy89" , 
      email:`vgb1337@gmail.com`, 
      password:"12345678", 
      reset_password:"", 
      user_img:"", 
      bg_img:"",
      ssc_number:generateSscNumber(), 
      telephone:"1122604433",
      birthdate:"06/04/1989",
      description:"",
      zip_code:"20068397",
      state:"Texas",
      city:"El Passo",
      street:"Benson Stt",
      number:"267",


    },
    userInvalidBody: {
      username: 1234,
      email: [],
    },
    userInvalidBody2: {
      fullname: 'um nome com mais de quarenta e cinco caracteres!',
      email: 'mail',
      password: 123456,
    },
  };

  