<template>
    <div>
        <!-- Display in Mobile -->

        <div class="bg-umine pt-3 pb-5 pl-5 d-block d-sm-none">
            <div class="row container">
                    <div class="col-12 text-center" style="padding-left: 25px;">
                        <h1 class="text-white">{{$t('bienvenido')}}</h1>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum optio animi inventore quis dolorem totam illum quas vel!</p>
                    </div>
            </div>
        </div>

        <!-- Display on desktop -->
        <div class="container">
            <div class="pt-3 mt-3 pb-5 px-5 d-none d-sm-block bg-umine rounded" style="background-image: url('/img/bgBannerHome.png'); background-size: contain; background-position: right; background-repeat: no-repeat;">
                <div class="row container">
                    <div class="col-12" style="padding-left: 25px;">
                        <h1 class="text-white">{{$t('bienvenido')}}</h1>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae incidunt eum
                            optio animi inventore quis dolorem totam illum quas vel!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
