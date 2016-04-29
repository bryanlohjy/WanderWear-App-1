var my_top_readout = 0;
var my_bottom_readout = 0;

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container', {
    direction: 'vertical'
});

var mySwiper2 = myApp.swiper(
	'.swiper-2',
	{
		pagination:'.swiper-2 .swiper-pagination',
		spaceBetween: 50,
		onInit: function (top){
                var my_top = top.activeIndex;
	      		my_top_readout = my_top;

            },
		onSlideChangeStart: function (top) {
                var my_top = top.activeIndex;
	      		my_top_readout = my_top;
	        
			}
});

var mySwiper3 = myApp.swiper('.swiper-3', {
	pagination:'.swiper-3 .swiper-pagination',
	spaceBetween: 50,
	onInit: function (bottom) {
    			var my_bottom = bottom.activeIndex;
    			my_bottom_readout = my_bottom;
            },
	onSlideChangeStart: function (bottom) {
                var my_bottom = bottom.activeIndex;
                my_bottom_readout = my_bottom;
            }
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// // Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.router.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }