;(function () {
	var Index = function () {
		this.phoneNum = 4;
		var self = this;
		//self.appendPhone(, data.proInfo, 1000, "images/icon/buy_btn.jpg");

		//添加到购物车内
		this.addInShopCart = $('.addInShopCart');
		this.shopAddNnm = $('.shopAddNnm');
		this.shopNum = $('.shopNum');
		this.shopInNum = 0;
		//提交表单
		this.formData = $('#formData');
//添加到购物车内
		$(this.addInShopCart).each(function (i, ele) {
			$(this).bind('click', function () {
				++self.shopInNum;
				$(self.shopAddNnm[i]).removeClass('hide').html(self.shopInNum);
				//发送数据
				$.ajax({
						method: 'POST',
						url: "/shopInCart",
						data: {shopInNum: self.shopInNum}
					})
					.done(function (msg) {
						//获取数据
						$.ajax({
								method: 'GET',
								url: "/shopInCart"
							})
							.done(function (data) {
								$(self.shopNum).html(data.shopInNum);
							})
					})


			})
		});

		//添加产品信息
		$('.upLoad').onchange = this.fileSelect1;
		$('.submit').bind('click', this.uploadFile);


	};
	Index.prototype = {

		appendPhone: function (srcPhone, descri, price, srcIcon) {
			for (var i = 0; i < this.phoneNum; i++) {
				var phoneList = $('<li class="commodityListItem fl">' +
					'<a class= "shopImg" ><img src=' + srcPhone + '></a>' +
					'<a class="description"><h4>' + descri + '</h4></a>' +
					'<a class="price">' + price + '</a>' +
					'<a class="addInShopCart"><img width=80 src=' + srcIcon + '></a>' +
					'<span class="shopAddNnm hide"></span>	' +
					'</li>');
				$('.specificCommodityUp').append(phoneList);
			}
		},
		//实现打开文件
		fileSelect1: function (e) {
			var files = this.files;
			for (var i = 0, len = files.length; i < len; i++) {
				var f = files[i];
				html.push(
					'<p>',
					f.name + '(' + (f.type || "n/a") + ')' + ' - ' + f.size + 'bytes',
					'</p>'
				);
			}
			$('.list').innerHTML = html.join('');
		},
		//上传文档
		uploadFile: function () {
			var formData = new FormData();
			var self = this;
			formData.append('file', $('#uploadfile')[0].files[0]);
			formData.append('proInfo', $('#text').val());
			$.ajax({
				url: '/upload',
				type: 'POST',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function(data){
					if(200 === data.code) {
						$("#imgShow").attr('src', data.msg.url);
						$("#spanMessage").html("上传成功");
					} else {
						$("#spanMessage").html("上传失败");
					}
					console.log('imgUploader upload success, data:', data);
				},
				error: function(){
					$("#spanMessage").html("与服务器通信发生错误");
				}
			})
				.done(function (data) {
					$.ajax({
						url: '/upload',
						method: "GET"
					})
						.done(function (data) {

							var phoneList = $('<li class="commodityListItem fl">' +
								'<a class= "shopImg" ><img src=' + data.file + '></a>' +
								'<a class="description"><h4>' + data.proInfo + '</h4></a>' +
								'<a class="price">' + 1000 + '</a>' +
								'<a class="addInShopCart"><img width=80 src="images/icon/buy_btn.jpg"></a>' +
								'<span class="shopAddNnm hide"></span>	' +
								'</li>');
							$('.specificCommodityUp').append(phoneList);
						})
				});

		}


		/*按钮选择文件*/


	};
	window['Index'] = Index;
})(jQuery);

$(document).ready(function () {
	var index = new Index();
});
