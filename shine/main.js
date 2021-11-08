class mynav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
  <div id="header" class="htc-header">
            <!-- Start Header Top -->
            <div class="htc__header__top bg__cat--1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <ul class="heaher__top__left">
                                <li><i class="fa fa-clock-o"></i>7.30 AM - 9.30 PM</li>
                                <li><a href="#"><i class="fa fa-phone"></i>(+977) 9806862073</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                            <div class="header__top__right">
                                <ul class="login-register">
                                    <li><a href="login-register.html"></a></li>
                                    <li class="separator"></li>
                                    <li><a href="login-register.html"></a></li>
                                </ul>
                                <div class="heaher__top__btn">
                                    <a href="contact.html">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Header Top -->
            <!-- Start Mainmenu Area -->
            <div id="sticky-header-with-topbar" class="mainmenu__wrap sticky__header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-6 col-xs-7">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="images/logo/shine.png" alt="logo image">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-6 col-xs-5">
                            <nav class="main__menu__nav  hidden-xs hidden-sm">
                                <ul class="main__menu">
                                    <li class="drop"><a href="index.html">HOME</a>
                                        <!-- <ul class="dropdown">
                                                        <li><a href="index.html">Home 01</a></li>
                                                        <li><a href="index-2.html">Home 02</a></li>
                                                        <li><a href="index-3.html">Home 03</a></li>
                                                    </ul> -->
                                    </li>
                                    <li><a href="about.html">ABOUT</a></li>
                                    <li><a href="service.html">SERVICES</a></li>
                                    <!-- <li class="drop"><a href="#">pages</a>
                                                    <ul class="dropdown">
                                                        <li><a href="service.html">service</a></li>
                                                        <li><a href="single-service.html">Single service</a></li>
                                                        <li><a href="projects-one.html">projects one</a></li>
                                                        <li><a href="projects-two.html">projects two</a></li>
                                                        <li><a href="projects-three.html">projects three</a></li>
                                                        <li><a href="single-project.html">Single Project</a></li>
                                                        <li><a href="blog.html">BLog</a></li>
                                                        <li><a href="blog-one-column.html">blog one column</a></li>
                                                        <li><a href="blog-two-column.html">blog two column</a></li>
                                                        <li><a href="blog-details.html">blog Details</a></li>
                                                        <li><a href="login-register.html">Log in & Register</a></li>
                                                    </ul>
                                                </li> -->
                                    <li class="drop"><a href="projects.html">PROJECTS</a>
                                        <!--<ul class="dropdown">
                                               <li><a href="projects-one.html">projects one</a></li>
                                               <li><a href="projects-two.html">projects two</a></li>
                                               <li><a href="projects-three.html">projects three</a></li>
                                            </ul> -->
                                    </li>
                                    <li><a href="contact.html">CONTACT</a></li>
                                </ul>
                            </nav>
                            <div class="mobile-menu clearfix visible-xs visible-sm">
                                <nav id="mobile_dropdown">
                                    <ul>
                                        <li><a href="index.html">Home</a>
                                            <!-- <ul>
                                                            <li><a href="index.html">Home 01</a></li>
                                                            <li><a href="index-2.html">Home 02</a></li>
                                                            <li><a href="index-3.html">Home 03</a></li>
                                                        </ul> -->
                                        </li>
                                        <li><a href="about.html">ABOUT</a></li>
                                        <li><a href="#">PROJECTS</a>
                                            <ul>
                                                <li><a href="projects-one.html">projects one</a></li>
                                                <li><a href="projects-two.html">projects two</a></li>
                                                <li><a href="projects-three.html">projects three</a></li>
                                            </ul>
                                        </li>
                                        <!-- <li><a href="#">pages</a>
                                                        <ul>
                                                            <li><a href="service.html">service</a></li>
                                                            <li><a href="single-service.html">Single service</a></li>
                                                            <li><a href="projects-one.html">projects one</a></li>
                                                            <li><a href="projects-two.html">projects two</a></li>
                                                            <li><a href="projects-three.html">projects three</a></li>
                                                            <li><a href="single-project.html">Single Project</a></li>
                                                            <li><a href="blog.html">BLog</a></li>
                                                            <li><a href="blog-one-column.html">blog one column</a></li>
                                                            <li><a href="blog-two-column.html">blog two column</a></li>
                                                            <li><a href="blog-details.html">blog Details</a></li>
                                                            <li><a href="login-register.html">Log in & Register</a></li>
                                                        </ul>
                                                    </li>  -->
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- <div class="col-md-2 col-sm-6 hidden-xs">
                                        <div class="htc__header__search">
                                            <input type="text" placeholder="SEARCH">
                                            <a href="#"><i class="fa fa-search"></i></a>
                                        </div>
                                    </div> -->
                    </div>
                    <div class="mobile-menu-area"></div>
                </div>
            </div>
            <!-- End Mainmenu Area -->
        </div>
  `
 }
}

customElements.define('my-nav', mynav)

class myfooter extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
  <footer class="htc__footer__area">
            <div class="footer__top ptb--130" data--1f2d30__overlay="9.5" style="background: rgba(0, 0, 0, 0) url(images/bg/2.jpg) no-repeat fixed center center / cover ;">
                <div class="container">
                    <div class="row">
                        <div class="htc__footer__wrap clearfix">
                            <!-- Start Single Footer -->
                            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <div class="footer">
                                    <div class="footer__widget">
                                        <h2 class="ft__title">ABOUT</h2>
                                    </div>
                                    <div class="ft__details">
                                        <p>SHINE CONSULTAND AND CONSTRUCTION PVT LTD is a construction & consultant company, operator and investment
                                        manager based in Birgunj, NEPAL.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Footer -->
                            <!-- Start Single Footer -->
                            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12 xmt-40">
                                <div class="footer quick__link">
                                    <div class="footer__widget">
                                        <h2 class="ft__title">QUICK LINKS</h2>
                                    </div>
                                    <div class="footer__link">
                                        <ul class="ft__menu">
                                            <li><a href="service.html">Services</a></li>
                                            <li><a href="projects-one.html">Projects</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">About</a></li>
                                        </ul>
                                        <ul class="ft__menu">
                                            <li><a href="#">Quote</a></li>
                                            <li><a href="projects-one.html">Projects</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="#">Features</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Footer -->
                            <!-- Start Single Footer -->
                            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12 smt-40 xmt-40">
                                <div class="footer">
                                    <div class="footer__widget">
                                        <h2 class="ft__title">INSTAGRAM</h2>
                                    </div>
                                    <ul class="footer__instagram">
                                        <li><a href="#"><img src="images/blog/sm-img/1.jpg" alt="images"></a></li>
                                        <li><a href="#"><img src="images/blog/sm-img/2.jpg" alt="images"></a></li>
                                        <li><a href="#"><img src="images/blog/sm-img/3.jpg" alt="images"></a></li>
                                        <li><a href="#"><img src="images/blog/sm-img/4.jpg" alt="images"></a></li>
                                        <li><a href="#"><img src="images/blog/sm-img/5.jpg" alt="images"></a></li>
                                        <li><a href="#"><img src="images/blog/sm-img/6.jpg" alt="images"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Single Footer -->
                            <!-- Start Single Footer -->
                            <div class="col-md-3 col-lg-2 col-lg-offset-1 col-sm-6 col-xs-12 smt-40 xmt-40">
                                <div class="footer">
                                    <div class="footer__widget">
                                        <h2 class="ft__title">INQUARY</h2>
                                        <div class="footer__link">
                                            <ul class="ft__menu">
                                                <li><a href="#">Construction</a></li>
                                                <li><a href="#">Architecture</a></li>
                                                <li><a href="#">Valuation</a></li>
                                                <li><a href="#">Plambing</a></li>
                                            </ul>
                                            <ul class="ft__menu">
                                                <li><a href="#">Painting</a></li>
                                                <li><a href="#">Roofing</a></li>
                                                <li><a href="#">Plambing</a></li>
                                                <li><a href="#">Features</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Footer -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright bg__theme">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="copyright__inner">
                                <p>Copyright <a href="#" target="_blank">Shine Consultant and Construction Pvt Ltd. </a>
                                All Rights Reserved 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  `
  }
}

customElements.define('my-footer', myfooter)

class myaddress extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
  <div class="htc__contact__address add-res bg__cat--1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="htc__contact__wrap clearfix">
                            <!-- Start Single Address -->
                            <div class="ht__address__inner">
                                <div class="ht__address__icon map-pin">
                                    <i class="zmdi zmdi-pin"></i>
                                </div>
                                <div class="ht__address__details">
                                    <p>Adarshnagar - 10, Birgunj <br>Province No. 2, Nepal.</p>
                                </div>
                            </div>
                            <!-- End Single Address -->
                            <!-- Start Single Address -->
                            <div class="ht__address__inner">
                                <div class="ht__address__icon glob">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div class="ht__address__details">
                                    <p><a href="mailto: info@shineconstruction.com.np">info@shineconstruction.com.np</a></p>
                                    <p><a href="www.shineconstruction.com.np">www.shineconstruction.com.np</a></p>
                                </div>
                            </div>
                            <!-- End Single Address -->
                            <!-- Start Single Address -->
                            <div class="ht__address__inner">
                                <div class="ht__address__icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div class="ht__address__details">
                                    <p><a href="#">(+977) 9806 862 073</a></p>
                                    <p><a href="#">(+977) 9825 244 333</a></p>
                                </div>
                            </div>
                            <!-- End Single Address -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `
  }
}

customElements.define('my-address', myaddress)


class myquote extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
  <section class="htc__testimonial__area ptb--130" data--gray__overlay="9" style="background: rgba(0, 0, 0, 0) url(images/bg/1.jpg) no-repeat fixed center center / cover ;">
            <div class="container">
                <div class="row"> 
                    <div class="col-md-12">
                        <div class="reguest__quote">
                            <div class="section__title text-left">
                                <h2 class="title__line">REQUEST A <span class="text--theme">QUOTE</span></h2>
                                <p>Tell us about your requirements and we’ll get back to you with a quote.</p>
                            </div>
                            <form id="contact-form" action="https://d29u17ylf1ylz9.cloudfront.net/simply-construction/mail-faq.php" method="post">
                                <div class="clint__comment__form">
                                    <div class="single__cl__form">
                                        <input name="name" type="text" placeholder="Name">
                                        <input name="email" type="email" placeholder="Email">
                                    </div>
                                    <div class="single__cl__form">
                                        <input name="telephone" type="tel" placeholder="Phone">
                                        <input name="subject" type="text" placeholder="Subject">
                                    </div>
                                    <div class="single__cl__message">
                                        <textarea name="message" placeholder="Massage"></textarea>
                                    </div>
                                    <div class="clint__submit__btn">
                                        <button class="submit htc__btn" type="submit">
                                            SEND MESSAGE 
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p class="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `
  }
}

customElements.define('my-quote', myquote)