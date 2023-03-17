<?php
/**
 * The Template for displaying all single posts.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>
<?php  
         $slider = get_field ('slider'); 
$content = get_field ('content');
$heading = get_field ('heading');
         ?>
<?php if( get_field('slider') ): ?>
    
<?php endif; ?>


	<div <?php generate_do_attr( 'content' ); ?>>
		<main <?php generate_do_attr( 'main' ); ?>>
               <section class="sec-a"> 
   
    <div class="col-md-12 col-sm-12 col-xs-12"> 
	   
     <div class="post-banner"><img src="<?php the_field('slider'); ?>" class="img-fluid" /></div>
		<h1 class="post-heading">
		   <?php echo $heading;?>
	   </h1>
   <p><?php echo $content;?></p> 
		
   </div> 
   </section>
			<?php
			/**
			 * generate_before_main_content hook.
			 *
			 * @since 0.1
			 */
			do_action( 'generate_before_main_content' );

			if ( generate_has_default_loop() ) {
				while ( have_posts() ) :

					the_post();

					generate_do_template_part( 'single' );

				endwhile;
			}

			/**
			 * generate_after_main_content hook.
			 *
			 * @since 0.1
			 */
			do_action( 'generate_after_main_content' );
			?>
			

		</main>
	</div>

	<?php
	/**
	 * generate_after_primary_content_area hook.
	 *
	 * @since 2.0
	 */
	do_action( 'generate_after_primary_content_area' );

	generate_construct_sidebars();

	get_footer();
