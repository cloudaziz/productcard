import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { IconButton, PanelBody } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { backgroundImage, titlecolor } = attributes;

	const onSelectImage = (newImage) => {
		setAttributes({ backgroundImage: newImage.sizes.full.url });
	};

	useEffect(() => {
		setAttributes({
			backgroundImage:
				"https://images.timberland.com/is/image/timberland/A1J1N230-HERO?$496x496$",
		});
	}, []);

	const onTitleColorChange = (newColor) => {
		setAttributes({ titlecolor: newColor });
	};

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
	const onChangePrice = (newPrice) => {
		setAttributes({ price: newPrice });
	};
	const onChangeArivaldate = (newDate) => {
		setAttributes({ arivaldate: newDate });
	};

	const blockProps = useBlockProps({ className: "wrapper" });

	return (
		<div {...blockProps}>
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody title={"Font Color Settings"}>
					<p>
						<strong>Select a Title color:</strong>
					</p>
					<ColorPalette value={titlecolor} onChange={onTitleColorChange} />
				</PanelBody>
				<PanelBody title={"Background Image Settings"}>
					<p>
						<strong>Select a Background Image:</strong>
					</p>
					<MediaPlaceholder
						onSelect={onSelectImage}
						type="image"
						value={backgroundImage}
						render={({ open }) => {
							<IconButton onClick={open} icon="upload">
								Background Image
							</IconButton>;
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="card">
				<RichText
					tagName="p"
					className="arivalDate"
					onChange={onChangeArivaldate}
					value={attributes.arivaldate}
					placeholder={__("Enter Ariaval Date")}
					style={{ color: titlecolor }}
				/>
				{/* <div className="arivalDate">Arived in Dec 27</div> */}

				<div className="imageArea">
					<img src={backgroundImage} alt="" />
					{/* <img
						src="https://images.timberland.com/is/image/timberland/A1J1N230-HERO?$496x496$"
						alt=""
					/> */}
				</div>

				<RichText
					tagName="p"
					className="discount"
					onChange={onChangeDiscount}
					value={attributes.discount}
					placeholder={__("Discount price...")}
				/>
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
					className="productName"
					style={{ textAlign: attributes.alignment }}
					onChange={onChangeContent}
					value={attributes.content}
					placeholder={__("Enter your product name...")}
				/>

				<RichText
					tagName="p"
					className="itemPrice"
					onChange={onChangePrice}
					value={attributes.price}
					placeholder={__("$50")}
				/>

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
