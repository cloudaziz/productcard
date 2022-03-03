import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";

import { IconButton, PanelBody } from "@wordpress/components";

export default function save({ attributes }) {
	const { backgroundImage, titlecolor } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<div className="wrapper">
			<div className="card">
				<p className="arivalDate" style={{ color: titlecolor }}>
					{attributes.arivaldate}
				</p>
				{/* <div className="arivalDate">Arived in Dec 27</div> */}
				<div className="imageArea">
					<img src={backgroundImage} alt="" />
					{/* <img
						src="https://images.timberland.com/is/image/timberland/A1J1N230-HERO?$496x496$"
						alt=""
					/> */}
				</div>
				<p className="discount">{attributes.discount}</p>

				<p className="productName">{attributes.content}</p>
				<p className="itemPrice">
					<span>$94 </span>
					{attributes.price}
				</p>

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
