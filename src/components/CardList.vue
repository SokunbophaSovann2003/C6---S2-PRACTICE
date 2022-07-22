<template>
        <div class="info">
            <div class="user_info">
               <div class="card">
                    <div class="name"><h3>{{user.firstname}} {{user.lastname}}</h3></div>
                    <div class="comment"><p>{{user.comment}}</p></div>
                </div> 
            </div>
        </div>
</template>

<script>
export default {
    props:{
        user:Object,
    },
}
</script>