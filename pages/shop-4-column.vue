<template>
            <!-- Shop Category Area End -->
            <div class="shop-category-area mt-30px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <!-- Shop Top Area Start -->
                            <div class="shop-top-bar d-flex">
                                <!-- Left Side start -->
                                <div class="shop-tab nav d-flex">
                                    <NuxtLink class="active" to="#shop-1" data-bs-toggle="tab">
                                        <i class="fa fa-th"></i>
                                    </NuxtLink>
                                    <NuxtLink to="#shop-2" data-bs-toggle="tab">
                                        <i class="fa fa-list"></i>
                                    </NuxtLink>
                                    <p>There Are 17 Products.</p>
                                </div>
                                <!-- Left Side End -->
                                <!-- Right Side Start -->
                                <div class="select-shoing-wrap d-flex">
                                    <div class="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div class="shop-select">
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Right Side End -->
                            </div>
                            <!-- Shop Top Area End -->

                            <!-- Shop Bottom Area Start -->
                            <div class="shop-bottom-area mt-35">
                                <!-- Shop Tab Content Start -->
                                <div class="tab-content jump">
                                    <!-- Tab One Start -->
                                    <div id="shop-1" class="tab-pane active">
                                        <div class="row responsive-md-class">
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Juicy Quilted T..</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€18.90</li>
                                                                <li class="current-price">€34.21</li>
                                                                <li class="discount-price">-5%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">New Balance Fresh Foam Ka..</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€18.90</li>
                                                                <li class="current-price">€15.12</li>
                                                                <li class="discount-price">-20%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Brixton Patrol All Terrain..</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Tricot Logo S..</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/6.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNAR</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsit...</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Water and Wind Resista..</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">New Luxury Men's Slim Fi...</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price not-cut">€29.90</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Originals Kaval Win...</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/18.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Brixton Patrol All Terra...</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/11.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Madden by Steve Madden C...</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€11.90</li>
                                                                <li class="current-price">€10.12</li>
                                                                <li class="discount-price">-15%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Juicy Quilted T..</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€35.90</li>
                                                                <li class="current-price">€34.11</li>
                                                                <li class="discount-price">-5%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Juicy Quilted T..</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€18.90</li>
                                                                <li class="current-price">€34.21</li>
                                                                <li class="discount-price">-5%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">New Balance Fresh Foam Ka..</NuxtLink></h2>
                                                        <div class="rating-product">
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                            <i class="ion-android-star"></i>
                                                        </div>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">€18.90</li>
                                                                <li class="current-price">€15.12</li>
                                                                <li class="discount-price">-20%</li>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Brixton Patrol All Terra...</NuxtLink></h2>
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
                                            <div class="col-xl-3 col-md-4 col-sm-6 ">
                                                <NuxtLinkrticle class="list-product">
                                                    <div class="img-block">
                                                        <NuxtLink to="/single-product" class="thumbnail">
                                                            <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                            <img class="second-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                        </NuxtLink>
                                                        <div class="quick-view">
                                                            <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class="ion-ios-search-strong"></i>
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <ul class="product-flag">
                                                        <li class="new">New</li>
                                                    </ul>
                                                    <div class="product-decs">
                                                        <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                        <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Tricot Log...</NuxtLink></h2>
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
                                    </div>
                                    <!-- Tab One End -->
                                    <!-- Tab Two Start -->
                                    <div id="shop-2" class="tab-pane">
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/7.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/8.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/9.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/10.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Tricot Logo Stripe Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/11.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Fresh Foam LAZR v1 Sport</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Solid Sleeve Puffer Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/16.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Fresh Foam Kaymin</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/18.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Water and Wind Resistant Insulated Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/19.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/20.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Trans-Weight Hooded Wind and Water Resistant Shell</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/21.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/22.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Madden by Steve Madden Cale 6</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/23.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/24.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Calvin Klein Jeans Reflective Logo Full Zip</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/25.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/26.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">New Balance Fresh Foam Arishi Sport</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/27.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/28.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>STUDIO DESIGN</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Juicy Couture Juicy Quilted Terry Track Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/29.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/11.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/12.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/17.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/18.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap mb-30px scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/13.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/14.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shop-list-wrap scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12 padding-0px">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <NuxtLink to="/single-product" class="thumbnail">
                                                                        <img class="first-img" src="~/assets/images/product-image/15.jpg" alt="" />
                                                                        <img class="second-img" src="~/assets/images/product-image/16.jpg" alt="" />
                                                                    </NuxtLink>
                                                                    <div class="quick-view">
                                                                        <NuxtLink class="quick_view" to="/" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="ion-ios-search-strong"></i>
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                                <ul class="product-flag">
                                                                    <li class="new">New</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <NuxtLink class="inner-link" to="/shop-4-column"><span>GRAPHIC CORNER</span></NuxtLink>
                                                                    <h2><NuxtLink to="/single-product" class="product-link">Fila Locker Room Varsity Jacket</NuxtLink></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="product-intro-info">
                                                                        <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                                                        <p>Comfortable cotton-blend fabrication.</p>
                                                                        <p>Classic varsity jacket features brand details throughout.</p>
                                                                        <p>Flat knit collar.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="box-inner">
                                                                    <div class="in-stock">Availability: <span>299 In Stock</span></div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li class="old-price not-cut">€9.90</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="add-to-link">
                                                                        <ul>
                                                                            <li class="cart"><NuxtLink title="Add to cart" class="cart-btn" to="/">ADD TO CART </NuxtLink></li>
                                                                            <li>
                                                                                <NuxtLink to="/wishlist" title="Add to wishlist"><i class="icon-heart"></i> Add to Wishlist</NuxtLink>
                                                                            </li>
                                                                            <li>
                                                                                <NuxtLink to="/compare" title="Add to compare"><i class="icon-shuffle"></i> Add to Compare</NuxtLink>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Tab Two End -->
                                </div>
                                <!-- Shop Tab Content End -->
                                <!--  Pagination Area Start -->
                                <div class="pro-pagination-style text-center mb-60px mt-30px">
                                    <ul>
                                        <li>
                                            <NuxtLink class="prev" to="/"><i class="ion-ios-arrow-left"></i></NuxtLink>
                                        </li>
                                        <li><NuxtLink class="active" to="/">1</NuxtLink></li>
                                        <li><NuxtLink to="/">2</NuxtLink></li>
                                        <li>
                                            <NuxtLink class="next" to="/"><i class="ion-ios-arrow-right"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!--  Pagination Area End -->
                            </div>
                            <!-- Shop Bottom Area End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Shop Category Area End -->
       
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>