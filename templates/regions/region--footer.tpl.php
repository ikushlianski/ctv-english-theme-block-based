<?php
/**
 * @file
 * Returns the HTML for the footer region.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728140
 */
?>
<?php if ($content): ?>
  <footer class="footer <?php print $classes; ?>" role="contentinfo">
    <div class="footer-content">
      <div class="footer-nav-menu">
        <?php $footer_menu = menu_navigation_links('menu-main-menu-2'); ?>
        <?php print theme('links__menu_main_menu_2', array('links' => $footer_menu, 'attributes' => array('id' => 'main-menu-footer', 'class' => array('main-menu links', 'clearfix')))); ?>
      </div>
      <div class="other-footer-content-wrapper">
        <div class="site-brand-footer">
          <div class="subtext">Belarusian Television Channel CTV</div>
          <div class="company-name">Stolichnoe Televidenie</div>
        </div>
        <div class="other-footer-links-wrapper">
          <nav class="other-footer-links">

          </nav>
        </div>
      </div>
    </div>
  </footer>
<?php endif; ?>
