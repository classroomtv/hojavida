<template>
    <div class="container">
       <div class="row">
            <div class="col-12">
                <div class="col-10 offset-1 col-md-4 mt-5 pt-5">
                    <CommonsUmineImg url="img/logowhite.png" className="img-fluid mt-5" alt=""/>
                    <p class="text-white float-end">{{ $t('hojadevida') }}</p>
                </div>
                <div class="col-10 offset-1 col-md-4 mt-5 text-center">
                    <p class="text-white">{{$t('ingUsuarioyContrasegna')}}</p>
                </div>
                <div class="col-10 offset-1 col-md-4 mt-2">
                    <input type="text" class="form-control form-control-lg" v-model="accessData.user" :placeholder="$t('usuario')">
                </div>
                <div class="col-10 offset-1 col-md-4 mt-4">
                    <input type="password" class="form-control form-control-lg" v-model="accessData.pass" :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 offset-1 col-md-4 mt-5 d-grid">
                <button class="btn btn-secondary btn-lg" @click="LogInAction()">Log in</button>
                <NuxtLink to="/recovery" class="text-white mt-3 text-center">{{$t('olvidasteUsuarioContraseña')}}</NuxtLink>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                accessData: {
                    user:'fake10user@algo.com',
                    pass:'9871238898',
                }
            }
        },
        methods:{
            LogInAction() {

                var formdata = new FormData();
                formdata.append("grant_type", "password");
                formdata.append("username", this.accessData.user);
                formdata.append("password", this.accessData.pass);
                formdata.append("client_id", "3");
                formdata.append("client_secret", "pU9VyoBsRdUcULaou0MDNLb18KSdArs8SLAGJGWG");

                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                fetch("http://127.0.0.1:8000/oauth/token", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.access_token != undefined) {
                            localStorage.setItem('token', result.access_token);
                            this.$router.push('/home');
                        } else {
                            alert('Usuario o contraseña incorrectos');
                        }
                    }

                    )
                    .catch(error => console.log('error', error));
            }
        }
    }
</script>