<template>
    <div>
        <CommonsComponentHead />
        <div class="container">
            <div class="row">
                <div class="col-12 pt-4">
                    <h3>Mi perfil</h3>
                    <hr>
                </div>
                <div class="col-12 col-md-4">
                    <ProfileChangeImage />
                </div>
                <div class="col-12">
                    <h4>Datos personales</h4>
                    <hr>
                    <ProfilePersonalInformation />
                </div>
            </div>
            <CommonsComponentBottomMenu active="profile" />
        </div>



    </div>
</template>
<script>
export default {
    head() {
        return {
            script: [
                { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" },
            ],
        }
    },
}
</script>

<style>

</style>