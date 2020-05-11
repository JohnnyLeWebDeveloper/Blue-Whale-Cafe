<template>
	    <section class="about_us">
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
                            <h6 data-aos="fade-up">“We are coffee passionate.”</h6>
                            <h5 data-aos="fade-up">- Blue Whale Cafe -</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    data: function() {
      return {
        'title': 'About Us',
        'header': 'Blue Whale Cafe was founded on the west side of Los Angeles in 2018. An independent, locally-owned and operated company- our mission is to develop great coffee and to positively contribute to our community.',
        'paragraph': 'Everything we do is rooted in that basic concept. It’s what drives us. It’s what moves us, motivates us and keeps us excited about every decision we make about our products, services and all that we do in the community.',
        'paragraph2': '“We are coffee passionate.”',
        'paragraph3': '- Blue Whale Cafe -'
      }
    }
  }
</script>