<?php
/**
 * @file
 * Returns the HTML for the footer region.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728140
 */
?>

  <footer class="footer <?php print $classes; ?>" role="contentinfo">
    <div class="footer-content">

      <?php $footer_menu = menu_navigation_links('main-menu'); ?>
      <?php print theme('links__menu_main_footer', array('links' => $footer_menu, 'attributes' => array('id' => 'main-menu-footer', 'class' => array('main-menu-footer links', 'clearfix')))); ?>

      <div class="other-footer-content-wrapper">
        <div class="site-brand-footer">
          <div class="subtext">Belarusian Television Channel CTV</div>
          <div class="company-name">Stolichnoe Televidenie</div>
        </div>

        <nav class="other-footer-links-wrapper">
          <ul class="other-footer-links links">
            <li class="footer-link"><a href="#">Top management</a></li>
            <li class="footer-link"><a href="#">Contact us</a></li>
          </ul>
        </nav>
      </div>

      <div class="site-author">
        Site created by&nbsp;<a href="ilya.online">Ilya Kushlianski</a>
      </div>
    </div>
  </footer>
