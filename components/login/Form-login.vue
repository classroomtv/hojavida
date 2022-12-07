<template>
    <div class="container">
       <div class="row">
        <div class="col-10 offset-1 mt-5 pt-5">
            <img src="img/logowhite.png" class="img-fluid" alt="">
            <p class="text-white float-end">Hoja de vida </p>
            <h1 class="text-white">
                {{ $t('say') }}
            </h1>
        </div>
        <div class="col-10 offset-1 mt-2">
            <input type="text" class="form-control form-control-lg" v-model="accessData.user" placeholder="Username">
        </div>
        <div class="col-10 offset-1 mt-4">
            <input type="password" class="form-control form-control-lg" v-model="accessData.pass" placeholder="Password">
        </div>
        <div class="col-10 offset-1 mt-5 pt-5 d-grid">
           <button class="btn btn-secondary btn-lg" @click="hola()">Log in</button>
        </div>
       </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                accessData: {
                    user:'',
                    pass:'',
                }
            }
        },
        methods:{
            hola(){
                console.log(this.accessData);
            }
        }
    }


</script>