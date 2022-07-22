<template>
        <div class="form">
            <form @submit.prevent="addUser">
                <div class="input"><input type="text" placeholder="First Name" v-model="firstName"></div>
                <div class="input"><input type="text" placeholder="Last Name" v-model="lastName"></div>
                <div class="input"><input type="text" placeholder="Comment" v-model="comment"></div>
                <button type="submit">ADD</button>
            </form>
        </div>    
</template>

<script>

export default {
    name:'FormInput',
    emits:"add-data",
    data() {
        return{
            firstName:'',
            lastName:'',
            comment:''
        }
    },
    methods:{
        addUser(){
            this.$emit("add-data", this.firstName, this.lastName, this.comment);
            this.firstName = '';
            this.lastName = '';
            this.comment = '';
        }
    }
}
</script>

