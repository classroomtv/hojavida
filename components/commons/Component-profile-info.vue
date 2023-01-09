<template>
    <!-- Only on Mobile -->
    <div class="pt-3 pb-5 d-block d-sm-none">
       <div class="row container">
            <div class="col-6 offset-3 d-flex justify-content-center">
                <CommonsUmineImg url="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" className="img-fluid rounded" alt="" />
            </div>
            <div class="col-12 text-center mt-4">
                <h3>{{ profileData.first_name + ' ' + profileData.last_name }}</h3>
                <h5>{{ profileData.profesion}}</h5>
            </div>
            <div class="col-12">
                <div class="row d-flex justify-content-center text-center">
                    <div class="col-2" v-for=" social in socialNetworks " :key="social.name">
                        <img :src=" 'img/' + social.icon" :alt="social.name" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12 text-center text-umine-primary">
                <p v-if="profileData.birthday_date != '' "> <b>{{ $t('FechaNacimiento') }}:</b> {{profileData.birthday_date}} </p>
                <p v-if="profileData.dni != '' "> <b>{{ $t('DNI') }}:</b> {{profileData.dni}} </p>
                <p v-if="profileData.address != '' "> <b>{{ $t('Direccion') }}:</b> {{profileData.address}} </p>
                <p v-if="profileData.email != '' "> <b>{{ $t('Email') }}:</b> {{profileData.email}} </p>
                <p v-if="profileData.phone != '' "> <b>{{ $t('Fono') }}:</b> {{profileData.phone}} </p>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12">
                <h3 class="text-center text-umine-primary">{{ $t('SobreMi') }}</h3>
                <p>{{ profileData.about }}</p>
            </div>
       </div>
    </div>

    <!-- Only on web -->
    <div class="pt-3 pb-5 d-none d-sm-block">
        <div class="row container">
            <div class="col-6">
                <CommonsUmineImg url="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
                    className="img-fluid rounded" alt="" />
            </div>
            <div class="col-12 mt-4">
                <h3>{{ profileData.first_name + ' ' + profileData.last_name }}</h3>
                <h5>{{ profileData.profesion}}</h5>
            </div>
            <div class="col-12">
                <div class="row d-flex">
                    <div class="col-2" v-for=" social in socialNetworks " :key="social.name">
                        <img :src=" 'img/' + social.icon" :alt="social.name" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12">
                <p v-if="profileData.birthday_date != null "> <b>{{ $t('FechaNacimiento') }}:</b> {{profileData.birthday_date}} </p>
                <p v-if="profileData.dni != null "> <b>{{ $t('DNI') }}:</b> {{profileData.dni}} </p>
                <p v-if="profileData.address != null "> <b>{{ $t('Direccion') }}:</b> {{profileData.address}} </p>
                <p v-if="profileData.email != null "> <b>{{ $t('Email') }}:</b> {{profileData.email}} </p>
                <p v-if="profileData.phone != null "> <b>{{ $t('Fono') }}:</b> {{profileData.phone}} </p>
            </div>
            <div class="col-12">
                <hr>
            </div>
            <div class="col-12" v-if="profileData.about != null && profileData.about != ''">
                <h3 class="text-umine-primary">{{ $t('SobreMi') }}</h3>
                <p>{{ profileData.about }}</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                profileData: {
                    first_name:'Karina Andrea',
                    last_name: 'Kariman',
                    profesion: 'Contador auditor',
                    birthday_date: '13/08/1987',
                    dni: '19.017.728-9',
                    address: 'Santiago, Chile',
                    email: 'k.kariman@uminetest.com',
                    phone: '+569 77842252',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum optio animi inventore quis dolorem totam illum quas vel!'
                },
                socialNetworks: [
                    {
                        name: 'Facebook',
                        link:'http://algo.com',
                        icon:'fb_logo.png',
                    },
                    {
                        name: 'Instagram',
                        link:'http://algo.com',
                        icon:'ig_logo.png',
                    },
                    {
                        name: 'Twitter',
                        link:'http://algo.com',
                        icon:'tw_logo.png',
                    }
                ]
            }
        },
        methods:{
            transformObject(obj) {
                const data = obj.data;
                return {
                    first_name: data.name.split(" ")[0],
                    last_name: data.last_name,
                    profesion: data.occupation,
                    birthday_date: data.birthdate,
                    dni: data.dni,
                    address: data.address,
                    email: data.email,
                    phone: data.phone,
                    about: data.about_me
                };
            },
            fetchObtencionDatos() {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://127.0.0.1:8000/api/profile/info", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        const obj = JSON.parse(result);
                        this.profileData = this.transformObject(obj);
                    })
                    .catch(error => console.log('error', error));

            }
        },
        beforeMount() {
            this.fetchObtencionDatos();
        }
    }
</script>
