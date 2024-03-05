<script setup>
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex'
import Product from '../components/Product.vue'
const store = useStore();


onMounted(() => store.dispatch("GetProducts"));
const products = computed(() => store.state.products);

</script>
<template>
     <!-- Start slider section -->
     <section class="hero__slider--section">
        <div class="hero__slider--inner hero__slider--activation swiper">
            <div class="hero__slider--wrapper swiper-wrapper">
                <div class="swiper-slide ">
                    <div class="hero__slider--items home1__slider--bg">
                        <div class="container-fluid">
                            <div class="hero__slider--items__inner">
                                <div class="row row-cols-1">
                                    <div class="col">
                                        <div class="slider__content">
                                            <p class="slider__content--desc desc1 mb-15"><img class="slider__text--shape__icon" src="assets/img/icon/text-shape-icon.png" alt="text-shape-icon"> New Collection</p> 
                                            <h2 class="slider__content--maintitle h1">The Great Fashion <br>
                                                Collection 2022</h2>
                                            <p class="slider__content--desc desc2 d-sm-2-none mb-40">Up To 40% Off Final Sale Items. <br>
                                                Caught in the Moment!</p>    
                                            <a class="slider__btn primary__btn" href="shop.html">Show Collection
                                                <svg class="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="hero__slider--items home1__slider--bg two">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div class="hero__slider--items__inner">
                                        <div class="slider__content">
                                            <p class="slider__content--desc desc1 mb-15"><img class="slider__text--shape__icon" src="assets/img/icon/text-shape-icon.png" alt="text-shape-icon"> New Collection</p> 
                                            <h2 class="slider__content--maintitle h1">The Great Fashion <br>
                                                Collection 2022</h2>
                                            <p class="slider__content--desc desc2 d-sm-2-none mb-40 ">Up To 40% Off Final Sale Items. <br>
                                                Caught in the Moment!</p>    
                                            <a class="primary__btn slider__btn" href="shop.html">Show Collection
                                                <svg class="slider__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide ">
                    <div class="hero__slider--items home1__slider--bg three">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6">
                                    <div class="hero__slider--items__inner">
                                        <div class="slider__content text-center">
                                            <p class="slider__content--desc desc1 mb-15"><img class="slider__text--shape__icon" src="assets/img/icon/text-shape-icon.png" alt="text-shape-icon"> New Collection</p> 
                                            <h2 class="slider__content--maintitle h1">The Great Fashion <br>
                                                Collection 2022</h2>
                                            <p class="slider__content--desc desc2 d-sm-2-none mb-40">Up To 40% Off Final Sale Items. <br>
                                                Caught in the Moment!</p>    
                                            <a class="primary__btn slider__btn" href="shop.html">Show Collection
                                                <svg class="slider__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper__nav--btn swiper-button-next"></div>
            <div class="swiper__nav--btn swiper-button-prev"></div>
        </div>
    </section>
    <!-- End slider section -->


    <!-- Start banner section -->
    <section class="banner__section section--padding">
        <div class="container-fluid">
            <div class="row mb--n28">
                <div class="col-lg-5 col-md-order mb-28">
                    <div class="banner__items">
                        <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="assets/img/banner/banner1.png" alt="banner-img">
                            <div class="banner__items--content">
                                <span class="banner__items--content__subtitle">17% Discount</span>
                                <h2 class="banner__items--content__title h3">Spring Collection <br>
                                    Style To</h2>
                                <span class="banner__items--content__link">View Discounts
                                    <svg class="banner__items--content__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                        <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-7 mb-28">
                    <div class="row row-cols-lg-2 row-cols-sm-2 row-cols-1">
                        <div class="col mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="assets/img/banner/banner2.png" alt="banner-img"> 
                                    <div class="banner__items--content">
                                        <span class="banner__items--content__subtitle text__secondary">Shop Women</span>
                                        <h2 class="banner__items--content__title h3">Up to 70% Off & <br>
                                            Free Shipping</h2>
                                        <span class="banner__items--content__link">View Discounts
                                            <svg class="banner__items--content__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="assets/img/banner/banner3.png" alt="banner-img"> 
                                    <div class="banner__items--content">
                                        <span class="banner__items--content__subtitle">Shop Women</span>
                                        <h2 class="banner__items--content__title h3">Free Shipping Over <br>
                                            Order $120</h2>
                                        <span class="banner__items--content__link">View Discounts
                                            <svg class="banner__items--content__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                                <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="banner__items">
                        <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img banner__img--max__height" src="assets/img/banner/banner4.png" alt="banner-img"> 
                            <div class="banner__items--content">
                                <span class="banner__items--content__subtitle">25% Discount</span>
                                <h2 class="banner__items--content__title h3">Leather Saddle <br>
                                    Bag Style</h2>
                                <span class="banner__items--content__link">View Discounts
                                    <svg class="banner__items--content__arrow--icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                                        <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End banner section -->


    <!-- Start product section -->
    <section class="product__section section--padding pt-0">
        <div class="container-fluid">
            <div class="section__heading text-center mb-35">
                <h2 class="section__heading--maintitle">New Products</h2>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
                <Product v-for="(product, index) in products.data" :key="index" :product="product"/>
            </div>
        </div>
    </section>
    <!-- End product section -->


    
</template>