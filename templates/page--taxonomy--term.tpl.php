<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>
  <?php print render($page['sitemap_nav']); ?>
  <?php if ($logo): ?>
    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"  id="logo_largeScreens" class="logo_largeScreens">
      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
    </a>
  <?php endif; ?>
  <div id="page-wrapper"><div id="page">

    <div id="header"><div class="section clearfix">
      <?php if ($site_name || $site_slogan): ?>
        <div id="name-and-slogan">
          <?php if ($site_name): ?>
            <?php if ($title): ?>
              <div id="site-name"><strong>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
              </strong></div>
            <?php else: /* Use h1 when the content title is empty */ ?>
              <h1 id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
              </h1>
            <?php endif; ?>
          <?php endif; ?>

          <?php if ($site_slogan): ?>
            <div id="site-slogan"><?php print $site_slogan; ?></div>
          <?php endif; ?>
        </div> <!-- /#name-and-slogan -->
      <?php endif; ?>

      <?php if ($main_menu || $secondary_menu): ?>
        <div id="navigation">
          <div class="section nav-group">
            <div class="brandAndToggleDiv">
              <?php if ($logo): ?>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo" class="logo">
                  <img src="<?php echo file_create_url(path_to_theme().'/images-source/logo_stv.png') ?>" alt="<?php print t('Home'); ?>" />
                </a>
              <?php endif; ?>
              <!-- <div class="site-slogan">Belarus news in English</div> -->
              <i class="fa fa-2x fa-bars toggle" aria-hidden="true"></i>
            </div>
            <div class="nav-menu-div">
              <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('main-menu links', 'clearfix'))/*, 'heading' => t('Main menu')*/)); ?>
              <div class="secondary_menu_wrapper">
                <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('login-menu links', 'clearfix'))/*, 'heading' => t('Secondary menu')*/)); ?>
                <a href="http://ctv.by" title="<?php print t('CTV.by Russian version'); ?>" rel="home" id="logo_ruslang" class="logo_lang">
                  <img src="<?php echo file_create_url(path_to_theme().'/images-source/rus_flag.png') ?>" alt="<?php print t('CTV.by Russian version'); ?>" />
                </a>
                <i class="fa fa-2x fa-user login-menu-hider" aria-hidden="true"></i>
                <i class="fa fa-2x fa-bars toggle_largeScreens" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div class="section nav-group2">
            <div class="nav-menu-div">
              <?php print theme(
              'links__system_main_menu_2',
              array(
                'links' => $main_menu_2,
                'attributes' => array(
                  'id' => 'main-menu-2',
                  'class' => array(
                    'main-menu-2 links',
                    'clearfix'
                  )
                ),
                  'heading' => array(
              	    'text' => t('Trending'),
              	    'level' => 'h4',
                    'class' => 'hot-topics-heading'
                  )
               )
             ); ?>
            </div>
          </div>
        </div> <!-- /.section, /#navigation -->
      <?php endif; ?>

      <?php print render($page['header']); ?>

    </div></div> <!-- /.section, /#header -->



    <?php if ($breadcrumb): ?>
      <div id="breadcrumb"><?php print $breadcrumb; ?></div>
    <?php endif; ?>

    <?php print $messages; ?>

    <div id="main-wrapper">
      <div id="main" class="clearfix">
        <div id="content" class="column">
          <div class="section">
          <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
          <a id="main-content"></a>
          <?php print render($title_prefix); ?>
          <?php // take away the header if this is not the home page ?>
          <?php if ( !$is_front )
          {
            if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif;
            // $term = taxonomy_term_load(arg(2));
            // var_dump($term);
            // print $term->field_main_image['und'][0]['uri'];
          } ?>
          <?php print render($title_suffix); ?>
          <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
          <?php print render($page['help']); ?>
          <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

          <?php if ($page['taxonomy_recommended_items']): ?>
            <div id="taxonomy-recommended-items" class="clearfix">
              <h2 class="title title_recommended">Recommended</h2>
              <div class="section">
                <?php print render($page['taxonomy_recommended_items']); ?>
              </div>
            </div>
          <?php endif; ?>

          <?php print render($page['content']); ?>
          <?php print $feed_icons; ?>
          </div>
        </div> <!-- /.section, /#content -->
      </div>

      <div id="recommended-content-wrapper">
        <h1 class="title">Latest from Belarus</h1>
        <div id="content-recommended" class="clearfix">
          <?php if ($page['content_recommended']): ?>
            <div class="section">
            <?php print render($page['content_recommended']); ?>
            </div>
          <?php endif; ?>
        </div>

        <?php if ($page['sidebar_recommended']): ?>
          <div id="sidebar-recommended" class="column sidebar">
            <div class="section">
            <?php print render($page['sidebar_recommended']); ?>
            </div>
          </div> <!-- /.section, /#sidebar-recommended -->
        <?php endif; ?>
      </div>
    </div> <!-- /#main-wrapper -->



    <div id="footer"><div class="section">
      <?php print render($page['footer']); ?>
    </div></div> <!-- /.section, /#footer -->

  </div></div> <!-- /#page, /#page-wrapper -->
