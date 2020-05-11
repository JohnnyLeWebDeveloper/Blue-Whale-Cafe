Vue.component('navigation', {
    data() {
        return {}
    },
    template: `<nav class="navbar navbar-expand-md bg-white navbar-light">
        <div class="container">
            <a href="index.html" class="navbar-brand"><img src="images/logo.png" class="img-fluid logo" alt="" /></a>
            <button class="navbar-toggler" data-target="#responsive-bar" data-toggle="collapse"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="responsive-bar">
                <ul class="navbar-nav text-center ml-auto">
                    <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">The Coffee</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Location</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="#" class="nav-link shopping-cart"><img src="images/shopping_cart.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </nav>`
})

Vue.component('slider', {
    data() {
        return {
        'header1': '“You can do it.”',
        'coffee': '-Coffee-'
      }
    },
    template: `<section class="slider">
        <div class="container">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h1>{{ header1 }}</h1>
                        <h5>{{ coffee }}</h5>
                    </div>
                    <div class="carousel-item">
                        <h1>{{ header1 }}</h1>
                         <h5>{{ coffee }}</h5>
                    </div>
                    <div class="carousel-item">
                        <h1>{{ header1 }}</h1>
                        <h5>{{ coffee }}</h5>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>`
})

Vue.component('about', {
    data() {
         return {
        'title': 'About Us',
        'header': 'Blue Whale Cafe was founded on the west side of Los Angeles in 2018. An independent, locally-owned and operated company- our mission is to develop great coffee and to positively contribute to our community.',
        'paragraph': 'Everything we do is rooted in that basic concept. It’s what drives us. It’s what moves us, motivates us and keeps us excited about every decision we make about our products, services and all that we do in the community.',
        'paragraph2': '“We are coffee passionate.”',
        'paragraph3': '- Blue Whale Cafe -'
      }
    },
    template: `<section class="about_us">
        <div class="container">
            <div class="container_inner">
                <div class="top mb-2">
                    <div class="row">
                        <div class="col-md-6 content" data-aos="fade-right">
                            <h3>{{ title }}</h3>
                            <p>{{ header }}</p>
                        </div>
                        <div class="col-md-6" data-aos="fade-up">
                            <img src="images/about_us_1.png" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="row">
                        <div class="col-md-8" data-aos="fade-right">
                            <img src="images/about_us_2.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-md-4 content" data-aos="fade-up">
                            <p>{{ paragraph }}</p>
                            <h6 data-aos="fade-up">{{ paragraph2 }}</h6>
                            <h5 data-aos="fade-up">{{ paragraph3 }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
})

Vue.component('wholesale', {
    data() {
        return {}
    },
    template: `<section class="explore_wholesafe">
        <div class="container">
            <div class="container_inner">
                <h2>Explore Wholesale</h2>
                <h5>From bulk coffee orders to cafe consultation and equipment servicing and beyond, we’ve got you covered.</h5>
                <a href="#">Get Started</a>
            </div>
        </div>
    </section>`
})

Vue.component('shop', {
    data() {
        return {}
    },
    template: ` <section class="shop">
        <div class="container">
            <div class="container_inner mb-2">
                <div class="product_image" data-aos="fade-right">
                    <img src="images/blend_image.jpg" class="img-fluid" alt="" />
                </div>
                <div class="button">
                    <a href="#">Shop</a>
                </div>
            </div>
        </div>
    </section>`
})

Vue.component('deliver', {
    data() {
        return {}
    },
    template: `<div class="delivered_to_door mb-2">
        <div class="container">
            <div class="container_inner">
                <div class="row">
                    <div class="col-md-6" data-aos="fade-up">
                        <img src="images/delivered_to_the_door.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-5 content">
                        <h3>Delivered to your door.</h3>
                        <p>Never run out of coffee again.
                            <br /> We offer a variety of subscription options. Let us know what coffee you like, or we can surprise you with our favorites.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})

Vue.component('gallery', {
    data() {
        return {}
    },
    template: `<div class="gallery_image">
        <div class="container">
            <div class="container_inner">
                <div class="row">
                    <div class="col-sm-4" data-aos="fade-up">
                        <img src="images/gallery_image_1.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-sm-4" data-aos="fade-up">
                        <img src="images/gallery_image_2.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-sm-4" data-aos="fade-up">
                        <img src="images/gallery_image_3.jpg" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <div class="button">
                <a href="#">View Gallery <span>&#8594;</span></a>
            </div>
        </div>
    </div>`
})

Vue.component('main-footer', {
  data() {
    return {
    }
  },
  template: `<footer class="footer">
        <div class="top">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 short_links">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 social_share">
                        <ul>
                            <li><a href="#"><img src="images/facebook_icon.png" alt="" /></a></li>
                            <li><a href="#"><img src="images/twitter_icon.png" alt="" /></a></li>
                            <li><a href="#"><img src="images/instagram_icon.png" alt="" /></a></li>
                            <li><a href="#"><img src="images/tumblr_icon.png" alt="" /></a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 email">
                        <p><span>Email:</span> Info@bluewhalecafe.com </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 copyright">
                        <p>&copy; 2018 Blue Whale Cafe <span>All Rights Reserved.</span></p>
                    </div>
                    <div class="col-sm-6 designer">
                        <p>Text</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
})

new Vue({ el: '#app' })