<template>

	<!-- my account section start -->
	<br>
	<section class="my__account--section mt-20">
	    <div class="container-fluid">
	        <div class="my__account--section__inner border-radius-10 d-flex">
	            <div class="account__left--sidebar">
	                <h2 class="account__content--title h3 mb-20">My Profile</h2>
	                <ul class="account__menu">
	                    <li class="account__menu--list active"><a href="my-account.html">Dashboard</a></li>
	                    <li class="account__menu--list"><a href="my-account-2.html">Addresses</a></li>
	                    <li class="account__menu--list"><a href="wishlist.html">Wishlist</a></li>
	                    <li class="account__menu--list"><a href="login.html">Log Out</a></li>
	                </ul>
	            </div>
	            <div class="account__wrapper">
	                <div class="account__content">
	                    <h2 class="account__content--title h3 mb-20">Orders History</h2>
	                    <div class="account__table--area">
	                        <table class="account__table">
	                            <thead class="account__table--header">
	                                <tr class="account__table--header__child">
	                                    <th class="account__table--header__child--items">Order</th>
	                                    <th class="account__table--header__child--items">Date</th>
	                                    <th class="account__table--header__child--items">Payment Status</th>
	                                    <th class="account__table--header__child--items">Fulfillment Status</th>
	                                    <th class="account__table--header__child--items">Total</th>	 	 	 	
	                                </tr>
	                            </thead>
	                            <tbody class="account__table--body mobile__none">
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#2014</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Unfulfilled</td>
	                                    <td class="account__table--body__child--items">$40.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#2024</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Fulfilled</td>
	                                    <td class="account__table--body__child--items">$44.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#2164</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Unfulfilled</td>
	                                    <td class="account__table--body__child--items">$36.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#2345</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Unfulfilled</td>
	                                    <td class="account__table--body__child--items">$87.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#1244</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Fulfilled</td>
	                                    <td class="account__table--body__child--items">$66.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#3455</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Fulfilled</td>
	                                    <td class="account__table--body__child--items">$55.00 USD</td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">#4566</td>
	                                    <td class="account__table--body__child--items">February 06, 2022</td>
	                                    <td class="account__table--body__child--items">Paid</td>
	                                    <td class="account__table--body__child--items">Unfulfilled</td>
	                                    <td class="account__table--body__child--items">$87.00 USD</td>
	                                </tr>
	                            </tbody>
	                            <tbody class="account__table--body mobile__block">
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                                <tr class="account__table--body__child">
	                                    <td class="account__table--body__child--items">
	                                        <strong>Order</strong>
	                                        <span>#2014</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Date</strong>
	                                        <span>November 24, 2022</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Payment Status</strong>
	                                        <span>Paid</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Fulfillment Status</strong>
	                                        <span>Unfulfilled</span>
	                                    </td>
	                                    <td class="account__table--body__child--items">
	                                        <strong>Total</strong>
	                                        <span>$40.00 USD</span>
	                                    </td>
	                                </tr>
	                            </tbody>
	                        </table>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	<!-- my account section end -->
</template>