<template>


        <!-- Mobile Header Section Start -->
    <div class="mobile-header d-xl-none sticky-nav bg-white ptb-10px">
        <div class="container">
            <div class="row align-items-center">

                <!-- Header Logo Start -->
                <div class="col">
                    <div class="header-logo">
                        <NuxtLink to="/"><img class="img-responsive" src="~/assets/images/logo/logo.png" alt="logo.jpg" /></NuxtLink>
                    </div>
                </div>
                <!-- Header Logo End -->

                <!-- Header Tools Start -->
                <div class="col-auto">
                    <div class="header-tools justify-content-end">
                        <div class="cart-info d-flex align-self-center">
                            <NuxtLink to="/compare" class="shuffle d-xs-none" data-number="3"><i class="icon-shuffle"></i></NuxtLink>
                            <NuxtLink to="/#offcanvas-wishlist" class="heart offcanvas-toggle d-xs-none" data-number="3"><i class="icon-heart"></i></NuxtLink>
                            <NuxtLink to="/#offcanvas-cart" class="bag offcanvas-toggle" data-number="3"><i class="icon-bag"></i><span>$20.00</span></NuxtLink>
                        </div>
                        <div class="mobile-menu-toggle">
                            <NuxtLink to="/#offcanvas-mobile-menu" class="offcanvas-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                    <path d="M300,320 L540,320" id="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <!-- Header Tools End -->

            </div>
        </div>
    </div>

    <!-- Search Category Start -->
    <div class="mobile-search-area d-xl-none mb-15px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="search-element media-body">
                        <form class="d-flex" action="#">
                            <div class="search-category">
                                <select>
                                    <option value="0">All categories</option>
                                    <option value="12">Laptop</option>
                                    <option value="13">- - Hot Categories</option>
                                    <option value="19">- - - - Dresses</option>
                                    <option value="20">- - - - Jackets &amp; Coats</option>
                                    <option value="21">- - - - Sweaters</option>
                                    <option value="22">- - - - Jeans</option>
                                    <option value="23">- - - - Blouses &amp; Shirts</option>
                                    <option value="14">- - Outerwear &amp; Jackets</option>
                                    <option value="24">- - - - Basic Jackets</option>
                                    <option value="25">- - - - Real Fur</option>
                                    <option value="26">- - - - Down Coats</option>
                                    <option value="27">- - - - Blazers</option>
                                    <option value="28">- - - - Trench Coats</option>
                                    <option value="15">- - Weddings &amp; Events</option>
                                    <option value="29">- - - - Wedding Dresses</option>
                                    <option value="30">- - - - Evening Dresses</option>
                                    <option value="31">- - - - Prom Dresses</option>
                                    <option value="32">- - - - Bridesmaid Dresses</option>
                                    <option value="33">- - - - Wedding Accessories</option>
                                    <option value="16">- - Bottoms</option>
                                    <option value="34">- - - - Skirts</option>
                                    <option value="35">- - - - Leggings</option>
                                    <option value="36">- - - - Pants &amp; Capris</option>
                                    <option value="37">- - - - Wide Leg Pants</option>
                                    <option value="38">- - - - Shorts</option>
                                    <option value="17">- - Tops &amp; Sets</option>
                                    <option value="39">- - - - Tank Tops</option>
                                    <option value="40">- - - - Suits &amp; Sets</option>
                                    <option value="41">- - - - Jumpsuits</option>
                                    <option value="42">- - - - Rompers</option>
                                    <option value="43">- - - - Sleep &amp; Lounge</option>
                                    <option value="18">- - Accessories</option>
                                    <option value="44">- - - - Eyewear &amp; Accessories</option>
                                    <option value="45">- - - - Hats &amp; Caps</option>
                                    <option value="46">- - - - Belts &amp; Cummerbunds</option>
                                    <option value="47">- - - - Scarves &amp; Wraps</option>
                                    <option value="48">- - - - Gloves &amp; Mittens</option>
                                    <option value="49">Computer</option>
                                    <option value="50">- - Bottoms</option>
                                    <option value="53">- - - - Skirts</option>
                                    <option value="54">- - - - Leggings</option>
                                    <option value="55">- - - - Jeans</option>
                                    <option value="56">- - - - Pants &amp; Capris</option>
                                    <option value="57">- - - - Shorts</option>
                                    <option value="51">- - Outerwear &amp; Jackets</option>
                                    <option value="58">- - - - Trench</option>
                                    <option value="59">- - - - Genuine Leather</option>
                                    <option value="60">- - - - Parkas</option>
                                    <option value="61">- - - - Down Jackets</option>
                                    <option value="62">- - - - Wool &amp; Blends</option>
                                    <option value="52">- - Underwear &amp; Loungewear</option>
                                    <option value="63">- - - - Boxers</option>
                                    <option value="64">- - - - Briefs</option>
                                    <option value="65">- - - - Long Johns</option>
                                    <option value="66">- - - - Men's Sleep &amp; Lounge</option>
                                    <option value="67">- - - - Pajama Sets</option>
                                    <option value="68">Smartphone</option>
                                    <option value="69">- - Accessories &amp; Parts</option>
                                    <option value="75">- - - - Cables &amp; Adapters</option>
                                    <option value="76">- - - - Batteries</option>
                                    <option value="77">- - - - Chargers</option>
                                    <option value="78">- - - - Bags &amp; Cases</option>
                                    <option value="79">- - - - Electronic Cigarettes</option>
                                    <option value="70">- - Audio &amp; Video</option>
                                    <option value="80">- - - - Televisions</option>
                                    <option value="81">- - - - TV Receivers</option>
                                    <option value="82">- - - - Projectors</option>
                                    <option value="83">- - - - Audio Amplifier Boards</option>
                                    <option value="84">- - - - TV Sticks</option>
                                    <option value="71">- - Camera &amp; Photo</option>
                                    <option value="85">- - - - Digital Cameras</option>
                                    <option value="86">- - - - Camcorders</option>
                                    <option value="87">- - - - Camera Drones</option>
                                    <option value="88">- - - - Action Cameras</option>
                                    <option value="89">- - - - Photo Studio Supplies</option>
                                    <option value="72">- - Portable Audio &amp; Video</option>
                                    <option value="90">- - - - Headphones</option>
                                    <option value="91">- - - - Speakers</option>
                                    <option value="92">- - - - MP3 Players</option>
                                    <option value="93">- - - - VR/AR Devices</option>
                                    <option value="94">- - - - Microphones</option>
                                    <option value="73">- - Smart Electronics</option>
                                    <option value="95">- - - - Wearable Devices</option>
                                    <option value="96">- - - - Smart Home Appliances</option>
                                    <option value="97">- - - - Smart Remote Controls</option>
                                    <option value="98">- - - - Smart Watches</option>
                                    <option value="99">- - - - Smart Wristbands</option>
                                    <option value="74">- - Video Games</option>
                                    <option value="100">- - - - Handheld Game Players</option>
                                    <option value="101">- - - - Game Controllers</option>
                                    <option value="102">- - - - Joysticks</option>
                                    <option value="103">- - - - Stickers</option>
                                    <option value="104">Game Consoles</option>
                                    <option value="105">Mp3 &amp; headphone</option>
                                    <option value="106">Tv &amp; Video</option>
                                    <option value="107">Watches</option>
                                    <option value="108">Washing Machine</option>
                                    <option value="109">Camera</option>
                                    <option value="110">Audio &amp; Theater</option>
                                    <option value="111">Accessories</option>
                                    <option value="112">Games &amp; Consoles</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Enter your search key ... " />
                            <button><i class="icon-magnifier"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Search Category End -->
    <div class="mobile-category-nav d-xl-none mb-15px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <!--=======  category menu  =======-->
                    <div class="hero-side-category">
                        <!-- Category Toggle Wrap -->
                        <div class="category-toggle-wrap">
                            <!-- Category Toggle -->
                            <button class="category-toggle"><i class="fa fa-bars"></i> All Categories</button>
                        </div>

                        <!-- Category Menu -->
                        <nav class="category-menu">
                            <ul>
                                <li class="menu-item-has-children menu-item-has-children-1">
                                    <NuxtLink to="/#">Accessories & Parts<i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-1">
                                        <li><NuxtLink to="/#">Cables & Adapters</NuxtLink></li>
                                        <li><NuxtLink to="/#">Batteries</NuxtLink></li>
                                        <li><NuxtLink to="/#">Chargers</NuxtLink></li>
                                        <li><NuxtLink to="/#">Bags & Cases</NuxtLink></li>
                                        <li><NuxtLink to="/#">Electronic Cigarettes</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children menu-item-has-children-2">
                                    <NuxtLink to="/#">Camera & Photo<i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-2">
                                        <li><NuxtLink to="/#">Digital Cameras</NuxtLink></li>
                                        <li><NuxtLink to="/#">Camcorders</NuxtLink></li>
                                        <li><NuxtLink to="/#">Camera Drones</NuxtLink></li>
                                        <li><NuxtLink to="/#">Action Cameras</NuxtLink></li>
                                        <li><NuxtLink to="/#">Photo Studio Supplies</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children menu-item-has-children-3">
                                    <NuxtLink to="/#">Smart Electronics <i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-3">
                                        <li><NuxtLink to="/#">Wearable Devices</NuxtLink></li>
                                        <li><NuxtLink to="/#">Smart Home Appliances</NuxtLink></li>
                                        <li><NuxtLink to="/#">Smart Remote Controls</NuxtLink></li>
                                        <li><NuxtLink to="/#">Smart Watches</NuxtLink></li>
                                        <li><NuxtLink to="/#">Smart Wristbands</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children menu-item-has-children-4">
                                    <NuxtLink to="/#">Audio & Video <i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-4">
                                        <li><NuxtLink to="/#">Televisions</NuxtLink></li>
                                        <li><NuxtLink to="/#">TV Receivers</NuxtLink></li>
                                        <li><NuxtLink to="/#">Projectors</NuxtLink></li>
                                        <li><NuxtLink to="/#">Audio Amplifier Boards</NuxtLink></li>
                                        <li><NuxtLink to="/#">TV Sticks</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children menu-item-has-children-5">
                                    <NuxtLink to="/#">Portable Audio & Video <i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-5">
                                        <li><NuxtLink to="/#">Headphones</NuxtLink></li>
                                        <li><NuxtLink to="/#">Speakers</NuxtLink></li>
                                        <li><NuxtLink to="/#">MP3 Players</NuxtLink></li>
                                        <li><NuxtLink to="/#">VR/AR Devices</NuxtLink></li>
                                        <li><NuxtLink to="/#">Microphones</NuxtLink></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children menu-item-has-children-6">
                                    <NuxtLink to="/#">Video Game <i class="ion-ios-arrow-down"></i></NuxtLink>
                                    <!-- category submenu -->
                                    <ul class="category-mega-menu category-mega-menu-6">
                                        <li><NuxtLink to="/#">Handheld Game Players</NuxtLink></li>
                                        <li><NuxtLink to="/#">Game Controllers</NuxtLink></li>
                                        <li><NuxtLink to="/#">Joysticks</NuxtLink></li>
                                        <li><NuxtLink to="/#">Stickers</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/#">Televisions</NuxtLink></li>
                                <li><NuxtLink to="/#">Digital Cameras</NuxtLink></li>
                                <li><NuxtLink to="/#">Headphones</NuxtLink></li>
                                <li><NuxtLink to="/#">Wearable Devices</NuxtLink></li>
                                <li><NuxtLink to="/#">Smart Watches</NuxtLink></li>
                                <li><NuxtLink to="/#">Game Controllers</NuxtLink></li>
                                <li><NuxtLink to="/#"> Smart Home Appliances</NuxtLink></li>
                                <li class="hidden"><NuxtLink to="/#">Projectors</NuxtLink></li>
                                <li>
                                    <NuxtLink to="/#" id="more-btn"><i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!--=======  End of category menu =======-->
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Header Section End -->
    <!-- OffCanvas Wishlist Start -->
    <div id="offcanvas-wishlist" class="offcanvas offcanvas-wishlist">
        <div class="inner">
            <div class="head">
                <span class="title">Wishlist</span>
                <button class="offcanvas-close">×</button>
            </div>
            <div class="body customScroll">
                <ul class="minicart-product-list">
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/7.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Walnut Cutting Board</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$100.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/9.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Lucky Wooden Elephant</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$35.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/8.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Fish Cut Out Set</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$9.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <div class="buttons">
                    <NuxtLink to="/wishlist" class="btn btn-dark btn-hover-primary mt-30px">view wishlist</NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <!-- OffCanvas Wishlist End -->

    <!-- OffCanvas Cart Start -->
    <div id="offcanvas-cart" class="offcanvas offcanvas-cart">
        <div class="inner">
            <div class="head">
                <span class="title">Cart</span>
                <button class="offcanvas-close">×</button>
            </div>
            <div class="body customScroll">
                <ul class="minicart-product-list">
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/1.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Walnut Cutting Board</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$100.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/2.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Lucky Wooden Elephant</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$35.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                    <li>
                        <NuxtLink to="/single-product" class="image"><img src="~/assets/images/product-image/3.jpg" alt="Cart product Image"></NuxtLink>
                        <div class="content">
                            <NuxtLink to="/single-product" class="title">Fish Cut Out Set</NuxtLink>
                            <span class="quantity-price">1 x <span class="amount">$9.00</span></span>
                            <NuxtLink to="/#" class="remove">×</NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="foot">
                <div class="sub-total">
                    <strong>Subtotal :</strong>
                    <span class="amount">$144.00</span>
                </div>
                <div class="buttons">
                    <NuxtLink to="/cart" class="btn btn-dark btn-hover-primary mb-30px">view cart</NuxtLink>
                    <NuxtLink to="/checkout" class="btn btn-outline-dark current-btn">checkout</NuxtLink>
                </div>
                <p class="minicart-message">Free Shipping on All Orders Over $100!</p>
            </div>
        </div>
    </div>
    <!-- OffCanvas Cart End -->

    <!-- OffCanvas Search Start -->
    <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
        <div class="inner customScroll">
            <div class="head">
                <span class="title">&nbsp;</span>
                <button class="offcanvas-close">×</button>
            </div>
            <div class="offcanvas-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search...">
                    <button><i class="icon-magnifier"></i></button>
                </form>
            </div>
            <div class="offcanvas-menu">
                <ul>
                    <li><NuxtLink to="/#"><span class="menu-text">Home</span></NuxtLink>
                        <ul class="sub-menu">
                            <li><NuxtLink to="/"><span class="menu-text">Home 1</span></NuxtLink></li>
                            <li><NuxtLink to="/-2"><span class="menu-text">Home 2</span></NuxtLink></li>
                            <li> <NuxtLink to="/-3"><span class="menu-text">Home 3</span></NuxtLink></li>
                            <li><NuxtLink to="/-4"><span class="menu-text">Home 4</span></NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/#"><span class="menu-text">Shop</span></NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/#"><span class="menu-text">Shop Grid</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/shop-3-column">Shop Grid 3 Column</NuxtLink></li>
                                    <li><NuxtLink to="/shop-4-column">Shop Grid 4 Column</NuxtLink></li>
                                    <li><NuxtLink to="/shop-left-sidebar">Shop Grid Left Sidebar</NuxtLink></li>
                                    <li><NuxtLink to="/shop-right-sidebar">Shop Grid Right Sidebar</NuxtLink></li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/#"><span class="menu-text">Shop List</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/shop-list">Shop List</NuxtLink></li>
                                    <li><NuxtLink to="/shop-list-left-sidebar">Shop List Left Sidebar</NuxtLink></li>
                                    <li><NuxtLink to="/shop-list-right-sidebar">Shop List Right Sidebar</NuxtLink></li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/#"><span class="menu-text">Shop Single</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/single-product">Shop Single</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-variable">Shop Variable</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-affiliate">Shop Affiliate</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-group">Shop Group</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-tabstyle-2">Shop Tab 2</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-tabstyle-3">Shop Tab 3</NuxtLink></li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="/#"><span class="menu-text">Shop Single</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/single-product-slider">Shop Slider</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-gallery-left">Shop Gallery Left</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-gallery-right">Shop Gallery Right</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-sticky-left">Shop Sticky Left</NuxtLink></li>
                                    <li><NuxtLink to="/single-product-sticky-right">Shop Sticky Right</NuxtLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/#"><span class="menu-text">Pages</span></NuxtLink>
                        <ul class="sub-menu">
                            <li><NuxtLink to="/about">About Page</NuxtLink></li>
                            <li><NuxtLink to="/cart">Cart Page</NuxtLink></li>
                            <li><NuxtLink to="/checkout">Checkout Page</NuxtLink></li>
                            <li><NuxtLink to="/compare">Compare Page</NuxtLink></li>
                            <li><NuxtLink to="/login">Login & Register Page</NuxtLink></li>
                            <li><NuxtLink to="/my-account">Account Page</NuxtLink></li>
                            <li><NuxtLink to="/wishlist">Wishlist Page</NuxtLink></li>
                                            <li><NuxtLink to="/thank-you-page">Thank You Page</NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/#"><span class="menu-text">Blog</span></NuxtLink>
                        <ul class="sub-menu">
                            <li><NuxtLink to="/#"><span class="menu-text">Blog Grid</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/blog-grid-left-sidebar">Blog Grid Left Sidebar</NuxtLink></li>
                                    <li><NuxtLink to="/blog-grid-right-sidebar">Blog Grid Right Sidebar</NuxtLink></li>
                                </ul>
                            </li>
                            <li><NuxtLink to="/#"><span class="menu-text">Blog List</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/blog-list-left-sidebar">Blog List Left Sidebar</NuxtLink></li>
                                    <li><NuxtLink to="/blog-list-right-sidebar">Blog List Right Sidebar</NuxtLink></li>
                                </ul>
                            </li>
                            <li><NuxtLink to="/#"><span class="menu-text">Blog Single</span></NuxtLink>
                                <ul class="sub-menu">
                                    <li><NuxtLink to="/blog-single-left-sidebar">Blog Single Left Sidebar</NuxtLink></li>
                                    <li><NuxtLink to="/blog-single-right-sidebar">Blog Single Right Sidbar</NuxtLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                </ul>
            </div>
            <div class="offcanvas-buttons mt-30px">
                <div class="header-tools d-flex">
                    <div class="cart-info d-flex align-self-center">
                        <NuxtLink to="/my-account" class="user"><i class="icon-user"></i></NuxtLink>
                        <NuxtLink to="/wishlist" data-number="3"><i class="icon-heart"></i></NuxtLink>
                        <NuxtLink to="/cart" data-number="3"><i class="icon-bag"></i></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="offcanvas-social mt-30px">
                <ul>
                    <li>
                        <NuxtLink to="/#"><i class="icon-social-facebook"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#"><i class="icon-social-twitter"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#"><i class="icon-social-instagram"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#"><i class="icon-social-google"></i></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#"><i class="icon-social-instagram"></i></NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
    <!-- OffCanvas Search End -->

    <div class="offcanvas-overlay"></div>
    <!-- Breadcrumb Area Start -->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="breadcrumb-content">
                            <ul class="nav">
                                <li><NuxtLink to="/">Home</NuxtLink></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- Breadcrumb Area End-->
        <!-- About Area Start -->
        <section class="about-area mtb-60px">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-left-image mb-md-30px mb-lm-30px ">
                            <img src="~/assets/images/slider-image/sample-3.jpg" alt="" class="img-responsive" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="about-title">
                                <h2>Welcome To Rozer</h2>
                            </div>
                            <p class="mb-30px">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus dolorum voluptate, animi
                                libero officiis eveniet accusamus recusandae. Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro suscipit. Quibusdam culpa asperiores exercitationem architecto quo, temporibus
                                vel! porro suscipit. Quibusdam culpa asperiores exercitationem architecto quo, temporibus vel!
                            </p>
                            <p>
                                Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora iusto eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam accusantium minus repellendus
                                accusamus neque iusto pariatur laudantium provident quod recusandae exercitationem natus dignissimos, molestias quibusdam doloremque eaque fugit molestiae modi quam unde. Error est dolor facere.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt-60px">
                    <div class="col-md-4 mb-lm-30px">
                        <div class="single-about">
                            <h4>Our Company</h4>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-lm-30px">
                        <div class="single-about">
                            <h4>Our Team</h4>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-about">
                            <h4>Testimonial</h4>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Area End -->
      
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>