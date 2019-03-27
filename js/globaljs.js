function menuSetUp() {
	$('.nav li').hover(function() {
		$('ul', this).fadeToggle(50)
		$('ul>li>ul', this).hide();
		$('ul>div>li>ul', this).hide();
	});
	$('.nav li>ul>li').mouseenter(function() {
		$('a', this).css('color', '#eee');
		$('ul>li>a', this).css('color', '#b3b3b3');
		$('.nav li>ul>li').mouseleave(function() {
			$('a', this).css('color', '#b3b3b3');
		});
	});
	$('.nav-left-list li').mouseenter(function() {
		$('a', this).css('color', '#eee');
		$('ul>li>a', this).css('color', '#b3b3b3');
		$('.nav-left-list li').mouseleave(function() {
			$('a', this).css('color', '#b3b3b3');
		});
	});
	$('.nav-right-list li').mouseenter(function() {
		$('a', this).css('color', '#eee');
		$('ul>li>a', this).css('color', '#b3b3b3');
		$('.nav-right-list li').mouseleave(function() {
			$('a', this).css('color', '#b3b3b3');
		});
	});
}
$(function() {
	menuSetUp();
	$('div.search-box').click(function() {
		$("div.search-box").animate({
			right: 0
		}, 600);
	});
	$('div.search-box').mouseleave(function() {
		$("div.search-box").animate({
			right: -220
		}, 600, "easeOutBack");
	});
	$('.tiny-cal').click(function() {
		$('.promo').animate({
			right: 0
		}, 300);
		$('p.calBack').css({
			'display': 'block'
		});
	});
	$('p.calBack').click(function() {
		$('.promo').animate({
			right: -405
		}, 300);
		$('p.calBack').css({
			'display': 'none'
		});
	});
	$('.nav ul').hide();
	$('.nav ul li ul').hide();
	function lookHere() {
		$('.slidebox1').delay(2000).animate({
			top: -20
		}, {
			duration: 600
		});
		$('.slidebox1').animate({
			top: 125
		}, {
			duration: 400
		});
		$('.slidebox1').animate({
			top: 115
		}, {
			duration: 150
		});
		$('.slidebox2').delay(2200).animate({
			top: -20
		}, {
			duration: 600,
		});
		$('.slidebox2').animate({
			top: 125
		}, {
			duration: 400,
		});
		$('.slidebox2').animate({
			top: 115
		}, {
			duration: 150,
		});
		$('.slidebox3').delay(2400).animate({
			top: -20
		}, {
			duration: 600,
		});
		$('.slidebox3').animate({
			top: 125
		}, {
			duration: 400,
		});
		$('.slidebox3').animate({
			top: 115
		}, {
			duration: 150,
		});
		$('.slidebox4').delay(2600).animate({
			top: -20
		}, {
			duration: 600,
		});
		$('.slidebox4').animate({
			top: 125
		}, {
			duration: 400,
		});
		$('.slidebox4').animate({
			top: 115
		}, {
			duration: 150,
		});
		$('.slidebox5').delay(2800).animate({
			top: -20
		}, {
			duration: 600,
		});
		$('.slidebox5').animate({
			top: 125
		}, {
			duration: 400,
		});
		$('.slidebox5').animate({
			top: 115
		}, {
			duration: 150,
		});
		$('.slidebox6').delay(3000).animate({
			top: -20
		}, {
			duration: 600,
		});
		$('.slidebox6').animate({
			top: 125
		}, {
			duration: 400,
		});
		$('.slidebox6').animate({
			top: 115
		}, {
			duration: 150,
		});
	}
	var timer = setInterval(lookHere, 17000);
	timer
	$('h1.slide').click(function() {
		$('section').animate({
			top: 115
		}, {
			duration: 300,
			queue: false
		});
		$(this).parent().parent().animate({
			top: -139
		}, {
			duration: 300,
			queue: false
		});
		window.clearInterval(timer);
		$('section').mouseleave(function() {
			$('section').animate({
				top: 115
			}, {
				duration: 300,
				queue: false
			});
		});
	});
	$('.close').click(function() {
		$('section').animate({
			top: 115
		}, {
			duration: 300,
			queue: false
		});
	});
	$('.slidebox-close').click(function() {
		$("section").animate({
			top: 115
		}, {
			duration: 300,
			queue: false
		});
	});
	$('.btm-bg').click(function() {
		$("section").animate({
			top: 115
		}, {
			duration: 300,
			queue: false
		});
	});
	$("span.hero2").hide();
	$("span.hero3").hide();
	$("span.hero4").hide();
	$('.nextHero').click(function() {
		$("span.hero2").show();
		$("span.hero1").hide();
	});
	$('.nextHero2').click(function() {
		$("span.hero2").hide();
		$("span.hero3").show();
	});
	$('.nextHero3').click(function() {
		$("span.hero3").hide();
		$("span.hero4").show();
	});
	$('.nextHero4').click(function() {
		$("span.hero4").hide();
		$("span.hero1").show();
	});
});
$(document).ready(function() {
	$("nav.mainnav ul.dropdown li").hover(function() {
		$(this).addClass("hover");
		$('ul.dropdown:first', this).css('visibility', 'visible');
	}, function() {
		$(this).removeClass("hover");
		$('ul.dropdown:first', this).css('visibility', 'hidden');
	});
	$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
	$("<select />").appendTo("nav.mainnav");
	$("<option />", {
		"selected": "selected",
		"value": "",
		"text": "MENU"
	}).appendTo("nav.mainnav select");
	$("nav.mainnav a").each(function() {
		var el = $(this);
		$("<option />", {
			"value": el.attr("href"),
			"text": el.text()
		}).appendTo("nav.mainnav select");
	});
	$("nav.mainnav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	$('#clearload').addClass("clearload").delay(2500).queue(function() {
		$(this).removeClass("clearload");
		$(this).dequeue();
	});
	$('#carousel').delay(2500).queue(function() {
		$('#carousel').removeClass("clearload");
		$(this).dequeue();
	});
	$('#sliderswipe').addClass("clearload").delay(2500).queue(function() {
		$(this).removeClass("clearload");
		$(this).dequeue();
	});
	if (navigator.userAgent.indexOf('iPad') !== -1) {
		$('.demo').addClass('demo-ipad');
		$('.social-nav').addClass('social-nav-ipad');
		$('.btm-bg').addClass('btm-bg-ipad');
		$('.web-headers').addClass('web-headers-ipad');
		$('.footer').addClass('footer-ipad');
		$('.slidebox').addClass('slidebox-ipad');
		$('#ipadonlytext').hide();
		$('.programSlider').attr('height', '585px');
	}
	$(function() {
		if ($(window).width() < 970) {
			$('.program-container').show();
		} else {
			$('.program-container').hide();
		}
	});
	$("#sb-title").click(function() {
		$('#sb-overlay').trigger('click');
	});
	function OpeniFrameURL(url) {
		Shadowbox.open({
			content: url,
			player: "iframe",
			height: 420,
			width: 720,
		});
	}
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#plus1').attr({
			onClick: 'window.location = "http://majors.uat.edu/Advancing-Computer-Science/"',
		});
		$('#plus2').attr({
			onClick: 'window.location = "http://majors.uat.edu/Network-Security/"',
		});
		$('#plus3').attr({
			onClick: 'window.location = "http://majors.uat.edu/Robotics/"',
		});
		$('#plus4').attr({
			onClick: 'window.location = "http://majors.uat.edu/Digital-Video/"',
		});
		$('#plus5').attr({
			onClick: 'window.location = "http://majors.uat.edu/Open-Source/"',
		});
		$('#plus6').attr({
			onClick: 'window.location = "http://majors.uat.edu/Social-Media/"',
		});
		$('#plus7').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Studies/"',
		});
		$('#plus8').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Design/"',
		});
		$('#plus9').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Forensics/"',
		});
		$('#plus10').attr({
			onClick: 'window.location = "http://majors.uat.edu/Strategic-Tech/"',
		});
		$('#plus11').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Production/"',
		});
		$('#plus12').attr({
			onClick: 'window.location = "http://majors.uat.edu/Advancing-Computer-Science-Graduate/"',
		});
		$('#plus13').attr({
			onClick: 'window.location = "http://majors.uat.edu/Information-Assurance/"',
		});
		$('#plus14').attr({
			onClick: 'window.location = "http://majors.uat.edu/Network-Engineering/"',
		});
		$('#plus15').attr({
			onClick: 'window.location = "http://majors.uat.edu/Human-Computer/"',
		});
		$('#plus16').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Programming/"',
		});
		$('#plus17').attr({
			onClick: 'window.location = "http://majors.uat.edu/Enterprise-Software/"',
		});
		$('#plus18').attr({
			onClick: 'window.location = "/artificial-life-programming-degree"',
		});
		$('#plus19').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Leadership/"',
		});
		$('#plus20').attr({
			onClick: 'window.location = "http://majors.uat.edu/Virtual-Modeling/"',
		});
		$('#plus21').attr({
			onClick: 'window.location = "http://majors.uat.edu/SGS/"',
		});
		$('#plus22').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Design/"',
		});
		$('#plus23').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Art/"',
		});
		$('#plus24').attr({
			onClick: 'window.location = "http://majors.uat.edu/Emerging-Tech/"',
		});
		$('#plus25').attr({
			onClick: 'window.location = "http://majors.uat.edu/Digital-Media/"',
		});
		$('#mlp1').attr({
			onClick: 'window.location = "http://majors.uat.edu/Advancing-Computer-Science/"',
		});
		$('#mlp2').attr({
			onClick: 'window.location = "http://majors.uat.edu/Network-Security/"',
		});
		$('#mlp3').attr({
			onClick: 'window.location = "http://majors.uat.edu/Robotics/"',
		});
		$('#mlp4').attr({
			onClick: 'window.location = "http://majors.uat.edu/Digital-Video/"',
		});
		$('#mlp5').attr({
			onClick: 'window.location = "http://majors.uat.edu/Open-Source/"',
		});
		$('#mlp6').attr({
			onClick: 'window.location = "http://majors.uat.edu/Social-Media/"',
		});
		$('#mlp7').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Studies/"',
		});
		$('#mlp8').attr({
			onClick: 'window.location = "/digital-maker-and-fabrication-degree"',
		});
		$('#mlp9').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Forensics/"',
		});
		$('#mlp10').attr({
			onClick: 'window.location = "http://majors.uat.edu/Strategic-Tech/"',
		});
		$('#mlp11').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Production/"',
		});
		$('#mlp12').attr({
			onClick: 'window.location = "http://majors.uat.edu/Advancing-Computer-Science-Graduate/"',
		});
		$('#mlp13').attr({
			onClick: 'window.location = "http://majors.uat.edu/Information-Assurance/"',
		});
		$('#mlp14').attr({
			onClick: 'window.location = "http://majors.uat.edu/Network-Engineering/"',
		});
		$('#mlp15').attr({
			onClick: 'window.location = "http://majors.uat.edu/Human-Computer/"',
		});
		$('#mlp16').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Programming/"',
		});
		$('#mlp17').attr({
			onClick: 'window.location = "http://majors.uat.edu/Enterprise-Software/"',
		});
		$('#mlp18').attr({
			onClick: 'window.location = "/artificial-life-programming-degree"',
		});
		$('#mlp19').attr({
			onClick: 'window.location = "http://majors.uat.edu/Tech-Leadership/"',
		});
		$('#mlp20').attr({
			onClick: 'window.location = "http://majors.uat.edu/Virtual-Modeling/"',
		});
		$('#mlp21').attr({
			onClick: 'window.location = "http://majors.uat.edu/SGS/"',
		});
		$('#mlp22').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Design/"',
		});
		$('#mlp23').attr({
			onClick: 'window.location = "http://majors.uat.edu/Game-Art/"',
		});
		$('#mlp24').attr({
			onClick: 'window.location = "http://majors.uat.edu/Emerging-Tech/"',
		});
		$('#mlp25').attr({
			onClick: 'window.location = "http://majors.uat.edu/Digital-Media/"',
		});
	} else {
		$('#mlp1').click(function() {
			OpeniFrameURL('/index-programs/advancing-computer-science-degree');
		});
		$('#plus1').click(function() {
			OpeniFrameURL('/index-programs/advancing-computer-science-degree');
		});
		$('#mlp2').click(function() {
			OpeniFrameURL('/index-programs/network-security-degree');
		});
		$('#plus2').click(function() {
			OpeniFrameURL('/index-programs/network-security-degree');
		});
		$('#mlp3').click(function() {
			OpeniFrameURL('/index-programs/robotics-and-embedded-systems-degree');
		});
		$('#plus3').click(function() {
			OpeniFrameURL('/index-programs/robotics-and-embedded-systems-degree');
		});
		$('#mlp4').click(function() {
			OpeniFrameURL('/index-programs/digital-film-production-degree');
		});
		$('#plus4').click(function() {
			OpeniFrameURL('/index-programs/digital-film-production-degree');
		});
		$('#mlp5').click(function() {
			OpeniFrameURL('/index-programs/open-source-technology-degree');
		});
		$('#plus5').click(function() {
			OpeniFrameURL('/index-programs/open-source-technology-degree');
		});
		$('#mlp6').click(function() {
			OpeniFrameURL('/index-programs/web-and-social-media-degree');
		});
		$('#plus6').click(function() {
			OpeniFrameURL('/index-programs/web-and-social-media-degree');
		});
		$('#mlp7').click(function() {
			OpeniFrameURL('/index-programs/technology-management-degree');
		});
		$('#plus7').click(function() {
			OpeniFrameURL('/index-programs/technology-management-degree');
		});
		$('#mlp8').click(function() {
			OpeniFrameURL('/index-programs/technology-product-design-degree');
		});
		$('#plus8').click(function() {
			OpeniFrameURL('/index-programs/technology-product-design-degree');
		});
		$('#mlp9').click(function() {
			OpeniFrameURL('/index-programs/forensice-technology-degree');
		});
		$('#plus9').click(function() {
			OpeniFrameURL('/index-programs/forensice-technology-degree');
		});
		$('#mlp10').click(function() {
			OpeniFrameURL('/index-programs/strategic-technology-development-degree');
		});
		$('#plus10').click(function() {
			OpeniFrameURL('/index-programs/strategic-technology-development-degree');
		});
		$('#mlp11').click(function() {
			OpeniFrameURL('/index-programs/game-production-and-managment');
		});
		$('#plus11').click(function() {
			OpeniFrameURL('/index-programs/game-production-and-managment');
		});
		$('#mlp12').click(function() {
			OpeniFrameURL('/index-programs/advancing-computer-science-masters-degree');
		});
		$('#plus12').click(function() {
			OpeniFrameURL('/index-programs/advancing-computer-science-masters-degree');
		});
		$('#mlp13').click(function() {
			OpeniFrameURL('/index-programs/information-assurance');
		});
		$('#plus13').click(function() {
			OpeniFrameURL('/index-programs/information-assurance');
		});
		$('#mlp14').click(function() {
			OpeniFrameURL('/index-programs/network-engineer-degree');
		});
		$('#plus14').click(function() {
			OpeniFrameURL('/index-programs/network-engineer-degree');
		});
		$('#mlp15').click(function() {
			OpeniFrameURL('/index-programs/human-computer-interaction-degree');
		});
		$('#plus15').click(function() {
			OpeniFrameURL('/index-programs/human-computer-interaction-degree');
		});
		$('#mlp16').click(function() {
			OpeniFrameURL('/index-programs/game-programming-degree');
		});
		$('#plus16').click(function() {
			OpeniFrameURL('/index-programs/game-programming-degree');
		});
		$('#mlp17').click(function() {
			OpeniFrameURL('/index-programs/enterprise-software-development-degree');
		});
		$('#plus17').click(function() {
			OpeniFrameURL('/index-programs/enterprise-software-development-degree');
		});
		$('#mlp18').click(function() {
			OpeniFrameURL('/index-programs/artificial-life-programming-degree');
		});
		$('#plus18').click(function() {
			OpeniFrameURL('/index-programs/artificial-life-programming-degree');
		});
		$('#mlp19').click(function() {
			OpeniFrameURL('/index-programs/technology-leadership');
		});
		$('#plus19').click(function() {
			OpeniFrameURL('/index-programs/technology-leadership');
		});
		$('#mlp20').click(function() {
			OpeniFrameURL('/index-programs/virtual-modeling-and-digital-arts-degree');
		});
		$('#plus20').click(function() {
			OpeniFrameURL('/index-programs/virtual-modeling-and-digital-arts-degree');
		});
		$('#mlp21').click(function() {
			OpeniFrameURL('/index-programs/virtual-reality-degree');
		});
		$('#plus21').click(function() {
			OpeniFrameURL('/index-programs/virtual-reality-degree');
		});
		$('#mlp22').click(function() {
			OpeniFrameURL('/index-programs/game-design-degree');
		});
		$('#plus22').click(function() {
			OpeniFrameURL('/index-programs/game-design-degree');
		});
		$('#mlp23').click(function() {
			OpeniFrameURL('/index-programs/game-art-and-animation-degree');
		});
		$('#plus23').click(function() {
			OpeniFrameURL('/index-programs/game-art-and-animation-degree');
		});
		$('#mlp24').click(function() {
			OpeniFrameURL('/index-programs/emerging-technologies-degree');
		});
		$('#plus24').click(function() {
			OpeniFrameURL('/index-programs/emerging-technologies-degree');
		});
		$('#mlp25').click(function() {
			OpeniFrameURL('/index-programs/digital-media-degree');
		});
		$('#plus25').click(function() {
			OpeniFrameURL('/index-programs/digital-media-degree');
		});
	}
	if (navigator.userAgent.indexOf('iPad') == -1) {
		$('.programSlider').css('height', '495px!important');
	}
});
$(window).load(function() {
	if (window.location.hash.indexOf('#') > -1) {
		var hash = window.location.hash;
		$(hash).trigger('click');
	}
});