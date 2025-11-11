/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	ResponsiveWrapper,
	__experimentalDivider as Divider,
} from "@wordpress/components";

import { useSelect } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	console.log({ props });
	const { className, ...blockProps } = useBlockProps();

	const image1 = useSelect(
		(select) => {
			const imgData = select("core").getEntityRecord(
				"postType",
				"attachment",
				props.attributes.heroImgId,
			);
			return imgData;
		},
		[props.attributes.heroImgId],
	);

	const mainHeroImage = image1 ? image1?.source_url : "";

	const image2 = useSelect(
		(select) => {
			const imgData = select("core").getEntityRecord(
				"postType",
				"attachment",
				props.attributes.mobImgId,
			);
			return imgData;
		},
		[props.attributes.mobImgId],
	);

	return (
		<>
			<section className={`${className}`} {...blockProps}>
				<div
					className="fox-duplex-block-container gb-container alignfull"
					style={{
						// backgroundImage: `url(${props.attributes.heroImgSourceUrl})`,
						backgroundImage: `url(${props.attributes.duplexImgSourceUrl})`,
						backgroundPosition: `center ${props.attributes.imgVertPosition}%`,
					}}
				>
					<div className="gb-container fox-duplex-block-content-container">
						<div className="fox-duplex-block-img-wrapper">
							<img
								className="fox-duplex-block-img"
								src={mainHeroImage}
								alt="The Image"
							/>
						</div>
						<div className="fox-duplex-block-content-wrapper">
							<p className="fox-duplex-block-paragraph">
								{props.attributes.heroParagraph}
								hello from the duplex paragraph
							</p>
						</div>
					</div>
				</div>

				<div
					className="fox-duplex-block-container-mob gb-container alignfull"
					style={{
						backgroundImage: `url(${props.attributes.heroImgMobSourceUrl})`,
						backgroundPosition: `center ${props.attributes.imgVertPosition}%`,
					}}
				>
					<div className="gb-container fox-duplex-block-content-container">
						<div className="fox-duplex-block-content-wrapper">
							<p>{props.attributes.heroParagraph} </p>
						</div>
					</div>
				</div>
			</section>

			<InspectorControls>
				<PanelBody title="Hero Section Settings" opened="true">
					<Divider />

					<p>HERO IMAGE</p>

					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							render={({ open }) => {
								return (
									<button onClick={open} className="fox-img-picker-button">
										Select Hero Image
									</button>
								);
							}}
							value={props.attributes.heroImgId}
							onSelect={(item) => {
								console.log({ item });
								props.setAttributes({
									heroImgId: item.id,
								});
								props.setAttributes({
									pickedHeroImgUrl: item.url,
								});
								console.log({ pickedHeroImgUrl });
							}}
						></MediaUpload>
					</MediaUploadCheck>
					<div className="fox-edit-controls-image-wrapper">
						{!!props.attributes.heroImgId && !!image1?.source_url && (
							<img
								src={image1 ? image1?.source_url : ""}
								height={250}
								width={250}
							/>
						)}
					</div>

					<TextControl
						label="Hero Image Vertical Position"
						help="Enter a number between 0 and 100. This is the percent up or down to align the image as desired."
						value={props.attributes.imgVertPosition}
						onChange={(newValue) => {
							props.setAttributes({ imgVertPosition: newValue });
						}}
					/>

					<Divider />

					<p>MOBILE IMAGE</p>

					<MediaUploadCheck label="Pick Mobile Background Image">
						<MediaUpload
							allowedTypes={["image"]}
							render={({ open }) => {
								return (
									<button onClick={open} className="fox-img-picker-button">
										Select Mobile Image
									</button>
								);
							}}
							value={props.attributes.mobImgId}
							onSelect={(item) => {
								console.log({ item });
								props.setAttributes({
									mobImgId: item.id,
								});
								props.setAttributes({
									pickedMobImgUrl: item.url,
								});
								console.log({ pickedMobImgUrl });
							}}
						></MediaUpload>
					</MediaUploadCheck>
					<div className="fox-edit-controls-image-wrapper">
						{!!props.attributes.mobImgId && !!image2?.source_url && (
							<img
								src={image2 ? image2?.source_url : ""}
								height={170}
								width={170}
							/>
						)}
					</div>

					<Divider />

					<TextControl
						label="Hero Title"
						value={props.attributes.heroTitle}
						onChange={(newValue) => {
							props.setAttributes({ heroTitle: newValue });
						}}
					/>

					<TextareaControl
						label="Hero Paragraph"
						value={props.attributes.heroParagraph}
						onChange={(newValue) => {
							props.setAttributes({ heroParagraph: newValue });
						}}
					/>

					<Divider />
				</PanelBody>
			</InspectorControls>
		</>
	);
}
