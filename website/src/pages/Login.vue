<template>
	<!-- Start breadcrumb section -->
	<section class="breadcrumb__section breadcrumb__bg">
	    <div class="container">
	        <div class="row row-cols-1">
	            <div class="col">
	                <div class="breadcrumb__content text-center">
	                    <h1 class="breadcrumb__content--title text-white mb-25">Login / Register</h1>
	                    <ul class="breadcrumb__content--menu d-flex justify-content-center">
	                        <li class="breadcrumb__content--menu__items"><RouterLink class="text-white" to="/">Home</RouterLink></li>
	                        <li class="breadcrumb__content--menu__items"><span class="text-white">Login / Register</span></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	<!-- End breadcrumb section -->

	<!-- Start login section  -->
	<div class="login__section section--padding">
	    <div class="container">
	        <form action="#">
	            <div class="login__section--inner">
	                <div class="row row-cols-md-2 row-cols-1">
	                    <div class="col">
	                        <div class="account__login">
	                            <div class="account__login--header mb-25">
	                                <h2 class="account__login--header__title h3 mb-10">Login</h2>
	                                <p class="account__login--header__desc">Login if you area a returning customer.</p>
	                            </div>
	                            <div class="account__login--inner">
	                                <input class="account__login--input" placeholder="Email Addres" type="text">
	                                <input class="account__login--input" placeholder="Password" type="password">
	                                <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
	                                    <div class="account__login--remember position__relative">
	                                        <input class="checkout__checkbox--input" id="check1" type="checkbox">
	                                        <span class="checkout__checkbox--checkmark"></span>
	                                        <label class="checkout__checkbox--label login__remember--label" for="check1">
	                                            Remember me</label>
	                                    </div>
	                                    <button class="account__login--forgot" type="submit">Forgot Your Password?</button>
	                                </div>
	                                <button class="account__login--btn primary__btn" type="submit">Login</button>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col">
	                        <div class="account__login register">
	                            <div class="account__login--header mb-25">
	                                <h2 class="account__login--header__title h3 mb-10">Create an Account</h2>
	                                <p class="account__login--header__desc">Register here if you are a new customer</p>
	                            </div>
	                            <div class="account__login--inner">
	                                <input class="account__login--input" placeholder="Name" type="text">
	                                <input class="account__login--input" placeholder="Email Addres" type="text">
	                                <input class="account__login--input" placeholder="Password" type="password">
	                                <input class="account__login--input" placeholder="Confirm Password" type="password">
	                                <div class="account__login--remember position__relative mb-10">
	                                    <input checked class="checkout__checkbox--input" id="check2" type="checkbox">
	                                    <span class="checkout__checkbox--checkmark"></span>
	                                    <label class="checkout__checkbox--label login__remember--label" for="check2">
	                                        I have read and agree to the terms & conditions</label>
	                                </div>
	                                <button class="account__login--btn primary__btn mb-10" type="submit">Submit & Register</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </form>
	    </div>     
	</div>
	<!-- End login section  -->
</template>