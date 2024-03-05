<script setup>
import Header from './include/Header.vue';
import Footer from './include/Footer.vue';
import { onMounted } from 'vue';


onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.async = true;
    themeScript.setAttribute("src", "/src/assets/js/vendor/popper.js");
    document.body.appendChild(themeScript);
});
onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.async = true;
    themeScript.setAttribute("src", "/src/assets/js/vendor/bootstrap.min.js");
    document.body.appendChild(themeScript);
});
onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.setAttribute("src", "/src/assets/js/plugins/swiper-bundle.min.js");
    document.body.appendChild(themeScript);
});
onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.setAttribute("src", "/src/assets/js/plugins/glightbox.min.js");
    document.body.appendChild(themeScript);
});
onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.setAttribute("src", "/src/assets/js/script.js");
    document.body.appendChild(themeScript);
});

</script>
<template>
    <!-- Start preloader -->
    <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
            <div class="animation-preloader">
                <div class="spinner"></div>
                <div class="txt-loading">
                    <span data-text-preloader="L" class="letters-loading">
                        L
                    </span>

                    <span data-text-preloader="O" class="letters-loading">
                        O
                    </span>

                    <span data-text-preloader="A" class="letters-loading">
                        A
                    </span>

                    <span data-text-preloader="D" class="letters-loading">
                        D
                    </span>

                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>

                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>

                    <span data-text-preloader="G" class="letters-loading">
                        G
                    </span>
                </div>
            </div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
    </div>
    <!-- End preloader -->
    <Header />
    <main class="main__content_wrapper">
        <RouterView/>
    </main>
    <Footer />
</template>
<style>
@import url('@/assets/css/plugins/swiper-bundle.min.css');
@import url('@/assets/css/plugins/glightbox.min.css');
@import url('@/assets/css/vendor/bootstrap.min.css');
@import url('@/assets/css/style.css');
.active{
    color: var(--secondary-color);
}
.variant__size--value{
    padding: 0 10px !important;
    width: auto !important;
}
</style>