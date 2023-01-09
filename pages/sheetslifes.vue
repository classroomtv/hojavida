<template>
    <div>
        <CommonsComponentHead />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <NuxtLink class="btn btn-link text-decoration-none d-flex align-items-center text-umine-secondary" to="/Home"> 
                        <CommonsIcon name="arrow-left" className="text-green-500 text-umine-secondary" style="font-size: 30px;" /> 
                        Volver
                    </NuxtLink>
                </div>
                <div class="col-12 pt-4">
                    <h3>Mis hojas de vida</h3>
                    <hr>
                </div>
                <div class="row d-none d-sm-block">
                    <div class="col-12 pt-1 mb-4">
                        <NuxtLink to="/createsheetslifes" class="btn btn-secondary float-end">Crear hoja de vida</NuxtLink>
                    </div>
                </div>
                <div class="vh-100">
                    <div class="col-12" v-if="listado.length > 0">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item" v-for="item in listado" :key="item">
                                <h2 class="accordion-header d-grid" :id="'flush-h-' + item.id">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#flush-c-' + item.id" aria-expanded="false" :aria-controls="'flush-c-' + item.id">
                                        <div class="row d-flex align-items-center" style="width:95%;">
                                            <div class="col-md-4 d-flex align-items-center">
                                                   <span class="d-none d-sm-block">
                                                    <CommonsIcon name="account-circle-outline" className="text-green-500 text-umine-primary icon-32" />
                                                   </span>
                                                   <span class="px-2 text-umine-primary fw-normal"><b>{{ item.title }}</b></span>
                                            </div>
                                            <div class="col-md-3 d-flex align-items-center">
                                                <span class="text-umine-primary" style="font-size: 13px;">
                                                    <span class="fw-semibold">Ultima Actualización:</span> {{ formatDate(item.updated_at) }}
                                                </span>
                                            </div>
                                            <div class="col-md-2 d-flex align-items-center">
                                                <span class="text-umine-primary d-flex align-items-center" style="font-size: 13px;">
                                                    <CommonsIcon name="eye" className="text-green-500 text-umine-gray icon-24 px-2" /> {{ item.views }} Visitas
                                                </span>
                                            </div>
                                            <div class="col-md-3 d-flex align-items-center justify-content-evenly" style="border-right: 1px solid #DEE2E6;">
                                                <NuxtLink to="#" class="btn btn-link text-decoration-none text-umine-secondary d-none d-sm-block">Ver detalles</NuxtLink>
                                                <CommonsIcon name="pencil" class="text-umine-secondary d-none d-sm-block icon-24"></CommonsIcon>
                                                <CommonsIcon name="delete" class="text-umine-danger d-none d-sm-block icon-24"></CommonsIcon>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div :id="'flush-c-' + item.id" class="accordion-collapse collapse" :aria-labelledby="'flush-h-' + item.id"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
                                        filled with some actual content.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-12 text-center pt-5" v-if="listado.length == 0">
                        <h2 class="text-umine-gray fw-light">
                            
                                <CommonsIcon name="robot-excited-outline" className="text-green-500 text-umine-gray icon-64" />
                            <br />

                            Aún no has creado hojas de vida
                        </h2>
                    </div>


                    <div class="row d-block d-sm-none">
                        <div class="col-12 mb-4 mt-5 d-grid">
                            <NuxtLink to="/createsheetslifes" class="btn btn-secondary float-end btn btn-lg">Crear hoja de vida</NuxtLink>
                        </div>
                    </div>
                </div>
                
            </div>
            <CommonsComponentBottomMenu active="profile" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            script: [
                { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" },
            ],
            profile: {
                id : null,
                name : null,
                email : null,
                email_verified_at : null,
                created_at : null,
                updated_at : null,
                last_name : null,
                birthdate : null,
                phone : null,
                address : null,
                dni : null,
                about_me : null,
                avatar : null,
                occupation : null,
            },
            listado: [
                {
                    id:null,
                    user_id:null,
                    title:null,
                    status:null,
                    type:null,
                    created_at:null,
                    updated_at:null,
                    views:null
                }
            ],
        }
        
    },
    methods: {

        fetchGetAll() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/api/cv/get", requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.processData(result);
                 })
                .catch(error => console.log('error', error));
        },

        processData(data) {
            this.listado = JSON.parse(data).data;
        },


        fetchGetProfile() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/api/profile/info", requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.processDataProfile(result);
                 })
                .catch(error => console.log('error', error));
            
        },  
        processDataProfile(data) {
            this.profile = JSON.parse(data).data;
        },

        formatDate(date) {
            const nueva_fecha = new Date(date).toLocaleString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });
            return nueva_fecha;
        }
        
    },
    mounted() {
        this.fetchGetAll();
    }
}
</script>