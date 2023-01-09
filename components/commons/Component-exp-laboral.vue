<template>

    <!-- Display only in mobile Device -->
    <div class="row d-block d-sm-none">
        <div class="col-12 mt-4 mb-4 text-center">
            <h3 class="text-umine-primary">{{ $t('expLaboral') }}</h3>
        </div>
        <div class="col-12" v-for="exp in objExpLaboral" :key="exp.year" >
            <div class="row">
                <div class="col-4 offset-4 d-flex justify-content-center mb-4">
                    <div class="yearCircle">{{ exp.year }}</div>
                </div>

                <div class="col-12 mb-5" v-for="position in exp.positions" :key="position.id">
                    <h5 class="text-umine-secondary">{{ position.position }} / {{ position.industry }}</h5>
                    <p class="mb-1"> <b class="text-umine-primary">{{ $t('date_init') }}</b>: {{ position.position_init }}</p>
                    <p> <b class="text-umine-primary">{{ $t('date_end') }}</b>: {{ position.position_end }}</p>
                    <p> {{ position.description }} </p>
                    <div class="row" v-if="(position.functions != undefined && position.functions.length > 0)">
                        <div class="col-12">
                            <h5 class="text-umine-secondary">{{ $t('functions') }}:</h5>
                            <ul class="list-unstyled">
                                <li class="listDecorationBefore" v-for="functions in position.functions" :key="functions.id"> {{ functions.description }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Displan In DESKTOP -->
    <div class="row d-none d-sm-block experienceDecorationLeft">
        <div class="col-12 mt-4 mb-4">
            <h3 class="text-umine-primary">{{ $t('expLaboral') }}</h3>
        </div>
        <div class="col-12" v-for="exp in objExpLaboral" :key="exp.year">
            <div class="row">
                <div class="">
                    <div class="yearCircle">{{ exp.year }}</div>
                </div>
    
                <div class="col-12 mb-5 mx-4" v-for="position in exp.positions" :key="position.id">
                    <h5 class="text-umine-secondary">{{ position.position }} / {{ position.industry }}</h5>
                    <p class="mb-1 d-flex"> 
                        <b class="text-umine-primary">{{ $t('date_init') }}</b>: {{ getMonthYear(position.position_init) }}
                        <span v-if="position.position_end != null">
                            <b class="text-umine-primary"> - {{ $t('date_end') }}</b>: {{ getMonthYear(position.position_end) }}
                        </span>
                        <span v-if="position.position_end == null">
                            <span class="text-umine-primary"><b> - Hasta la fecha</b></span>
                        </span>

                        <span v-if="position.position_end != null">
                            
                            <span class="badge bg-umine-secondary p-2 text-white mx-2"> {{ getPeriodBetween(position.position_init, position.position_end) }} </span>
                        </span>

                        <span v-if="position.institution_id" class="px-1 cursor-pointer" @click="lauchVerifiedAlert()">
                            <CommonsUmineImg url="img/icon_verified.svg" className="img-fluid rounded pl-2" style="width: 22px;" alt="" />
                        </span>
                    </p>
                    <p> {{ position.description }} </p>
                    <div class="row" v-if="(position.functions != undefined && position.functions.length > 0)">
                        <div class="col-12">
                            <h5 class="text-umine-secondary">{{ $t('functions') }}:</h5>
                            <ul class="list-unstyled">
                                <li class="listDecorationBefore" v-for="functions in position.functions"
                                    :key="functions.id"> {{ functions.description }}</li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <h5 class="text-umine-secondary mb-2">{{ $t('competences') }}:</h5>
                            <ul class="px-0">
                                <li v-for="competence in position.competences" :key="competence" class="list-unstyled">
                                    <span style="font-size:18px;"><b> {{ competence.title }}</b><br/></span>
                                    <span><b>Fecha de medición:</b> {{ getMonthYear(competence.measurement) }} <br/></span>
                                    <span class="d-flex">
                                        <b>Nivel obtenido:&nbsp;</b> {{ competence.level }}%  
                                        <span class="badge bg-umine-secondary p-2 text-white mx-2" v-if="competence.level > 100">{{ $t('expert') }}</span>
                                        <span class="badge bg-umine-green p-2 text-white mx-2" v-if="competence.level == 100">{{ $t('developed') }}</span>
                                        <span class="badge bg-umine-developing p-2 text-white mx-2" v-if="competence.level < 100">{{ $t('developing') }}</span>
                                        <span v-if="competence.verification == 'umine'" class="px-1 cursor-pointer" @click="lauchVerifiedCompetence()">
                                            <CommonsUmineImg url="img/icon_verified.svg" className="img-fluid rounded pl-2" style="width: 22px;" alt="" />
                                        </span>
                                        <br/>
                                    </span>
                                    <br>
                                    <p>{{ competence.description }}</p>
                                </li>
                            </ul>
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
            objExpLaboral: [{
                year: '',
                positions: [{
                    id: '',
                    position: '',
                    industry: '',
                    position_init: '',
                    position_end: '',
                    description: '',
                    institution_id:'',
                    functions: [{
                        id: '',
                        description: ''
                    }],
                    competences: [{
                        id: '',
                        title: '',
                        description: '',
                        level: 0,
                        measurement: '',
                        verification: '',
                    }],
                }]
            }]
        }
    },
    methods: {   
        transformObject(obj) {
            const result = [];
            obj.data.forEach(item => {
                const year = item.position_start.split('-')[0];
                let position = result.find(x => x.year === year);
                if (!position) {
                    position = { year, positions: [] };
                    result.push(position);
                }
                position.positions.push({
                    id: item.id,
                    position: item.position,
                    industry: item.industry,
                    position_init: item.position_start,
                    position_end: item.position_end,
                    description: item.description,
                    institution_id: item.institution_id,
                    functions: item.functions.map(functionItem => ({
                        id: functionItem.id,
                        description: functionItem.function
                    })),
                    competences: item.competences.map(competenceItem => ({
                        id: competenceItem.id,
                        title: competenceItem.title,
                        description: competenceItem.description,
                        level: parseInt(competenceItem.compliance),
                        measurement: competenceItem.measurement,
                        verification: competenceItem.verification
                    }))
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

        lauchVerifiedCompetence() {
            Swal.fire({
                title: 'Competencia verificada por UMINE',
                html: 'Esta competencias es validada por el empleador a través de su ingreso a nuestra plataforma <br> <a href="#">Deseas obtener mas información sobre UMINE</a>',
                imageUrl: 'img/icon_verified.svg',
                imageWidth: 50,
                imageHeight: 50,
                imageAlt: 'Custom image',
            });
        },

        getPeriodBetween(date1, date2) {
            const start = new Date(date1);
            const end = new Date(date2);

            const diff = end.getTime() - start.getTime();
            const diffInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

            if (diffInMonths < 12) {
                return `${diffInMonths} meses`;
            } else {
                const diffInYears = Math.floor(diffInMonths / 12);
                const remainingMonths = diffInMonths % 12;
                if (remainingMonths === 0) {
                    return `${diffInYears} años`;
                } else {
                    return `${diffInYears} años y ${remainingMonths} meses`;
                }
            }
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

            fetch("http://127.0.0.1:8000/api/experience/get", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const obj = JSON.parse(result);
                    this.objExpLaboral = this.transformObject(obj);
                })
                .catch(error => console.log('error', error));
            
        }
    },
    beforeMount() { 
        this.fetchObtencionDatos();
    }
}

</script>
