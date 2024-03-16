<?php
/**
 * Plugin Name:       Kinsta Academy Block
 * Description:       An example block for Kinsta Academy students
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Dunn
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kinsta-academy-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function kinsta_academy_block_kinsta_academy_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'kinsta_academy_block_kinsta_academy_block_block_init' );
