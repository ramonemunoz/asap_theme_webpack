<?php
/**
 * Jetpack Compatibility File.
 *
 * @link https://jetpack.me/
 *
 * @package asap_s
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function asap_s_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'asap_s_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function asap_s_jetpack_setup
add_action( 'after_setup_theme', 'asap_s_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function asap_s_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function asap_s_infinite_scroll_render
