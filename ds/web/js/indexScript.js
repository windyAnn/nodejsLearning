;(function ($) {
	var Index = function () {
		this.ProductCategories = $('.ProductCategories')[0];
		this.shopDisplayArea = $('.shopDisplayArea')[0];
		this.addInShopCart = $('.addInShopCart');
		this.shopAddNnm = $('.shopAddNnm');
		this.shopInCartNum = 0;
		/*对所有的addInShopCart添加点击事件*/
		this.hoverEvent(this.ProductCategories, this.shopDisplayArea, 'show', 3000);
		var self = this;

		$(this.addInShopCart).each(function (i, ele) {

				$(this).bind('click', function () {
					++self.shopInCartNum;

					$.ajax({
							method: "POST",
							url: "/shopincart",
							data: { shopInCartNum: self.shopInCartNum}
						})
						.done(function( msg ) {
							$.ajax({
								url: "/shopincart"
							}).done(function(data) {
								var j = data;
								$('.shopNum').html(j.shopInCartNum);
								self.shopInCartNum = j.shopInCartNum;


							});
						});
					
					
					//console.log($(self.shopAddNnm)[i]);//$(self.shopAddNnm)[i]获取到的是DOM节点
					$(self.shopAddNnm[i]).removeClass('hide'); //先获取第几个self.shopAddNnm，后加$,属于jquery
					$(self.shopAddNnm[i]).html(self.shopInCartNum);
					
				});
			}
		)

	};
	Index.prototype = {
		/*这个hoverEvent事件要使用多次*/
		hoverEvent: function (ele1, ele2, className, dureTime) {
			$(ele1).hover(function () {
				$(ele2).addClass(className);
			}, function () {
				setTimeout(function () {
					$(ele2).removeClass(className);
				}, dureTime);
			});
		},
		/*点击购物车后改变*/
		addShopNum: function () {
			this.shopInCartNum


		}

	};
	window['Index'] = Index;
})(jQuery);


$(document).ready(function () {
	var index = new Index();
	$.ajax({
		url: "/shopincart"
	}).done(function(data) {
		var j = data;
		$('.shopNum').html(j.shopInCartNum);
		index.shopInCartNum = parseInt(j.shopInCartNum);

	});
	

});