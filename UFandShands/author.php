<?php include("header.php"); ?>

<div id="content-wrap">
  <div id="content-shadow">
    <div id="content" class="container">

      <article id="main-content" class="span-17" role="main">
        <div class="box">

        <?php if (have_posts()) : ?>			

          <?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>

          <?php /* If this is an author archive */
          if (is_author()) { ?>
            <?php $curauth = get_userdata(get_query_var('author')); ?>
                        
            <h1><?php echo $curauth->first_name . "&nbsp;" . $curauth->last_name; ?></h1>
            <p class="lead"><?php echo $curauth->title; ?></p>
            
            <div class="about-author-page">
            <div class="user-picture"><?php echo get_avatar($curauth->ID, 140); ?></div>
            <p class="author-description"><?php echo $curauth->description; ?></p>
            </div>
            
            <hr>
            
            <h2 class="page-title dark-blue">All Posts by <strong class="medium-blue"><?php echo $curauth->first_name . "&nbsp;" . $curauth->last_name; ?></strong>
            <a title="Subscribe to <?php echo $curauth->first_name . "&nbsp;" . $curauth->last_name; ?> RSS Feed" href="feed/"><img class="rss-icon" src="<?php bloginfo('template_directory'); ?>/images/rss.png" alt="Subscribe to RSS Feed" /></a></h2>

          <?php /* If this is a paged archive */
          } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
            <h1 class="page-title medium-blue">Blog Archives <a title="Subscribe to RSS Feed" href="feed/"><img class="rss-icon" src="<?php bloginfo('template_directory'); ?>/images/feed.png" alt="Subscribe to RSS Feed" /></a></h1>

          <?php } ?>

          <?php   ?>

          <?php while (have_posts()) : the_post(); ?>

    <?php
    // Set Loop variables
    $currenttemplate = get_post_meta($post->ID, '_wp_page_template', true);
    $members_only = ufandshands_members_only();
    ?>

            <div class="entry">

    <?php
    if ($currenttemplate == "membersonly.php") :

      if ($members_only) :
        ?>

                  <!-- Members Only -->
        <?php
        if (function_exists("ufandshands_post_thumbnail")) {
          ufandshands_post_thumbnail('thumbnail', 'alignleft', 130, 100);
        }
        ?>

                  <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                  <p class="published"><span class="black-50">Published: <?php the_time('M jS, Y') ?></p>

        <?php the_excerpt(); ?>

                <?php else : ?>

                  <!-- Non-Members -->
                  <p>This document can only be seen by users inside the UF/Shands network.</p>

                <?php endif; ?>

              <?php else : ?>

                <!-- Non Members-Only Templates -->	

      <?php
      if (function_exists("ufandshands_post_thumbnail")) {
        ufandshands_post_thumbnail('thumbnail', 'alignleft', 130, 100);
      }
      ?>
                <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>  
                <p class="published"><span class="black-50">Published: <?php the_time('M jS, Y') ?></p>
              <?php the_excerpt(); ?>

              </div><!-- end .entry -->

    <?php endif; ?>

  <?php endwhile; ?>

  <?php 
    if (function_exists("ufandshands_pagination")) {
      ufandshands_pagination($additional_loop->max_num_pages);
    }
  ?>

<?php else : ?>

          <h1 class="entry-title">Error 404 - Not Found</h1>

          <div class="entry">
            <p>Sorry, but you are looking for something that isn't here.</p>
          </div>

<?php endif; ?>

        </div>
      </article><!-- end #main-content --> 
	  
	  <?php get_sidebar(post_sidebar); ?>
	  
    </div>
  </div>
</div>
<?php include('user-role-menu.php'); ?>
<?php include("footer.php"); ?>
