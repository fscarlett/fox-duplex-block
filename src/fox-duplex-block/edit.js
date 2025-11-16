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
	ColorPicker,
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
	// console.log({ props });
	const { className, ...blockProps } = useBlockProps();

	const image1 = useSelect(
		(select) => {
			const imgData = select("core").getEntityRecord(
				"postType",
				"attachment",
				props.attributes.imageId,
			);
			return imgData;
		},
		[props.attributes.imageId],
	);

	const mainImage = image1 ? image1?.source_url : "";
	// console.log("mainImage:", mainImage);

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
	const mobileImage = image2 ? image2?.source_url : "";

	return (
		<>
			<section
				className={`${className}`}
				{...blockProps}
				style={{
					color: props.attributes.isWhiteText ? "#ffffff" : "#000000",
				}}
			>
				{/* desktop */}
				<div
					className="fox-duplex-block-container gb-container alignfull"
					style={{
						backgroundColor: props.attributes.removeBackgroundColor
							? "transparent"
							: props.attributes.backgroundColor,
					}}
				>
					<div
						className="gb-container fox-duplex-block-content-container"
						style={{
							flexDirection: props.attributes.isFlipped ? "row-reverse" : "row",
						}}
					>
						{!props.attributes.hasImgPadding && (
							<div className="fox-duplex-block-img-wrapper">
								<img
									className="fox-duplex-block-img"
									src={mainImage}
									alt="The Image"
								/>
							</div>
						)}
						{props.attributes.hasImgPadding && (
							<div className="fox-duplex-block-img-wrapper-padded">
								<img
									className="fox-duplex-block-img-padded"
									src={mainImage}
									alt="The Padded Image"
								/>
							</div>
						)}
						<div className="fox-duplex-block-content-wrapper">
							<h2 className="fox-duplex-block-title">
								{props.attributes.duplexHeading}
							</h2>
							<p className="fox-duplex-block-paragraph">
								{props.attributes.duplexParagraph}
							</p>
							{!!props.attributes.hasCTA && (
								<a
									href={props.attributes.ctaLinkUrl}
									className="fox-duplex-block-cta-link"
									style={{
										backgroundColor: props.attributes.ctaBackgroundColor,
										color: props.attributes.isWhiteText ? "#ffffff" : "#000000",
									}}
								>
									{props.attributes.ctaLinkText}
								</a>
							)}
						</div>
					</div>
				</div>

				{/* mobile */}
				<div
					className="fox-duplex-block-container-mob gb-container alignfull"
					style={{
						backgroundColor: props.attributes.removeBackgroundColor
							? "transparent"
							: props.attributes.backgroundColor,
					}}
				>
					<div className="gb-container fox-duplex-block-content-container">
						{!props.attributes.hasImgPadding && (
							<div className="fox-duplex-block-img-wrapper">
								<img
									className="fox-duplex-block-img"
									src={mobileImage}
									alt="The Image"
								/>
							</div>
						)}
						{props.attributes.hasImgPadding && (
							<div className="fox-duplex-block-img-wrapper-padded">
								<img
									className="fox-duplex-block-img-padded"
									src={mobileImage}
									alt="The Padded Image"
								/>
							</div>
						)}

						<div className="fox-duplex-block-content-wrapper">
							<h2 className="fox-duplex-block-title">
								{props.attributes.duplexHeading}
							</h2>
							<p className="fox-duplex-block-paragraph">
								{props.attributes.duplexParagraph}
							</p>
							{!!props.attributes.hasCTA && (
								<a
									href={props.attributes.ctaLinkUrl}
									className="fox-duplex-block-cta-link"
									style={{
										backgroundColor: props.attributes.ctaBackgroundColor,
										color: props.attributes.isWhiteText ? "#ffffff" : "#000000",
									}}
								>
									{props.attributes.ctaLinkText}
								</a>
							)}
						</div>
					</div>
				</div>
			</section>

			<InspectorControls>
				<PanelBody title="Duplex Section Settings" opened="true">
					<Divider />

					<p>IMAGE</p>

					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							render={({ open }) => {
								return (
									<button onClick={open} className="fox-img-picker-button">
										Select Image
									</button>
								);
							}}
							value={props.attributes.imageId}
							onSelect={(item) => {
								// console.log({ item });
								props.setAttributes({
									imageId: item.id,
								});
								props.setAttributes({
									pickedImageUrl: item.url,
								});
								// console.log({ pickedImageUrl });
							}}
						></MediaUpload>
					</MediaUploadCheck>
					<div className="fox-edit-controls-image-wrapper">
						{!!props.attributes.imageId && !!image1?.source_url && (
							<img
								src={image1 ? image1?.source_url : ""}
								height={250}
								width={250}
							/>
						)}
					</div>

					<ToggleControl
						label="Turn On Image Padding"
						checked={props.attributes.hasImgPadding}
						onChange={(newValue) => {
							props.setAttributes({
								hasImgPadding: newValue,
							});
						}}
					/>

					<ToggleControl
						label="Flip Image and Text Order"
						checked={props.attributes.isFlipped}
						onChange={(newValue) => {
							props.setAttributes({
								isFlipped: newValue,
							});
						}}
					/>

					<ToggleControl
						label="Enable White Text"
						checked={props.attributes.isWhiteText}
						onChange={(newValue) => {
							props.setAttributes({
								isWhiteText: newValue,
							});
						}}
					/>

					<ColorPicker
						label="Background Color"
						color={props.attributes.backgroundColor}
						onChange={(newValue) => {
							props.setAttributes({
								backgroundColor: newValue,
							});
						}}
						enableAlpha
						defaultValue="#ffffff"
					/>

					<ToggleControl
						label="Remove Background Color"
						checked={props.attributes.removeBackgroundColor}
						onChange={(newValue) => {
							props.setAttributes({
								removeBackgroundColor: newValue,
							});
						}}
					/>

					<Divider />

					<p>MOBILE IMAGE</p>

					<MediaUploadCheck label="Pick Mobile Image">
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
								// console.log({ item });
								props.setAttributes({
									mobImgId: item.id,
								});
								props.setAttributes({
									pickedMobImgUrl: item.url,
								});
								// console.log({ pickedMobImgUrl });
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

					<p>TEXT CONTENT</p>

					<TextControl
						label="Duplex Section Heading"
						value={props.attributes.duplexHeading}
						onChange={(newValue) => {
							props.setAttributes({ duplexHeading: newValue });
						}}
					/>

					<TextareaControl
						label="Duplex Section Paragraph"
						value={props.attributes.duplexParagraph}
						onChange={(newValue) => {
							props.setAttributes({ duplexParagraph: newValue });
						}}
					/>

					<ToggleControl
						label="Has CTA"
						checked={props.attributes.hasCTA}
						onChange={(newValue) => {
							props.setAttributes({
								hasCTA: newValue,
							});
						}}
					/>
					{!!props.attributes.hasCTA && (
						<TextControl
							label="CTA Link Text"
							value={props.attributes.ctaLinkText}
							onChange={(newValue) => {
								props.setAttributes({ ctaLinkText: newValue });
							}}
						/>
					)}

					{!!props.attributes.hasCTA && (
						<TextControl
							label="CTA Link Url"
							value={props.attributes.ctaLinkUrl}
							onChange={(newValue) => {
								props.setAttributes({ ctaLinkUrl: newValue });
							}}
						/>
					)}

					{!!props.attributes.hasCTA && (
						<ColorPicker
							label="CTA Background Color"
							color={props.attributes.ctaBackgroundColor}
							onChange={(newValue) => {
								props.setAttributes({
									ctaBackgroundColor: newValue,
								});
							}}
							enableAlpha
							defaultValue=""
						/>
					)}
					<Divider />
				</PanelBody>
			</InspectorControls>
		</>
	);
}
