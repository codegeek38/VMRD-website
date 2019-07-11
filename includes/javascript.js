(function(){

	'use strict'

	$(document).ready(function(){
		$('.menu-icon').on('click', function(){
			$('nav').addClass('show')
			$('.overlay').fadeIn()
		})

		$('.nav-close, .overlay').on('click', function(){
			$('nav').removeClass('show')
			$('.overlay').fadeOut()
		})
	})


}())