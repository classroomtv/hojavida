<template>
    
    <div class="row mb-5">
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">Nombres</label>
            <input class="form-control form-control-sm" type="text" id="InputName" maxlength="255" v-model="personalInfo.name">
        </div>
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">Apellidos</label>
            <input class="form-control form-control-sm" type="text" id="InputName" maxlength="255" v-model="personalInfo.last_name">
        </div>
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">RUT/DNI</label>
            <input class="form-control form-control-sm" type="text" id="InputName" maxlength="255" v-model="personalInfo.dni">
        </div>
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">Email</label>
            <input class="form-control form-control-sm" type="email" id="InputName" maxlength="255" v-model="personalInfo.email">
        </div>
        <div class="col-12 col-md-6">
            <label for="InputName" class="mb-1 mt-5">Direccion</label>
            <input class="form-control form-control-sm" type="text" id="InputName" maxlength="255" v-model="personalInfo.address">
        </div>
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">teléfono</label>
            <input class="form-control form-control-sm" type="text" id="InputName" maxlength="255" v-model="personalInfo.phone">
        </div>
        <div class="col-12 col-md-3">
            <label for="InputName" class="mb-1 mt-5">Fecha Nacimiento</label>
            <input class="form-control form-control-sm" type="date" id="InputName" maxlength="255" v-model="personalInfo.birthdate">
        </div>
        <div class="col-12 col-md-9 mt-5">
            <h4>Sobre mi</h4>
            <textarea name="" class="form-control" id="" rows="5" v-model="personalInfo.about_me"></textarea>
        </div>

        <div class="col-12 mt-5 mb-5">
            <button class="btn btn-secondary float-end">Guardar</button>
        </div>
    </div>

</template>


<script>

export default {
    name: "PersonalInformation",
    data() {
        return {
            personalInfo: {
                name: null,
                last_name:null,
                email: null,
                email_verified_at: null,
                birthdate: null,
                phone: null,
                address: null,
                dni: null,
                about_me: null,
                avatar: null,
                occupation: null
            }
        }
    },
    methods: {

        fetchGetPersonalInfo() {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/api/profile/info", requestOptions)
                .then(response => response.json())
                .then(result => this.processInformation(result))
                .catch(error => console.log('error', error));
        },

        processInformation(data) {
            console.log(data);
            data = data.data;
            this.personalInfo.name = data.name;
            this.personalInfo.last_name = data.last_name;
            this.personalInfo.email = data.email;
            this.personalInfo.email_verified_at = data.email_verified_at;
            this.personalInfo.birthdate = data.birthdate;
            this.personalInfo.phone = data.phone;
            this.personalInfo.address = data.address;
            this.personalInfo.dni = data.dni;
            this.personalInfo.about_me = data.about_me;
            this.personalInfo.avatar = data.avatar;
            this.personalInfo.occupation = data.occupation;

        }
        
    },
    mounted() {
        this.fetchGetPersonalInfo();
    }
}


</script>