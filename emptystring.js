let user={
    user_name:"amu",
    surname:"a"
}
 user.user_name="amu";
 user.surname="";
 delete user.surname;

 for(let name in user)
 {
     console.log(user[name]);
 }
