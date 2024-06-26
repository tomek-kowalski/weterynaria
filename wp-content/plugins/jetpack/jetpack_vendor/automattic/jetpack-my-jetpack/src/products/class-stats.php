<?php
/**
 * Jetpack Stats product
 *
 * @package my-jetpack
 */

namespace Automattic\Jetpack\My_Jetpack\Products;

use Automattic\Jetpack\My_Jetpack\Module_Product;
use Automattic\Jetpack\My_Jetpack\Wpcom_Products;
use Jetpack_Options;

/**
 * Class responsible for handling the Jetpack Stats product
 */
class Stats extends Module_Product {
	/**
	 * The product slug
	 *
	 * @var string
	 */
	public static $slug = 'stats';

	/**
	 * The Jetpack module name associated with this product
	 *
	 * @var string|null
	 */
	public static $module_name = 'stats';

	/**
	 * The Plugin slug associated with stats
	 *
	 * @var string|null
	 */
	public static $plugin_slug = self::JETPACK_PLUGIN_SLUG;

	/**
	 * The Plugin file associated with stats
	 *
	 * @var string|null
	 */
	public static $plugin_filename = self::JETPACK_PLUGIN_FILENAME;

	/**
	 * Get the internationalized product name
	 *
	 * @return string
	 */
	public static function get_name() {
		return __( 'Stats', 'jetpack-my-jetpack' );
	}

	/**
	 * Get the internationalized product title
	 *
	 * @return string
	 */
	public static function get_title() {
		return __( 'Jetpack Stats', 'jetpack-my-jetpack' );
	}

	/**
	 * Get the internationalized product description
	 *
	 * @return string
	 */
	public static function get_description() {
		return __( 'Simple, yet powerful analytics', 'jetpack-my-jetpack' );
	}

	/**
	 * Get the internationalized product long description
	 *
	 * @return string
	 */
	public static function get_long_description() {
		return __( 'With Jetpack Stats, you don’t need to be a data scientist to see how your site is performing.', 'jetpack-my-jetpack' );
	}

	/**
	 * Get the internationalized features list
	 *
	 * @return array CRM features list
	 */
	public static function get_features() {
		return array(
			__( 'Real-time data on visitors', 'jetpack-my-jetpack' ),
			__( 'Traffic stats and trends for post and pages', 'jetpack-my-jetpack' ),
			__( 'Detailed statistics about links leading to your site', 'jetpack-my-jetpack' ),
			__( 'GDPR compliant', 'jetpack-my-jetpack' ),
			__( 'Access to upcoming advanced features', 'jetpack-my-jetpack' ),
			__( 'Priority support', 'jetpack-my-jetpack' ),
			__( 'Commercial use', 'jetpack-my-jetpack' ),
		);
	}

	/**
	 * Get the product pricing details
	 * Only showing the pricing details for the commercial product
	 *
	 * @return array Pricing details
	 */
	public static function get_pricing_for_ui() {
		return array_merge(
			array(
				'available'          => true,
				'wpcom_product_slug' => static::get_wpcom_product_slug(),
			),
			Wpcom_Products::get_product_pricing( static::get_wpcom_product_slug() )
		);
	}

	/**
	 * Get the WPCOM product slug used to make the purchase
	 *
	 * @return ?string
	 */
	public static function get_wpcom_product_slug() {
		return 'jetpack_stats_yearly';
	}

	/**
	 * Get the WPCOM Pay Whatever You Want product slug used to make the purchase
	 *
	 * @return ?string
	 */
	public static function get_wpcom_pwyw_product_slug() {
		return 'jetpack_stats_pwyw_yearly';
	}

	/**
	 * Get the WPCOM free product slug
	 *
	 * @return ?string
	 */
	public static function get_wpcom_free_product_slug() {
		return 'jetpack_stats_free_yearly';
	}

	/**
	 * Checks whether the site already supports this product through an existing plan or purchase
	 *
	 * @return boolean
	 */
	public static function has_required_plan() {
		$purchases_data = Wpcom_Products::get_site_current_purchases();
		if ( is_wp_error( $purchases_data ) ) {
			return false;
		}
		if ( is_array( $purchases_data ) && ! empty( $purchases_data ) ) {
			foreach ( $purchases_data as $purchase ) {
				if ( str_starts_with( $purchase->product_slug, 'jetpack_stats' ) ) {
					return true;
				}
				if ( str_starts_with( $purchase->product_slug, 'jetpack_complete' ) ) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Checks whether the product can be upgraded to a different product.
	 * Only Jetpack Stats Commercial plan is not upgradable.
	 *
	 * @return boolean
	 */
	public static function is_upgradable() {
		$purchases_data = Wpcom_Products::get_site_current_purchases();
		if ( is_wp_error( $purchases_data ) ) {
			return false;
		}

		if ( is_array( $purchases_data ) && ! empty( $purchases_data ) ) {
			// For now, only the free and commercial tiered subs show as upgradable
			$upgradeable_stats_purchases = array_filter(
				$purchases_data,
				static function ( $purchase ) {
					// Free plan is upgradeable
					if ( $purchase->product_slug === 'jetpack_stats_free_yearly' ) {
						return true;
						// Commercial plans are upgradeable if they have a tier
					} elseif (
						in_array(
							$purchase->product_slug,
							array( 'jetpack_stats_yearly', 'jetpack_stats_monthly', 'jetpack_stats_bi_yearly' ),
							true
						) &&
						! empty( $purchase->current_price_tier_slug )
					) {
						return true;
					}

					return false;
				}
			);

			return ! empty( $upgradeable_stats_purchases );
		}

		// If there are no plans found, don't consider the product as upgradeable
		return false;
	}

	/**
	 * Returns a redirect parameter for an upgrade URL if current purchase license is a free license
	 * or an empty string otherwise.
	 *
	 * @return string
	 */
	public static function get_url_redirect_string() {
		$purchases_data = Wpcom_Products::get_site_current_purchases();
		if ( is_wp_error( $purchases_data ) ) {
			return '';
		}
		if ( is_array( $purchases_data ) && ! empty( $purchases_data ) ) {
			foreach ( $purchases_data as $purchase ) {
				if (
					str_starts_with( $purchase->product_slug, static::get_wpcom_free_product_slug() )
				) {
					return '&productType=personal';
				} elseif (
					in_array(
						$purchase->product_slug,
						array( 'jetpack_stats_yearly', 'jetpack_stats_monthly', 'jetpack_stats_bi_yearly' ),
						true
					) &&
					! empty( $purchase->current_price_tier_slug )
				) {
					return '&productType=commercial';
				}
			}
		}
		return '';
	}

	/**
	 * Checks whether the product supports trial or not.
	 * Since Jetpack Stats has been widely available as a free product in the past, it "supports" a trial.
	 *
	 * @return boolean
	 */
	public static function has_trial_support() {
		return true;
	}

	/**
	 * Get the WordPress.com URL for purchasing Jetpack Stats for the current site.
	 *
	 * @return ?string
	 */
	public static function get_purchase_url() {
		// The returning URL could be customized by changing the `redirect_uri` param with relative path.
		return sprintf(
			'%s#!/stats/purchase/%d?from=jetpack-my-jetpack%s&redirect_uri=%s',
			admin_url( 'admin.php?page=stats' ),
			Jetpack_Options::get_option( 'id' ),
			static::get_url_redirect_string(),
			rawurlencode( 'admin.php?page=stats' )
		);
	}

	/**
	 * Get the URL where the user manages the product
	 *
	 * @return ?string
	 */
	public static function get_manage_url() {
		return admin_url( 'admin.php?page=stats' );
	}
}
