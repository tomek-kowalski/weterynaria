<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6cfcc814dcead02ac0a50bb72e4439c0
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PriyoMukul\\WPNotice\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PriyoMukul\\WPNotice\\' => 
        array (
            0 => __DIR__ . '/..' . '/priyomukul/wp-notice/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PriyoMukul\\WPNotice\\Dismiss' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Dismiss.php',
        'PriyoMukul\\WPNotice\\Notice' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Notice.php',
        'PriyoMukul\\WPNotice\\Notices' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Notices.php',
        'PriyoMukul\\WPNotice\\Utils\\Base' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Base.php',
        'PriyoMukul\\WPNotice\\Utils\\CacheBank' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/CacheBank.php',
        'PriyoMukul\\WPNotice\\Utils\\Helper' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Helper.php',
        'PriyoMukul\\WPNotice\\Utils\\NoticeRemover' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/NoticeRemover.php',
        'PriyoMukul\\WPNotice\\Utils\\Storage' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Storage.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6cfcc814dcead02ac0a50bb72e4439c0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6cfcc814dcead02ac0a50bb72e4439c0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6cfcc814dcead02ac0a50bb72e4439c0::$classMap;

        }, null, ClassLoader::class);
    }
}
