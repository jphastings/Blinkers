// Blinkers
// version 0.1
// 2010-05-05
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Blinkers
// @namespace     http://toys.byJP.me/blinkers
// @description   Blinkers your Face… book's newsfeed, to make life more productive.
// @include       http://www.facebook.com/
// @include       http://www.facebook.com/?*
// @include       http://www.facebook.com/#
// @include       http://www.facebook.com/home.php*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$('h2.uiHeaderTitle').replaceWith('<h2 class="uiHeaderTitle"><i class="uiHeaderImage img spritemap_app_icons sx_app_icons_new_feature"></i>Blinkers</h2>')
$('h2.uiHeaderTitle').parent().prevAll().css('display','none')
$('#pagelet_composer').css('display','none')

var name = $('a.fbxWelcomeBoxName').text().split(" ")[0]
$('#pagelet_intentional_stream').replaceWith('<hr/><p>You\'ve got <a href="http://toys.byJP.me/blinkers" taget="blinkers">Blinkers on</a>. Now...</p><h1>Get back to work, '+name+'!</h1>')