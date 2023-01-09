<template>
    <div>
        <CommonsComponentHead />
        <CommonsComponentBanner />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <NuxtLink to="/sheetslifes" class="float-end mt-4 pb-2 btn btn-secondary d-none d-sm-block">{{ $t('MisHojasDeVida') }}</NuxtLink>
                    <NuxtLink to="/sheetslifes" class="float-end pt-4 pb-2 text-decoration-none text-umine-secondary d-block d-sm-none">{{ $t('MisHojasDeVida') }}</NuxtLink>
                </div>
                <div class="col-12">
                    <hr>
                </div>
                <div class="col-12 col-md-4">
                    <h1 class="text-umine-primary">{{ $t('MiInformacion')}}</h1>
                    <CommonsComponentProfileInfo />
                </div>
                <div class="col-12 col-md-8 bg-gray">
                    <CommonsComponentExpLaboral />
                    <ComponentTraining />
                    <CommonsComponentDocuments />

                </div>
            </div>
            <CommonsComponentBottomMenu  active="home"/>
        </div>

        

    </div>
</template>
<script>
import ComponentTraining from '~~/components/commons/Component-training.vue';

  export default {
    head() {
          return {
              script: [
                  { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" },
              ],
        }
    },
    components: { ComponentTraining }
}
</script>

<style>

</style>