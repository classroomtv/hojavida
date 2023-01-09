<template>
    <div class="bg-umine pt-3 pb-3 pl-5">
       <div class="row container-fluid">
        <div class="col-5 col-md-1 d-flex justify-content-center align-items-center">
            <CommonsUmineImg url="img/logowhite.png" className="img-fluid" alt="" />
        </div>
        <div class="col-1 offset-6 col-md-1 offset-md-10 d-flex justify-content-end align-items-center">
            <div class="dropdown">
                <button class="btn btn-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <CommonsUmineImg url="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg" className="img-fluid rounded-circle" style="max-width: 45px;" alt="" />
                </button>
                <ul class="dropdown-menu">
                    <li><span class="dropdown-item">Nombre del usuario</span></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><NuxtLink to="/profile" class="dropdown-item">Mi Perfil</NuxtLink></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
       </div>
    </div>
</template>


<script>
    
</script>