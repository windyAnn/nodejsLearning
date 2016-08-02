
;(function () {
	var Index = function () {
		this.addPhone = $('.addPhone');  //button   添加按钮
		var self = this;
		//弹出添加手机的对话框    //button   添加按钮
		$(this.addPhone).bind('click',function () {
			$('.productInfo').removeClass('hide');
		});

		$('.submit').bind('click', function() {self.uploadFile();});
		this.init();
		//添加到购物车内//只有在Li已经添加成功了以后才能够有addInShopCart
		this.shopInNum = 0;
		this.addInShopCart = $('.addInShopCart');
		this.shopAddNnm = $('.shopAddNnm');
		this.shopNum = $('.shopNum');
	};
	Index.prototype = {
		addProdHtml: function (data) {
			var	 ListItemNum = $('.commodityListItem').length;
			var phoneList = null;
			var self = this;
			if (ListItemNum<4){
				phoneList = $('<li class="commodityListItem fl">' +
					'<a class= "shopImg" ><img width="160" src=' + data.Img + '></a>' +
					'<a class="description"><h4>' + data.Discription + '</h4></a>' +
					'<a class="price">' + data.Price + '</a>' +
					'<a class="addInShopCart"><img width=80 src="images/icon/buy_btn.jpg"' +
					'</a><span class="shopAddNnm hide"></span>	' +
					'</li>');
				$('.specificCommodityUp').append(phoneList);
				var shopInNum = 0;
				$('.addInShopCart').each(function (i, ele) {
					$(this).bind('click', function () {
						++shopInNum;
						$($(".shopAddNnm")[i]).removeClass('hide').html(shopInNum);
						//console.log($(shopAddNnm));
						//发送数据
						$.ajax({
								method: 'POST',
								url: "/shopInCart",
								data: {shopInNum: shopInNum}
							})
							.done(function (msg) {
								//获取数据
								$.ajax({
										method: 'GET',
										url: "/shopInCart"
									})
									.done(function (data) {
										$(".shopNum").html(data.shopInNum);
									});
							});
					})
				});


			}

			if(ListItemNum>=4){
				phoneList = $('<li class=" fl">'+
					'<a href="#" class="show fl shopImg"><img width="97" src='+ data.Img +'></a>'+
					'<span class="show fl description">'+ data.Discription + '<br>'+data.Price+'</span>'+
					'<a href="#"  class="liThird addInShopCart"><img width=80' +
					' src="images/icon/buy_btn.jpg"></a>'+
					'<span class="shopAddNnm hide"></span>'+
					'</li>');
				$('.specificCommodityDown').append(phoneList);
			}
			$('.productInfo').addClass('hide');
		},
		//上传文档
		uploadFile: function () {
			var formData = new FormData();
			var self = this;

			formData.append('file', $('#uploadfile')[0].files[0]);
			formData.append('proInfo', $('#text').val());
			formData.append('phonePrice', $('#phonePrice').val());
			$.ajax({
				url: '/upload',
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function(data){
					self.addProdHtml(data.data);
				},
				error: function(){
					$("#spanMessage").html("与服务器通信发生错误");
				}
			}).done(function (data) {

				});

		},
		init: function (e) {
			var self = this;
			$.ajax({
				url: '/upload',
				method: "GET"
			}).done(function (data) {
				for (var i = 0; i < data.data.length; i++) {
					self.addProdHtml(data.data[i]);
				}
			});
		}


		/*按钮选择文件*/


	};
	window['Index'] = Index;
})(jQuery);

$(document).ready(function () {
	var index = new Index();
});


