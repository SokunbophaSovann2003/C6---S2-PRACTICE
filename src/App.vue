<template>
  <section id="app">
  <nav-bar></nav-bar>
  <form-input @add-data="addFriend"></form-input>
  <card-list v-for="user of users" :key="user" :user="user"></card-list>
  </section>
</template>

<script>
export default{
    name:'App',
    data(){
        return{
            users: [
                {
                    firstname: 'manuel',
                    lastname: 'Manuel Lorenz',
                    comment: '01234 5678 991',
                },
                {
                    firstname: 'manuel',
                    lastname: 'Manuel Lorenz',
                    comment: '01234 5678 991',
                },
            ],
        }
    },
    methods:{
        addFriend(fName, lName, comment){
            this.users.push({firstname:fName, lastname:lName, comment:comment})
        }
    }

}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

#app{
    margin: 0;
    padding: 0;
}
.nav_bar{
    margin: 0;
    margin-top: -16px;
    background-color: palevioletred;
}
.nav_bar ul{
    padding: 0;
    display: flex;
}
.nav_bar ul li{
    list-style: none;
    padding: 12px 20px;
    color: white;
    cursor: pointer;
}

.form{
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 30px;
}

form{
    padding: 10px;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

form .input input{
    padding: 10px;
    width: 400px;
    margin: 5px;
}

form button{
    padding: 13px;
    width: 425px;
    margin: 20px 5px;
    background-color: burlywood;
    border: none;
}

.info{
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
}
.info .user_info .card{
    padding: 10px;
    width: 440px;
    margin: 10px 5px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.info .user_info .card .name , .comment{
    padding: 5px 5px;
}
</style>
