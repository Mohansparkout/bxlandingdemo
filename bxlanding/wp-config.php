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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bxlanding' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '|I,y .n=di~{ZJN/???2U7_jB`r@S=-)7~!Pc5W[GfL*LuQ:LcZX-- >{ k;4S{z' );
define( 'SECURE_AUTH_KEY',  '{/CgpL$w-t^E:)3fOb{m. uGfzg+}P88k^NFU#IW7 AuR8H.1soJy /y78KoYdF,' );
define( 'LOGGED_IN_KEY',    'ZJpY*$FOtBxbm!c9X;L)S8)Gp&71cCh9%SM7V>31J?UGybJQE-E(+B~Nq?nQ0NzI' );
define( 'NONCE_KEY',        '!AwhQuMws@>1T*yUY$]++KeW8gHAQia%p-+293`]3/f@M{2{{ZJF`<ORE&tyVGwh' );
define( 'AUTH_SALT',        'v*R4Y%?e)Vma@[,6?Ey!9YsSsa2T5<*2M/O-t-Wl3$d=DgM.xhGa_}nK6?mnJ]/U' );
define( 'SECURE_AUTH_SALT', ':2BhvS0s[3]O{F,m6z|2`vJ=uK-v{MHR0m$os,CcjV@lJoEqPq`;%@}!5gP&ntu|' );
define( 'LOGGED_IN_SALT',   'Us$b]Euf3`RgYT,SJoYC!hDw>M*rH4([j/k[.X`~}#-bxM{h$78P3PJq 8|Ou>WH' );
define( 'NONCE_SALT',       '1i.H?V93ox9(@YR)K8r-}{f^YQ!MSk$}?ax#v)II]EZ%<Z_u5<X=<Shr7sn5-L$a' );

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
