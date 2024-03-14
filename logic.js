class Landing{
//property
    dataBase = {
        "Anjana":{username:"Anjana",password:"Anjana@123"},
        "Babu":{username:"Babu",password:"Babu@123"},
        "Naseema":{username:"Naseema",password:"Naseema@123"},
        "Milan":{username:"Milan",password:"Milan@123"},
    }
//methods
    save(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase));
        }
    }
    //get data
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("dataBase"));
    }
    //register
    register(){
        this.getData();
        console.log('inside reg fn');
        let user=regUser.value;
        let pswd=regPswd.value;
        console.log(user,pswd);
        if(user=="" || pswd==""){
            alert("Please fill the form completely")
        }
        else{
            if(user in this.dataBase){
                alert("User already exists")
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                this.save();
                alert('User added successfully')
                //for navigation
                window.location="login.html"
            }
        }
    }

    //login
    login(){
        let luser = loginUser.value;
        let lpswd = loginPswd.value;
        console.log(luser,lpswd);
        this.getData();
        if(luser==""||lpswd==""){
            alert("Please fill the form completely")
        }
        else{
            if(luser in this.dataBase){
                if(this.dataBase[luser].password == lpswd){
                    alert("Login Successful")
                    localStorage.setItem("user",luser)
                    window.location='home.html'
                }
                else{
                    alert("Wrong Usernme or Password")
                }
            }
            else{
                alert("Wrong Username or Password")
            }
        }
    }
}

//object

const obj = new Landing();
obj.getData()