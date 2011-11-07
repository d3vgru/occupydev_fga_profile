<?php
// $Id$

/**
 * Implements hook_views_plugins
 */
function pusher_views_feed_views_plugins() {
  $module_path = drupal_get_path('module', 'pusher_views_feed');

  $plugins = array(
  	'module' => 'pusher_views_feed',
    'style' => array(
     	'pusher_views_feed' => array(
        'title' => t('Push RSS Feed'),
        'help' => t('Generates an RSS feed from a view.'),
        'handler' => 'pusher_views_feed_views_plugin_style_rss',
        'parent' => 'rss',
        'path' => $module_path,
        'theme' => 'views_view_rss',
        'uses row plugin' => TRUE,
        'uses options' => TRUE,
        'type' => 'feed',
        'help topic' => 'style-rss',
      ),
    )
  );
  return $plugins;
}