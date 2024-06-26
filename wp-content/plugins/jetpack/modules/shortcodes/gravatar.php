<?php
/**
 * Gravatar shortcode for avatar and profile.
 *
 * Usage:
 *
 * [gravatar email="user@example.org" size="48"]
 * [gravatar_profile who="user@example.org"]
 *
 * @package automattic/jetpack
 */

add_shortcode( 'gravatar', 'jetpack_gravatar_shortcode' );
add_shortcode( 'gravatar_profile', 'jetpack_gravatar_profile_shortcode' );

/**
 * Get gravatar using the email provided at the specified size.
 *
 * @since 4.5.0
 *
 * @param array $atts Shortcode attributes.
 *
 * @return bool|string
 */
function jetpack_gravatar_shortcode( $atts ) {
	$atts = shortcode_atts(
		array(
			'email' => '',
			'size'  => 96,
		),
		$atts
	);

	if ( empty( $atts['email'] ) || ! is_email( $atts['email'] ) ) {
		return false;
	}

	$atts['size'] = (int) $atts['size'];
	if ( 0 > $atts['size'] ) {
		$atts['size'] = 96;
	}

	return get_avatar( $atts['email'], $atts['size'] );
}

/**
 * Display Gravatar profile
 *
 * @since 4.5.0
 *
 * @param array $atts Shortcode attributes.
 *
 * @uses shortcode_atts()
 * @uses get_user_by()
 * @uses is_email()
 * @uses sanitize_email()
 * @uses sanitize_user()
 * @uses set_url_scheme()
 * @uses wpcom_get_avatar_url()
 * @uses get_user_attribute()
 * @uses esc_url()
 * @uses esc_html()
 * @uses _e()
 *
 * @return string
 */
function jetpack_gravatar_profile_shortcode( $atts ) {
	// Give each use of the shortcode a unique ID.
	static $instance = 0;

	// Process passed attributes.
	$atts = shortcode_atts(
		array(
			'who' => null,
		),
		$atts,
		'jetpack_gravatar_profile'
	);

	// Can specify username, user ID, or email address.
	if ( is_numeric( $atts['who'] ) ) {
		$user_id = (int) $atts['who'];
		if ( ! is_user_member_of_blog( $user_id, get_current_blog_id() ) ) {
			// Bail if the user id is not a member of this site.
			return false;
		}
		$user = get_user_by( 'id', $user_id );
	} elseif ( is_email( $atts['who'] ) ) {
		$user = get_user_by( 'email', sanitize_email( $atts['who'] ) );
	} elseif ( is_string( $atts['who'] ) ) {
		$user = get_user_by( 'login', sanitize_user( $atts['who'] ) );
	} else {
		$user = false;
	}

	// Bail if we don't have a user.
	if ( false === $user ) {
		return false;
	}

	$hashed_email = hash( 'sha256', strtolower( trim( $user->user_email ) ) );
	$cache_key    = 'jetpack_gravatar_profile_' . $hashed_email;
	$profile      = get_transient( $cache_key );

	if ( empty( $profile ) ) {
		$profile_url = sprintf(
			'https://secure.gravatar.com/%s.json',
			$hashed_email
		);

		$response      = wp_remote_get(
			esc_url_raw( $profile_url ),
			array( 'User-Agent' => 'Jetpack Plugin Gravatar Profile Shortcode' )
		);
		$response_code = wp_remote_retrieve_response_code( $response );
		$expire        = 300; // Cache any errors for 5 minutes.
		$profile       = array();

		if ( $response_code === 200 ) {
			$profile = json_decode( wp_remote_retrieve_body( $response ), true );

			if (
				is_array( $profile )
				&& ! empty( $profile['entry'] )
				&& is_array( $profile['entry'] )
			) {
				// Sucessfully fetched the profile. Cache for 15 minutes.
				$expire  = 900;
				$profile = $profile['entry'][0];
			}
		}

		set_transient( $cache_key, $profile, $expire );
	}

	// Fetching the profile returned an error. Bail.
	if ( empty( $profile ) ) {
		return false;
	}

	// Render the shortcode.
	$gravatar_url     = 'https://gravatar.com/' . $hashed_email;
	$user_location    = ! empty( $profile['currentLocation'] ) ? $profile['currentLocation'] : '';
	$display_name     = ! empty( $profile['displayName'] ) ? $profile['displayName'] : '';
	$user_description = ! empty( $profile['aboutMe'] ) ? $profile['aboutMe'] : '';

	if ( defined( 'IS_WPCOM' ) && IS_WPCOM ) {
		$gravatar_url = 'https://gravatar.com/' . $user->user_login;
		$avatar_url   = wpcom_get_avatar_url( $user->ID, 96 );
		$avatar_url   = $avatar_url[0];
	} else {
		$avatar_url = get_avatar_url( $user->user_email, array( 'size' => 96 ) );
	}

	ob_start();

	if ( class_exists( 'Jetpack_AMP_Support' ) && Jetpack_AMP_Support::is_amp_request() ) {
		wp_enqueue_style( 'gravatar-style', plugins_url( '/css/gravatar-amp.css', __FILE__ ), array(), JETPACK__VERSION );
	} else {
		?>
		<script type="text/javascript">
		( function() {
			if ( null === document.getElementById( 'gravatar-profile-embed-styles' ) ) {
				var headID = document.getElementsByTagName( 'head' )[0];
				var styleNode = document.createElement( 'style' );
				styleNode.type = 'text/css';
				styleNode.id = 'gravatar-profile-embed-styles';

				var gCSS = '.grofile-wrap { border: solid 1px #f0f0f1; padding: 10px; } .grofile { padding: 0 0 5px 0; }  .grofile-left { float: left; display: block; width: 96px; margin-right: 15px; } .grofile .gravatar { margin-bottom: 5px; } .grofile-clear { clear: left; font-size: 1px; height: 1px; } .grofile ul li a { text-indent: -99999px; } .grofile .grofile-left a:hover { text-decoration: none !important; border: none !important; } .grofile-name { margin-top: 0; }';

				if ( document.all ) {
					styleNode.innerText = gCSS;
				} else {
					styleNode.textContent = gCSS;
				}

				headID.appendChild( styleNode );
			}
		} )();
		</script>
		<?php
	}
	?>

	<div class="grofile vcard" id="grofile-embed-<?php echo esc_attr( $instance ); ?>">
		<div class="grofile-inner">
			<div class="grofile-left">
				<div class="grofile-img">
					<a href="<?php echo esc_url( $gravatar_url ); ?>">
						<img src="<?php echo esc_url( $avatar_url ); ?>" width="96" height="96" class="no-grav gravatar photo" />
					</a>
				</div>
			</div>
			<div class="grofile-right">
				<p class="grofile-name fn">
					<strong><?php echo esc_html( $display_name ); ?></strong>
					<?php
					if ( ! empty( $user_location ) ) :
						?>
						<br><span class="grofile-location adr"><?php echo esc_html( $user_location ); ?></span><?php endif; ?>
				</p>
				<p class="grofile-bio">
					<strong><?php esc_html_e( 'Bio:', 'jetpack' ); ?></strong> <?php echo wp_kses_post( $user_description ); ?>
				</p>
				<p class="grofile-view">
					<a href="<?php echo esc_url( $gravatar_url ); ?>"><?php esc_html_e( 'View complete profile', 'jetpack' ); ?></a>
				</p>
			</div>
			<span class="grofile-clear">&nbsp;</span>
		</div>
	</div>
	<?php

	// Increment and return the rendered profile.
	++$instance;

	return ob_get_clean();
}
