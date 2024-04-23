<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_wet' );

/** Database username */
define( 'DB_USER', 'tomek' );

/** Database password */
define( 'DB_PASSWORD', 'ibiza' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3307' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1!4DK8P>qM6AL?Y]8[b:Q`zngKiHe-r4OGSugt{*D`-ZRr:Z_3oH{zEzTJ&;g9Sz' );
define( 'SECURE_AUTH_KEY',  '0F4>Z;S&H LG9|p4T2Ku&U8G[1&&Vl [+0?Pdi&r(oEo?;J1Q)Z0&[}K-Q}I1*+>' );
define( 'LOGGED_IN_KEY',    'O.=0DgJpgr5~GOX[c0}LiW:h%E/{;C%sx+&[,!#R4;anS_7l!X_%YVfH{S#Y}(`z' );
define( 'NONCE_KEY',        'D>BI`$+a[g~REZ8y?}}A&R6FwTd>(Rm1Q`R *G}#M`&C/b 5fH+5f4R%<{eC:8{o' );
define( 'AUTH_SALT',        '|Tm5#WTV&uT@iwH7]++m,EA{t=)a9Z[DS* _lDT!U;^KlVhdoqsos[2t=v(Yu>]#' );
define( 'SECURE_AUTH_SALT', 'zxs!ns,Daww^<bg;QD)dD^OMdq:4&@puw!7BGyns/PH@o)(wzT+wea7jjV;gCUqZ' );
define( 'LOGGED_IN_SALT',   'ceY~[p{5&Xd.-PHw@t&@6IYSZpiw,~q8~Z{ZyTNkbM{8BsiW/G-OD4I)u&{B2$;^' );
define( 'NONCE_SALT',       '<&1M4V<=]X7bcdIF#sVytC###ExU/(K()#(@Wa@ d>TYhd2|m~M_jWE*9DON*<<q' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
