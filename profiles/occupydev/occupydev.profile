<?php
/**
 * Implement hook_install().
 *
 * Perform actions to set up the site for this profile.
 */
function profilename_install() {
  include_once DRUPAL_ROOT . '/profiles/standard/standard.install';
  standard_install();
}
?>
