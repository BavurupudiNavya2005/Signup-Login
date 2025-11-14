function signup(userName){
    let arr = [Navya, Munni, Chinni, Harika, Yogitha]
     for ( let i = 0; i < arr.length; i ++){
        if ( arr[i] == userName){
            return "User Already Regsistered, Please Login"
        }
        else{
            arr.push(userName)
            return "Signup Sucessfull, Please Login"
        }
     }
     
}