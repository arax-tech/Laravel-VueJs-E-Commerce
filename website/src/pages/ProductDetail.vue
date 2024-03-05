<script setup>
import Product from '../components/Product.vue'
import { onMounted, computed, ref, watch} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const URL = import.meta.env.VITE_IMAGES_BASE_URL;

onMounted(() => store.dispatch("GetProductDetails", route.params.id));

const productDetails = computed(() => store.state.productDetails);
const { product, releatedProducts } = productDetails.value;

const color = ref(product?.attributes[0]?.color);
const size = ref(product?.attributes[0]?.size);
const price = ref(product?.attributes[0]?.price);
const stock = ref(product?.attributes[0]?.stock);
const off_percentage_amount = ref(price.value - (price.value * product?.off_percentage / 100));


const OnColorChange = (attrib) => {
	price.value = attrib.price;
	color.value = attrib.color;
	stock.value = attrib.stock;
	off_percentage_amount.value = attrib.price - (attrib.price * product?.off_percentage / 100);
};
const OnSizeChange = (attrib) => {
	price.value = attrib.price;
	size.value = attrib.size;
	stock.value = attrib.stock;
	off_percentage_amount.value = attrib.price - (attrib.price * product?.off_percentage / 100);
};

watch(() => route.params.id, (newId, oldId) => {
	if (newId !== oldId) {
		store.dispatch("GetProductDetails", route.params.id)
	}
});
</script>
<template>
	<!-- Start breadcrumb section -->
	<section class="breadcrumb__section breadcrumb__bg">
	    <div class="container">
	        <div class="row row-cols-1">
	            <div class="col">
	                <div class="breadcrumb__content text-center">
	                    <h1 class="breadcrumb__content--title text-white mb-25">{{ product?.name }} </h1>
	                    <ul class="breadcrumb__content--menu d-flex justify-content-center">
	                        <li class="breadcrumb__content--menu__items"><RouterLink class="text-white" to="/">Home</RouterLink></li>
	                        <li class="breadcrumb__content--menu__items"><span class="text-white">{{ product?.name }} </span></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	<!-- End breadcrumb section -->

    

	 <section class="product__details--section section--padding">
	     <div class="container">
	         <div class="row row-cols-lg-2 row-cols-md-2">
	             <div class="col">
	                 <div class="product__details--media">
	                     <div class="product__media--preview  swiper">
	                         <div class="swiper-wrapper">
	                             
								<div class="swiper-slide" v-for="attrib0 in product?.attributes" :key="attrib0.id">
	                                 <div class="product__media--preview__items">
	                                     <a class="product__media--preview__items--link glightbox" data-gallery="product-media-preview" :href="URL + '/admin/products/' +  attrib0?.image"><img class="product__media--preview__items--img" :src="URL + '/admin/products/' +  attrib0?.image" alt="product-media-img"></a>
	                                     <div class="product__media--view__icon">
	                                         <a class="product__media--view__icon--link glightbox" :href="URL + '/admin/products/' +  attrib0?.image" data-gallery="product-media-preview">
	                                             <svg class="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path></svg>
	                                         </a>
	                                     </div>
	                                 </div>
	                             </div>
	                         </div>
	                     </div>
	                     <div class="product__media--nav swiper">
	                         <div class="swiper-wrapper">
	                             <div class="swiper-slide" v-for="attrib in product?.attributes" :key="attrib.id">
	                                 <div class="product__media--nav__items">
	                                     <img class="product__media--nav__items--img" :src="URL + '/admin/products/' +  attrib?.image" alt="product-nav-img">
	                                 </div>
	                             </div>
	                         </div>
	                         <div class="swiper__nav--btn swiper-button-next"></div>
	                         <div class="swiper__nav--btn swiper-button-prev"></div>
	                     </div>
	                 </div>
	             </div>   
	             <div class="col">
	                 <div class="product__details--info">
	                     <form action="#">
	                         <h2 class="product__details--info__title mb-15">{{ product?.name }}</h2>
							 
	                         <p class="product__details--info__desc mb-15">
								<li>On Sale : {{  product?.on_sale  }}</li>
								<li>Is Future : {{  product?.future  }}</li>
							 </p>
	                         <div class="product__variant">
	                             <div class="product__variant--list mb-10">
	                                 <fieldset class="variant__input--fieldset">
	                                     

										<legend class="product__variant--title mb-8">Color : {{ color }}</legend>
										<span v-for="attrib1 in product?.attributes" :key="attrib1.id">
											<input @change="OnColorChange(attrib1)" :id="`color-${attrib1.color}1`" name="color" type="radio" :value="attrib1.color" v-model="color">
											<label class="variant__color--value red" :for="`color-${attrib1.color}1`" :title="attrib1.color">
												<img class="variant__color--value__img" :src="URL + '/admin/products/' +  attrib1?.image" alt="variant-color-img">
											</label>&nbsp;
										</span> 
	                                 </fieldset>
	                             </div>
	                             <div class="product__variant--list mb-15">
	                                 <fieldset class="variant__input--fieldset weight">
	                                     <legend class="product__variant--title mb-8">Size : {{ size }}</legend>
	                                     <span v-for="attrib2 in product?.attributes" :key="attrib2.id">
											<input  @change="OnSizeChange(attrib2)" :id="`size-${attrib2.size}1`" name="size" type="radio" v-model="size" :value="attrib2.size">
	                                     	<label class="variant__size--value red" :for="`size-${attrib2.size}1`">{{ attrib2.size }}</label> 
											&nbsp;
										 </span>
	                                 </fieldset>
	                             </div>
								 <div class="product__items--price" v-if="product?.on_sale == 'Yes' ">
									<span class="current__price">Rs : {{ off_percentage_amount }}</span>
									<span class="price__divided"></span>
									<span class="old__price">{{ price }}</span>
								</div>
								<div class="product__items--price" v-else>
									<span class="current__price">Rs : {{ price }}</span>
								</div>

								<div class="product__variant--list mb-15">
	                                 <fieldset class="variant__input--fieldset weight">
	                                     <legend class="product__variant--title mb-8">Stock : {{ stock }}</legend>
	                                 </fieldset>
	                             </div>
	                             <div class="product__variant--list quantity d-flex align-items-center mb-20">
	                                 <div class="quantity__box">
	                                     <button type="button" class="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
	                                     <label>
	                                         <input type="number" class="quantity__number quickview__value--number" value="1" />
	                                     </label>
	                                     <button type="button" class="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
	                                 </div>
	                                 <button class="quickview__cart--btn primary__btn" type="submit">Add To Cart</button>  
	                             </div>
	                             <div class="product__variant--list mb-15">
	                                 <a class="variant__wishlist--icon mb-15" href="wishlist.html" title="Add to wishlist">
	                                     <svg class="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
	                                     Add to Wishlist
	                                 </a>
	                                 <button class="variant__buy--now__btn primary__btn" type="submit">Add to Cart</button>
	                             </div>
	                         </div>
	                     </form>
	                 </div>
	             </div>
	         </div>
	     </div>
	 </section>


	 
	<!-- Start product section -->
	 <section class="product__section product__section--style3 section--padding">
	     <div class="container product3__section--container">
			 <div class="container-fluid">
				<div class="section__heading text-center mb-35">
					<h2 class="section__heading--maintitle">Releated Products</h2>
				</div>
				<div class="row row-cols-xl-12 row-cols-lg-12 row-cols-md-3 row-cols-2 mb--n30">
					<Product v-for="(product, index) in releatedProducts" :key="index" :product="product"/>
				</div>
			</div>
	     </div>
	 </section>
	 <!-- End product section -->


	

</template>

<style scoped>
.current__price{
	font-size:25px;
	font-weight:bolder;
	margin:15px 0px !important;
}
</style>