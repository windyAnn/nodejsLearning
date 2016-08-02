/**
 * Created by shiyong on 8/2.
 */
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
