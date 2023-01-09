<template>
    <div>
        <CommonsComponentHead />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <NuxtLink class="btn btn-link text-decoration-none d-flex align-items-center text-umine-secondary" to="/sheetslifes">
                        <CommonsIcon name="arrow-left" className="text-green-500 text-umine-secondary" style="font-size: 30px;" /> 
                        Volver
                    </NuxtLink>
                </div>
                <div class="col-12 pt-4">
                    <h3>Crear hoja de vida</h3>
                    <hr>
                </div>

                <div class="vh-100">
                    <div class="row">
                        <div class="col-md-6 mb-5 mt-4">
                            <label for="">Nombre</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Nombre de esta hoja de vida" name="" id="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h4>Datos personales</h4>
                            <hr class="gray">
                            <span class="text-umine-dimgray fw-light">Estos datos pueden ser editados desde la configuración de tu perfil</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pt-4">
                            <div class="row">
                                <div class="col-md-2">
                                    <CommonsUmineImg url="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" className="img-fluid d-flex justify-content-center rounded" />
                                </div>
                                <div class="col-md-10">
                                    <h3>{{ people.fisrt_name  + " " + people.last_name}}</h3>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4 d-flex flex-column"> 
                                            <span><b>Fecha Nacimiento:</b> 13 Agosto 2023</span><br/>
                                            <span><b>RUT:</b> 19017728-9</span><br />
                                            <span><b>Dirección:</b> Moneda 340, Chile</span><br />
                                        </div>
                                        <div class="col-md-4 d-flex flex-column"> 
                                            <span><b>Email:</b> k.kariman@gmail.com</span><br />
                                            <span><b>Telefono:</b> 977842252</span><br />
                                            <span><b>Profesión:</b> Abogado</span><br />
                                        </div>
                                        <div class="col-md-4 d-flex flex-column"> 
                                            <span>
                                                <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary" style="font-size: 20px;" />
                                                <span>¿Deseas que tu fotografia sea visible?</span> 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <span>Sobre mi (Opcional)</span>
                                    <textarea class="form-control" placeholder="Describete de la mejor forma, resaltando tus fortalezas y habilidades blandas" rows="4"></textarea>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h3>En la web</h3>
                            <hr class="gray">
                            <span>Selecciona las redes sociales que apareceran en tu hoja de vida</span>
                            <div class="row">
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Facebook</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Linkedin</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Twitter</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Tu sitio web</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Instagram</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Github</span>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Behance</span>
                                    </span>
                                </div>
                                <div class="col-md-3 border rounded">
                                    <span>Crear nuevo enlace</span><br/>
                                    <span>
                                        <CommonsIcon name="checkbox-blank-outline" className="text-green-500 text-umine-secondary"
                                            style="font-size: 20px;" />
                                        <span>Behance</span>
                                    </span>
                                </div>
                            </div>
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
    data() {
        return {
            script: [
                { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" },
            ],
            people: {
                fisrt_name: "Juan",
                last_name: "Perez",
                email: "",
            }
        }

    },
    methods: {



    },
    mounted() {
    }
}
</script>