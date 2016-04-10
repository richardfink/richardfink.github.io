$.fn.anchorAnimate = function(settings) {

	settings = $.extend({
		speed : 1100
	}, settings);

	return this.each(function(){
		var caller = this

		$(caller).click(function (event) {
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")

			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
			return false;
		})
	})
}


function Paging(idx) {
	this.idx = idx;
	this.target_page = "";
	this.query = "";
	this.sort = 0;
	this.show_more = 100;
	this.show_current = 0;
	this.num_items = 0;
	this.now_showing = 0;
	var idx = this.idx;
	var pagedown = $("#pagedown_"+idx);
	var more = $("#pagedown-more_"+idx);
	var sortby_date = $("#sort_date");
	var sortby_fname = $("#sort_fname");
	var sortby_lname = $("#sort_lname");
	var loading = $("#pagedown-loading_"+idx);
	var anchor = $("a#pagedown-anchor_"+idx);
	var p, bookmark, animate;

	this.init = function() {
		p = this
		this.show_more_link(this.show_more);

		more.click(function(){
			if(!animate) {
				animate = 1;
				anchor.anchorAnimate();
			}			
			p.get_more();
		});
		
		sortby_fname.click(function(){
			if(!$(this).hasClass('sort_active')) {
				p.sort = 1;
				$(this).addClass('sort_active');			
				sortby_date.removeClass('sort_active');
				sortby_lname.removeClass('sort_active');
				p.reset();
				p.get_more();
			}
		});

		sortby_lname.click(function(){
			if(!$(this).hasClass('sort_active')) {
				p.sort = 2;
				$(this).addClass('sort_active');			
				sortby_date.removeClass('sort_active');
				sortby_fname.removeClass('sort_active');
				p.reset();
				p.get_more();
			}
		});

		sortby_date.click(function(){
			if(!$(this).hasClass('sort_active')) {
				p.sort = 0;
				$(this).addClass('sort_active');			
				sortby_fname.removeClass('sort_active');
				sortby_lname.removeClass('sort_active');
				p.reset();
				p.get_more();
			}
		});

	}

	this.reset = function() {
		p.show_more = 100;
		p.show_current = 0;
		pagedown.text('');	
	}

	var x;
	this.get_more = function() {
		this.showLoading();
		
		tquery = this.query + "&show_current="+this.show_current+"&show_more="+this.show_more+"&sortid="+this.sort;		
		pagedown.each(function() {tag = this.tagName;}); 				
		bookmark = '<a name="m_'+this.idx+'_'+this.show_current+'" id="m_'+this.idx+'_'+this.show_current+'"></a>'		
		if(x) x.abort();
		x = $.get(this.target_page, tquery , function(data, status){			
			if(tag == 'TBODY') {
				$("#pagedown_"+idx+" tr:last td:last").append(bookmark);				
			} else {
				pagedown.append(bookmark);
			}
			pagedown.append(data);
			p.hideLoading();
			p.update_now();
		});
	}

	//show loading bar
	this.showLoading = function(){
		more.hide();
		loading.fadeIn("slow");
	}
	//hide loading bar
	this.hideLoading = function(){
		loading.fadeOut("slow");
		more.show();
	};

	//update now showing after every click of show more
	this.update_now = function() {
		anchor.attr("href", "#m_"+this.idx+'_'+this.show_current);
		this.now_showing = parseInt(this.show_current) + parseInt(this.show_more);
		this.show_current = this.now_showing;

		//hide show more when total attendees are shown
		this.num_items = parseInt(this.num_items);
		this.show_more_link(this.now_showing);
		anchor.click();
	}
		
	this.show_more_link = function(current_listing) {
		if(current_listing >= this.num_items) {
			
			more.slideUp("fast");
			this.now_showing = 0;
		}
	}

}
