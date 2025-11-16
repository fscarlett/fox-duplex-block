<?php
// This file is generated. Do not modify it manually.
return array(
	'fox-duplex-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/fox-duplex-block',
		'version' => '0.1.0',
		'title' => 'Fox Duplex Block',
		'category' => 'widgets',
		'icon' => 'columns',
		'description' => 'A Gutenberg block with image & text columns.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number',
				'default' => '0'
			),
			'pickedImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mobImgId' => array(
				'type' => 'number',
				'default' => '0'
			),
			'pickedMobImgUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'duplexImageSourceUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'duplexImageMobSourceUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'duplexHeading' => array(
				'type' => 'string',
				'default' => ''
			),
			'duplexParagraph' => array(
				'type' => 'string',
				'default' => ''
			),
			'hasCTA' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ctaLinkText' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaLinkUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'removeBackgroundColor' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ctaBackgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hasImgPadding' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'fox-duplex-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
