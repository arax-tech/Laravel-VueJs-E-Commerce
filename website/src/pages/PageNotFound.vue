<template>
    <!-- Start breadcrumb section -->
    <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="breadcrumb__content text-center">
                        <h1 class="breadcrumb__content--title text-white mb-25">Error 404</h1>
                        <ul class="breadcrumb__content--menu d-flex justify-content-center">
                            <li class="breadcrumb__content--menu__items"><RouterLink class="text-white" to="/">Home</RouterLink></li>
                            <li class="breadcrumb__content--menu__items"><span class="text-white">Error 404</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End breadcrumb section -->

    <!-- Start error section -->
    <section class="error__section section--padding">
        <div class="container">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="error__content text-center">
                        <img class="error__content--img mb-50" src="assets/img/other/404-thumb.png" alt="error-img">
                        <h2 class="error__content--title">Opps ! We,ar Not Found This Page </h2>
                        <p class="error__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>
                        <RouterLink class="error__content--btn primary__btn" to="/">Back To Home</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End error section -->


</template>