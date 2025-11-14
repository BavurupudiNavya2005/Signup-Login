function signup(userName){
    let arr = ["Navya", "Munni", "Chinni", "Harika", "Yogitha"]
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
function login(userName,password){
    let arr = ["Navya", "Jasper", "Jahnavi", "Roshini", "Renuka"]
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] === userName && password === "Emp@123"){
            return "Login Sucessfull..."
        }
        else if ( arr[i] != userName){
            return "Please Signup"
        }
        else if(arr[i] === userName && password != "Emp@123"){
            return "Wrong Password...."
        }
    }
}
console.log(login("Navya","Emp@123"))