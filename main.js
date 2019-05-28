// class
    function userModel(){
        this.firstName=undefined;
        this.lastName=undefined;
    
    };

    let userModelObj=new userModel();
        userModelObj.firstName="Kishor";
        userModelObj.lastName="Naik";

    // Set property
        userModel.prototype.age=34;
        
        console.log(userModelObj.firstName);
        console.log(userModelObj.lastName);
        console.log(userModelObj.age);

    // set Method
        userModel.prototype.display=function(){
            return `full Name : ${this.firstName} ${this.lastName}`;
        };

        console.log(userModelObj.display());





