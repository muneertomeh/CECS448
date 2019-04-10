function tabColorImage() {
	var colorImage = $(this).children('img').attr('color-image');
	$(this).children('img').attr('src' , colorImage);
}

function tabBWImage() {
	var bwImage = $(this).children('img').attr('bw-image');
	$(this).children('img').attr('src' , bwImage);
}	
	
function setupTabs() {
	var innerWindowWidth = $(window).innerWidth();
	$('.first').removeClass('first');
	$('.last').removeClass('last');
	$('.tab-buckets').contents().unwrap();
	$('.tab-buckets-content div:nth-child(1)').addClass('first');
	
	
	if(innerWindowWidth >= 946) {
		var countNumber = 5;
		$('.tab-buckets-content div').each(function(){
		
			var currentBucket = $(this).index();
			if (currentBucket == countNumber){
				$(this).addClass('last');
				$(this).next().addClass('first');
				countNumber = countNumber+6;
			}
		});
				
		var results =[];
		var elements = $(".tab-buckets-content").children('.bucket-picture');
		$.map( elements  , function(i, n){
			if( n%6 === 0 ){
				results.push(n);
			}
		});
		$.each( results , function(i,v){
			elements.slice(v, v+6).wrapAll('<div class="tab-buckets"></div>');
		});

			
	} else if(innerWindowWidth <= 945 && innerWindowWidth >= 554) {
		var countNumber = 4;
		$('.tab-buckets-content div').each(function(){
		
			var currentBucket = $(this).index();
			if (currentBucket == countNumber){
				$(this).addClass('last');
				$(this).next().addClass('first');
				countNumber = countNumber+5;
			}
		});
		
		var results =[];
		var elements = $(".tab-buckets-content").children('.bucket-picture');
		$.map( elements  , function(i, n){
			if( n%5 === 0 ){
				results.push(n);
			}
		});
		$.each( results , function(i,v){
			elements.slice(v, v+5).wrapAll('<div class="tab-buckets"></div>');
		});
	
	} else if(innerWindowWidth <= 553 && innerWindowWidth >= 465) {
		var countNumber = 2;
		$('.tab-buckets-content div').each(function(){
		
			var currentBucket = $(this).index();
			if (currentBucket == countNumber){
				$(this).addClass('last');
				$(this).next().addClass('first');
				countNumber = countNumber+3;
			}
		});
		
		var results =[];
		var elements = $(".tab-buckets-content").children('.bucket-picture');
		$.map( elements  , function(i, n){
			if( n%3 === 0 ){
				results.push(n);
			}
		});
		$.each( results , function(i,v){
			elements.slice(v, v+3).wrapAll('<div class="tab-buckets"></div>');
		});
		
	} else if(innerWindowWidth <= 464 ) {
		var countNumber = 1;
		$('.tab-buckets-content div').each(function(){
		
			var currentBucket = $(this).index();
			if (currentBucket == countNumber){
				$(this).addClass('last');
				$(this).next().addClass('first');
				countNumber = countNumber+2;
			}
		});
		
		var results =[];
		var elements = $(".tab-buckets-content").children('.bucket-picture');
		$.map( elements  , function(i, n){
			if( n%2 === 0 ){
				results.push(n);
			}
		});
		$.each( results , function(i,v){
			elements.slice(v, v+2).wrapAll('<div class="tab-buckets"></div>');
		});
	}
	
}
	
function setupPage() {	
	$('.aggcontenttitle').each(function() {
		var tabName = $(this).text();
		var tabNameBreak = tabName.replace(' ', '<br />');
		$(this).html(tabNameBreak);
	});
}

function showBucketContent() {
	var innerWindowWidth = $(window).innerWidth();

	$('.tab-content').remove();
	$('.tab-buckets div').unbind('click');
	$('.tab-buckets div').bind('click' , showBucketContent);
	$('.tab-buckets > div').each(function(){
		var bwImage = $(this).children('img').attr('bw-image');
		$(this).children('img').attr('src' , bwImage);
	});
	var colorImage = $(this).children('img').attr('color-image');
	$(this).children('img').attr('src' , colorImage);
	$('.tab-buckets > div').bind('mouseleave', tabBWImage);
	$('.tab-buckets > div').removeClass('selected');
	$(this).addClass('selected');
	$(this).unbind('mouseleave');
	
	var tabContent = $(this).attr('tab-content');
	var selectedTabContent = $('#' + tabContent).html();
	$(this).parent('.tab-buckets').after('<div class="tab-content"><div id="'+ tabContent +'">'+ selectedTabContent +'</div></div>');
	$(this).unbind('click');
	$(this).bind('click', closeBucketContent);
	
	if(innerWindowWidth <= 464 ) {
		$('html, body').animate({scrollTop: $(this).offset().top}, 800);
	}
}

function closeBucketContent() {
	$('.tab-content').remove();
	$('.tab-buckets div').unbind('click');
	$('.tab-buckets div').bind('click' , showBucketContent);
	$('.tab-buckets > div').each(function(){
		var bwImage = $(this).children('img').attr('bw-image');
		$(this).children('img').attr('src' , bwImage);
	});
	var colorImage = $(this).children('img').attr('color-image');
	$(this).children('img').attr('src' , colorImage);
	$('.tab-buckets > div').bind('mouseleave', tabBWImage);
	$('.tab-buckets > div').removeClass('selected');
}

function openShadowBox() {
	var youtubeVideo;
	$(document).on('click','.youtube-iframe', function(){
		youtubeVideo = $(this).attr('video');
		$(youtubeVideo).show();
		$('.cover').fadeIn();
		
	});
	$(document).on('click','.cover', function(){
		$('.cover').fadeOut();
		var video = $(youtubeVideo).children('iframe').attr("src");
		$(youtubeVideo).fadeOut()
		$(youtubeVideo).children('iframe').attr("src","");
		$(youtubeVideo).children('iframe').attr("src",video);
	});
}





// WRAP FACULTY LIST IN COLUMNS
function splitList(columns, elem, item, columnClass) {
	
	var num_cols = columns,
		container = $(elem),
		listItem = item,
		listClass = columnClass,
		appendClass = listClass.replace(/\s+/g, '.');
	
	container.each(function() {
		
		var items_per_col = new Array(),
			items = $(this).find(listItem),
			min_items_per_col = Math.floor(items.length / num_cols),
			difference = items.length - (min_items_per_col * num_cols);
		
		for (var i = 0; i < num_cols; i++) {
			
			if (i < difference) {
				items_per_col[i] = min_items_per_col + 1;
			} else {
				items_per_col[i] = min_items_per_col;
			}
			
		}
		
		for (var i = 0; i < num_cols; i++) {
			
			$(this).append($('<div></div>').addClass(listClass));
			
			for (var j = 0; j < items_per_col[i]; j++) {
				var pointer = 0;
				
				for (var k = 0; k < i; k++) {
					pointer += items_per_col[k];
				}
				
				$(this).find('.' + appendClass).last().append(items[j + pointer]);
				
			}
			
		}
		
	});
	
}



// FACULTY BOX HEIGHT
var facultyHeight = function() {
	
	var facultyMaxHeight = 0;
	$('.faculty-info .more-button').each(function(){
		facultyMaxHeight = $(this)[0].scrollHeight > facultyMaxHeight ? $(this)[0].scrollHeight : facultyMaxHeight;
	});
	
	return facultyMaxHeight;
	
};

var singleFacultyHeight = function(thisTarget) {
	
	var facultyMaxHeight = 0;
	facultyMaxHeight = $(thisTarget)[0].scrollHeight;
	
	return facultyMaxHeight;
	
};




$(document).ready(function(){
	setupPage();
	setupTabs();
	openShadowBox();
	$('.tab-buckets div').mouseenter(tabColorImage);
	$('.tab-buckets div').mouseleave(tabBWImage);
	
	/*********************************************
	 FACULTY LIST MAKE INTO COLUMNS
	 *********************************************/	
	splitList(3, '#faculty-list.on-ground', 'div.faculty', 'eight columns');
	splitList(3, '#faculty-list.online', 'div.faculty', 'eight columns');
	splitList(3, '#faculty-list.graduate', 'div.faculty', 'eight columns');
	
	
	/*********************************************
	 FACULTY SHOW / HIDE TOGGLE
	 *********************************************/	
	$(document).on('click', '.faculty-info', function() {
		
		var $this = $(this),
			$facultyTarget = $this.find('.more-button');
		
		if (!$this.hasClass('mobile')) {
			
			if (!$this.hasClass('active')) {
				
				$facultyTarget.animate({height: singleFacultyHeight($facultyTarget)});
				
				$this.addClass('active');
				
			} else {
				$facultyTarget.animate({height: '31px'});
				$this.removeClass('active');
			}
			
		}
		
	});
	
	
	$(document).on('click', '.faculty-linkedin-icon:not(.disabled)', function() {
		var targetPage = $(this).children('a');
		targetPage[0].click();
	});
	
	
	
	
});

$(window).resize( function(){
	setupTabs();
});

$(window).load(function(){
	$('.tab-buckets div').click(showBucketContent);
	if($_POST["featured"] != null){
			$('.' + $_POST["featured"]).trigger('click');
		    $('html, body').animate({
		        scrollTop: $('.' + $_POST["featured"]).offset().top
		    }, 2000);
		}
	if(window.location.hash.indexOf('#') > -1){
		var hashTag = window.location.hash.replace('#', '.');
		$(hashTag).trigger('click');
		$('html, body').animate({
	        scrollTop: $(hashTag).offset().top
	    }, 2000);
	}	
});