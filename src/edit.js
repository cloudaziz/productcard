import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

// style={{ textAlign: attributes.aligment }}

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeDiscount = (newDiscount) => {
		setAttributes({ discount: newDiscount });
	};

	return (
		<div className="wrapper">
			<div className="card">
				<div className="arivalDate">Arived in Dec 27</div>
				<div className="imageArea">
					<img
						src="https://images.timberland.com/is/image/timberland/A1J1N230-HERO?$496x496$"
						alt=""
					/>
				</div>

				<InspectorControls>
					<PanelBody>Contents</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					{
						<BlockControls>
							<AlignmentToolbar
								value={attributes.alignment}
								onChange={onChangeAlignment}
							/>
						</BlockControls>
					}
					<RichText
						tagName="p"
						className="discount"
						onChange={onChangeDiscount}
						value={attributes.discount}
						placeholder={__("Discount price...")}
					/>
				</div>

				<RichText
					{...blockProps}
					tagName="p"
					className="productName"
					onChange={onChangeContent}
					value={attributes.content}
					placeholder={__("Enter your product name...")}
				/>

				<div className="itemPrice">
					<span>$94 </span>$50
				</div>
				<div className="colorCercle">
					<span className="cercle"></span>
					<span className="cercle red"></span>
					<span className="cercle green"></span>
					<span className="cercle blue"></span>
				</div>
			</div>
		</div>
	);
}

{
	/* <p>
	URL is {attributes.url}, title is {attributes.title}, and size is
	{attributes.size}.
</p>; */
}
