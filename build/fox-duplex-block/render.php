<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
 <?php // echo get_block_wrapper_attributes(); ?>
	
 <section>
				<div
					class="fox-duplex-block-container gb-container alignfull"
					style="background-color: <?php echo $attributes['removeBackgroundColor'] ? 'transparent' : '#bef'; ?>; ">
					<div class="gb-container fox-duplex-block-content-container">
						<?php if ( ! $attributes['hasImgPadding'] ) : ?>
						<div class="fox-duplex-block-img-wrapper">
							<img
								class="fox-duplex-block-img"
								src=<?php echo esc_url( $attributes['pickedImageUrl'] ); ?>
								alt="The Image"
							/>
						</div>
						<?php else : ?>
							<div class="fox-duplex-block-img-wrapper-padded">
							<img
								class="fox-duplex-block-img-padded"
								src=<?php echo esc_url( $attributes['pickedImageUrl'] ); ?>
								alt="The Image"
							/>
						</div>
						<?php endif; ?>
						<div class="fox-duplex-block-content-wrapper">
							<h2 class="fox-duplex-block-title">
								<?php echo esc_html( $attributes['duplexHeading'] ); ?>
							</h2>
							<p class="fox-duplex-block-paragraph">
								<?php echo esc_html( $attributes['duplexParagraph'] ); ?>
							</p>
							<?php if ( $attributes['hasCTA'] ) : ?>
								<a
									href=<?php echo esc_url( $attributes['ctaLinkUrl'] ); ?>
									class="fox-duplex-block-cta-link"
								>
									<?php echo esc_html( $attributes['ctaLinkText'] ); ?>
								</a>
							<?php endif; ?>
						</div>
					</div>
				</div>

				<!-- mobile -->
				<div
					class="fox-duplex-block-container-mob gb-container alignfull"
					style="background-color: <?php echo $attributes['removeBackgroundColor'] ? 'transparent' : '#bef'; ?>; "
				>
					<div class="gb-container fox-duplex-block-content-container">
						<?php if ( ! $attributes['hasImgPadding'] ) : ?>
						<div class="fox-duplex-block-img-wrapper">
							<img
								class="fox-duplex-block-img"
								src=<?php echo esc_url( $attributes['pickedMobImgUrl'] ); ?>
								alt="The Image"
							/>
						</div>
						<?php else : ?>
							<div class="fox-duplex-block-img-wrapper-padded">
							<img
								class="fox-duplex-block-img-padded"
								src=<?php echo esc_url( $attributes['pickedMobImgUrl'] ); ?>
								alt="The Image"
							/>
						</div>
						<?php endif; ?>
						
						<div class="fox-duplex-block-content-wrapper">
							<h2 class="fox-duplex-block-title">
								<?php echo esc_html( $attributes['duplexHeading'] ); ?>
							</h2>
							<p class="fox-duplex-block-paragraph">
								<?php echo esc_html( $attributes['duplexParagraph'] ); ?>
							</p>
							<?php if ( $attributes['hasCTA'] ) : ?>
								<a
									href=<?php echo esc_url( $attributes['ctaLinkUrl'] ); ?>
									class="fox-duplex-block-cta-link"
								>
									<?php echo esc_html( $attributes['ctaLinkText'] ); ?>
								</a>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</section>
