<template>
    <div class="container">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-10 offset-1 col-md-6 offset-md-3 mt-5 pt-5">
                    <CommonsUmineImg url="img/logowhite.png" className="img-fluid mt-5" alt="" />
                    <p class="text-white float-end">{{ $t('hojadevida') }}</p>
                </div>
                <div class="col-10 offset-1 col-md-10 mt-4 mb-2">
                    <label for="" class="text-white">Email</label>
                    <input type="text" class="form-control form-control-lg" v-model="registerdata.email"
                        :placeholder="$t('usuario')">
                </div>
                <div class="col-10 offset-1 col-md-5 mt-4 mb-2">
                    <label for="" class="text-white">Nombre</label>
                    <input type="password" class="form-control form-control-lg" v-model="registerdata.fist_name"
                        :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 col-md-5 mt-4 mb-2">
                    <label for="" class="text-white">Apellido</label>
                    <input type="password" class="form-control form-control-lg" v-model="registerdata.last_name"
                        :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 offset-1 col-md-5 mt-4 mb-2">
                    <label for="" class="text-white">Contraseña</label>
                    <input type="password" class="form-control form-control-lg" v-model="registerdata.pass"
                        :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 col-md-5 mt-4 mb-2">
                    <label for="" class="text-white">Verifica tu contraseña</label>
                    <input type="password" class="form-control form-control-lg" v-model="registerdata.verifiesPassword"
                        :placeholder="$t('contrasegna')">
                </div>
                <div class="col-10 col-md-10 offset-1 mt-5 d-grid">
                    <button class="btn btn-secondary btn-lg" @click="RegisterAction()">Registrarme</button>
                    <NuxtLink to="/recovery" class="text-white mt-3 text-center">Ya tengo una cuenta</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registerdata: {
                email: '',
                fist_name: '',
                last_name: '',
                pass: '',
                verifiesPassword: '',
            },
            urlParam: this.$route.query.urlParam,

        }
    },
    methods: {

        RegisterAction() {
            console.log(this.$URLParams('hash'));
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            var formdata = new FormData();
            formdata.append("email", this.registerdata.email);
            formdata.append("name", this.registerdata.fist_name);
            formdata.append("password", this.registerdata.pass);
            formdata.append("password_confirmation", this.registerdata.verifiesPassword);
            formdata.append("hash", this.$URLParams('hash'));
            formdata.append("client_id", "3");
            formdata.append("client_secret", "pU9VyoBsRdUcULaou0MDNLb18KSdArs8SLAGJGWG");
            formdata.append("last_name", this.registerdata.last_name);
            formdata.append("avatar", "https://example.com/image.jpg");
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/register", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
}
</script>