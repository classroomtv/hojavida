<template>

    <!-- Displan In DESKTOP -->
    <div class="row d-none d-sm-block experienceDecorationLeft">
        <div class="col-12 mt-4 mb-4">
            <h3 class="text-umine-primary">{{ $t('expTraining') }}</h3>
        </div>
        <div class="col-12" v-for="exp in objExpTraining" :key="exp.year">
            <div class="row">
                <div class="">
                    <div class="yearCircle">{{ exp.year }}</div>
                </div>

                <div class="col-12 mb-5 mx-4" v-for="training in exp.trainings" :key="training.id">
                    <div class="row">
                        <div class="col-md-9">
                            <h5 class="text-umine-secondary">{{ training.title }}</h5>
                            <p><b>Nota: </b> {{ training.grade }}</p>
                            <p><b>Fecha término: </b> {{ training.date_end }}</p>
                            <p><b>Industria: </b> {{ training.industry }}</p>
                            <p><b>{{ $t('objetives') }}</b></p>
                            <p>{{ training.objetive }}</p>
                        </div>
                        <div class="col-md-3 text-center" v-if="training.file_url != null">
                            <img :src="'https://image-charts.com/chart?chs=150x150&cht=qr&chl=' + training.file_url +'&choe=UTF-8' " class="img-fluid" alt="">
                            <div v-if="training.file_type == 'pdf'">
                                <button type="button" class="btn btn-link text-decoration-none text-umine-secondary" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop-pdf-' + training.id ">
                                    Ver Documento
                                </button>
                                <div class="modal fade" :id="'staticBackdrop-pdf-' + training.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5 text-umine-secondary" id="staticBackdropLabel">{{ training.title }}</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <embed :src="training.file_url" type="application/pdf" width="100%" height="600px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="training.file_type == 'img'">
                                <button type="button" class="btn btn-link text-decoration-none text-umine-secondary" data-bs-toggle="modal"
                                    :data-bs-target="'#staticBackdrop-img-' + training.id ">
                                    Ver Documento
                                </button>
                                <div class="modal fade" :id="'staticBackdrop-img-' + training.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5 text-umine-secondary" id="staticBackdropLabel">{{ training.title }}</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <img :src="training.file_url" class="img-fluid"/>
                                            </div>
                                        </div>
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



import Swal from 'sweetalert2';
export default {
    data() {
        return {
            objExpTraining: [{
                year: '2021',
                trainings: [{
                    id: '',
                    title: '',
                    grade: '',
                    date_end: '',
                    industry: '',
                    objetive: '',
                    file_type: '',
                    file_url: '',
                }]
            }]
        }
    },
    methods: {
        transformObject(obj) {
            const result = [];
            obj.data.forEach(item => {
                const year = item.end_date.split('-')[0];
                let training = result.find(x => x.year === year);
                if (!training) {
                    training = { year, trainings: [] };
                    result.push(training);
                }
                training.trainings.push({
                    id: item.id,
                    title: item.title,
                    grade: item.grade,
                    date_end: item.end_date,
                    industry: '',
                    objetive: item.description,
                    file_type: item.file_type,
                    file_url: item.backrest,
                });
            });
            return result;
        },

        lauchVerifiedAlert() {
            Swal.fire({
                title: 'Cargo verificado por UMINE',
                html: 'Este icono representa que el cargo fue verificado por UMINE, ya que fue ingresado en nuestra plataforma por el mismo empleador <br> <a href="#">Deseas obtener mas información sobre UMINE</a>',
                imageUrl: 'img/icon_verified.svg',
                imageWidth: 50,
                imageHeight: 50,
                imageAlt: 'Custom image',
            });
        },

        getMonthYear(date) {
            const months = [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ];
            const year = date.split("-")[0];
            const monthIndex = parseInt(date.split("-")[1], 10) - 1;
            const month = months[monthIndex];
            return `${month}-${year}`;
        },

        fetchObtencionDatos() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("http://127.0.0.1:8000/api/training/get", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const obj = JSON.parse(result);
                    console.log(this.transformObject(obj));
                    this.objExpTraining = this.transformObject(obj);
                })
                .catch(error => console.log('error', error));
        },
    },
    beforeMount() {
        this.fetchObtencionDatos();
    },
    mounted() {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
}

</script>
