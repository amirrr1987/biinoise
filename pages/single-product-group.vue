<template>

            <!-- Shop details Area start -->
            <section class="product-details-area mtb-60px">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12">
                            <div class="product-details-img product-details-tab">
                                <div class="zoompro-wrap zoompro-2">
                                    <div class="zoompro-border zoompro-span">
                                        <img class="zoompro" src="~/assets/images/product-image/22.jpg" data-zoom-image="assets/images/product-image/zoom/1.jpg" alt="" />
                                    </div>
                                </div>
                                <div id="gallery" class="product-dec-slider-2 swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <NuxtLink class="active" data-image="assets/images/product-image/22.jpg" data-zoom-image="assets/images/product-image/zoom/1.jpg">
                                                <img class="img-responsive" src="~/assets/images/product-image/22.jpg" alt="" />
                                            </NuxtLink>
                                        </div>
                                        <div class="swiper-slide">
                                            <NuxtLink data-image="assets/images/product-image/21.jpg" data-zoom-image="assets/images/product-image/zoom/2.jpg">
                                                <img class="img-responsive" src="~/assets/images/product-image/21.jpg" alt="" />
                                            </NuxtLink>
                                        </div>
                                        <div class="swiper-slide">
                                            <NuxtLink data-image="assets/images/product-image/23.jpg" data-zoom-image="assets/images/product-image/zoom/3.jpg">
                                                <img class="img-responsive" src="~/assets/images/product-image/23.jpg" alt="" />
                                            </NuxtLink>
                                        </div>
                                        <div class="swiper-slide">
                                            <NuxtLink data-image="assets/images/product-image/6.jpg" data-zoom-image="assets/images/product-image/zoom/4.jpg">
                                                <img class="img-responsive" src="~/assets/images/product-image/6.jpg" alt="" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12">
                            <div class="product-details-content">
                                <h2>Originals Kaval Windbr</h2>
                                <p class="reference">Reference:<span> demo_17</span></p>
                                <div class="pro-details-rating-wrap">
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <span class="read-review"><NuxtLink class="reviews" to="/">Read reviews (1)</NuxtLink></span>
                                </div>
                                <div class="pricing-meta">
                                    <ul>
                                        <li class="old-price not-cut">€18.90</li>
                                    </ul>
                                </div>
                                <div class="pro-details-list">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                    <ul>
                                        <li>- 0.5 mm Dail</li>
                                        <li>- Inspired vector icons</li>
                                        <li>- Very modern style</li>
                                    </ul>
                                </div>
                                <div class="product-details-table table-responsive pro-details-quality">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="quantity d-flex">
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><NuxtLink to="/">Vestibulum suscipit</NuxtLink></td>
                                                <td><span class="amount">€165.00</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="quantity d-flex">
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><NuxtLink to="/">Ullamco laboris</NuxtLink></td>
                                                <td><span class="amount">€165.00</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="pro-details-size-color d-flex">
                                    <div class="pro-details-color-wrap">
                                        <span>Color</span>
                                        <div class="pro-details-color-content">
                                            <ul>
                                                <li class="blue"></li>
                                                <li class="maroon active"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-size">
                                        <span>Size</span>
                                        <select>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="pro-details-quality mt-0px">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                    </div>
                                    <div class="pro-details-cart btn-hover">
                                        <NuxtLink to="/">  Add To Cart</NuxtLink>
                                    </div>
                                </div>
                                <div class="pro-details-wish-com">
                                    <div class="pro-details-wishlist">
                                        <NuxtLink to="/"><i class="icon-heart"></i>Add to wishlist</NuxtLink>
                                    </div>
                                    <div class="pro-details-compare">
                                        <NuxtLink to="/"><i class="icon-shuffle"></i>Add to compare</NuxtLink>
                                    </div>
                                </div>
                                <div class="pro-details-social-info">
                                    <span>Share</span>
                                    <div class="social-info">
                                        <ul>
                                            <li>
                                                <NuxtLink title="Facebook" to="/"><i class="ion-social-facebook"></i></NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink title="Twitter" to="/"><i class="ion-social-twitter"></i></NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink title="Google+" to="/"><i class="ion-social-google"></i></NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink title="Instagram" to="/"><i class="ion-social-instagram"></i></NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pro-details-policy">
                                    <ul>
                                        <li><img src="~/assets/images/icons/policy.png" alt="" /><span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src="~/assets/images/icons/policy-2.png" alt="" /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><img src="~/assets/images/icons/policy-3.png" alt="" /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Shop details Area End -->
            <!-- product details description area start -->
            <div class="description-review-area mb-60px">
                <div class="container">
                    <div class="description-review-wrapper">
                        <div class="description-review-topbar nav">
                            <NuxtLink data-bs-toggle="tab" to="#des-details1">Description</NuxtLink>
                            <NuxtLink class="active" data-bs-toggle="tab" to="#des-details2">Product Details</NuxtLink>
                            <NuxtLink data-bs-toggle="tab" to="#des-details3">Reviews (2)</NuxtLink>
                        </div>
                        <div class="tab-content description-review-bottom">
                            <div id="des-details2" class="tab-pane active">
                                <div class="product-anotherinfo-wrapper">
                                    <ul>
                                        <li><span>Weight</span> 400 g</li>
                                        <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                        <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                        <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="des-details1" class="tab-pane">
                                <div class="product-description-wrapper">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                                    <p>
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    </p>
                                </div>
                            </div>
                            <div id="des-details3" class="tab-pane">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <div class="review-wrapper">
                                            <div class="single-review">
                                                <div class="review-img">
                                                    <img src="~/assets/images/review-image/1.png" alt="" />
                                                </div>
                                                <div class="review-content">
                                                    <div class="review-top-wrap">
                                                        <div class="review-left">
                                                            <div class="review-name">
                                                                <h4>White Lewis</h4>
                                                            </div>
                                                            <div class="rating-product">
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="review-left">
                                                            <NuxtLink to="/">Reply</NuxtLink>
                                                        </div>
                                                    </div>
                                                    <div class="review-bottom">
                                                        <p>
                                                            Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-review child-review">
                                                <div class="review-img">
                                                    <img src="~/assets/images/review-image/1.png" alt="" />
                                                </div>
                                                <div class="review-content">
                                                    <div class="review-top-wrap">
                                                        <div class="review-left">
                                                            <div class="review-name">
                                                                <h4>White Lewis</h4>
                                                            </div>
                                                            <div class="rating-product">
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                                <i class="ion-android-star"></i>
                                                            </div>
                                                        </div>
                                                        <div class="review-left">
                                                            <NuxtLink to="/">Reply</NuxtLink>
                                                        </div>
                                                    </div>
                                                    <div class="review-bottom">
                                                        <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="ratting-form-wrapper pl-50">
                                            <h3>Add a Review</h3>
                                            <div class="ratting-form">
                                                <form action="#">
                                                    <div class="star-box">
                                                        <span>Your rating:</span>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="rating-form-style mb-10">
                                                                <input placeholder="Name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="rating-form-style mb-10">
                                                                <input placeholder="Email" type="email" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="rating-form-style form-submit">
                                                                <textarea name="Your Review" placeholder="Message"></textarea>
                                                                <input type="submit" value="Submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- product details description area end -->
        <!-- Feature Area start -->
        <div class="feature-area single-product-responsive mt-60px mb-30px">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2 class="section-heading">You Might Also Like</h2>
                        </div>
                    </div>
                </div>
                <div class="feature-slider-two slider-nav-style-1">
                    <div class="feature-slider-wrapper swiper-wrapper">
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price">€23.90</li>
                                            <li class="current-price">€21.51</li>
                                            <li class="discount-price">-10%</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/16.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/18.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/20.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/21.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/22.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/23.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/24.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/25.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/26.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/27.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/28.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/29.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/11.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-buttons">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature Area End -->
        <!-- Feature Area start -->
        <div class="feature-area single-product-responsive  mb-30px">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2 class="section-heading">16 Other Products In The Same Category:</h2>
                        </div>
                    </div>
                </div>
                <div class="feature-slider-two slider-nav-style-1">
                    <div class="feature-slider-wrapper swiper-wrapper">
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price">€23.90</li>
                                            <li class="current-price">€21.51</li>
                                            <li class="discount-price">-10%</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/16.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/18.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/20.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/21.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/22.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/23.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/24.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/25.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/26.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/27.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/28.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/29.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/11.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                        <!-- Single Item -->
                        <div class="feature-slider-item swiper-slide">
                            <NuxtLinkrticle class="list-product">
                                <div class="img-block">
                                    <NuxtLink to="/single-product" class="thumbnail">
                                        <img class="first-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                        <img class="second-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                    </NuxtLink>
                                    <div class="quick-view">
                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i class="icon-magnifier icons"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                                <div class="product-decs">
                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Arishi Sport v1</NuxtLink></h2>
                                    <div class="rating-product">
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                        <i class="ion-android-star"></i>
                                    </div>
                                    <div class="pricing-meta">
                                        <ul>
                                            <li class="old-price not-cut">€18.90</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="add-to-link">
                                    <ul>
                                        <li class="cart"><NuxtLink class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/wishlist"><i class="icon-heart"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/compare"><i class="icon-shuffle"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </NuxtLinkrticle>
                        </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-buttons">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature Area End -->
       
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>