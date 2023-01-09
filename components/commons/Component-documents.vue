<template>
    <div class="row d-none d-sm-block experienceDecorationLeft mb-5">
        <div class="col-12 mt-4 mb-4">
            <h3 class="text-umine-primary">Documentos</h3>
        </div>
        <div class="col-12 mx-4 mt-3" v-for="document in documents" :key="document">
          <div class="row">
                <div class="col-9">
                    <h5 class="text-umine-secondary">{{ document.document_name }}</h5>
                    <p><b>Fecha:</b> {{ document.document_date }}</p>
                    <p v-if="document.document_expiration_date != null"><b>Fecha expiración</b> {{ document.document_expiration_date }}</p>
                    <p v-if="document.document_description != null"><b>Descripción</b> <br/>{{ document.document_description }}</p>
                </div>
                <div class="col-3 text-center">
                    <img :src="'https://image-charts.com/chart?chs=150x150&cht=qr&chl=' + document.document_url +'&choe=UTF-8' "
                        class="img-fluid" alt="">
                    <div v-if="document.document_type == 'pdf'">
                        <button type="button" class="btn btn-link text-decoration-none text-umine-secondary text-center" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-pdf-' + document.id ">
                            Ver Documento
                        </button>
                        <div class="modal fade" :id="'staticBackdrop-pdf-' + document.id" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-umine-secondary" id="staticBackdropLabel">{{ document.document_name }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <embed :src="document.document_url" type="application/pdf" width="100%" height="600px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="document.document_type == 'img'">
                        <button type="button" class="btn btn-link text-decoration-none text-umine-secondary text-center" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-img-' + document.id ">
                            Ver Documento
                        </button>
                        <div class="modal fade" :id="'staticBackdrop-img-' + document.id" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-umine-secondary" id="staticBackdropLabel">{{ document.document_name }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img :src="document.document_url" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            documents: [
                {
                    id: null,
                    created_at: null,
                    updated_at: null,
                    user_id: null,
                    document_name: null,
                    document_type: null,
                    document_url: null,
                    document_status: null,
                    document_description: null,
                    document_date: null,
                    document_expiration_date: null
                }
            ],
        }
    },
    methods:{
        fetchGetDocuments() {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/api/documents/get", requestOptions)
                .then(response => response.json())
                .then(result => this.processData(result))
                .catch(error => console.log('error', error));
        },
        processData(result) {
            console.log(result);
            this.documents = result.data;
        },
    },
    mounted() {
        this.fetchGetDocuments();
    },
}


</script>