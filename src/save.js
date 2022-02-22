import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
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
				<p className="discount">{attributes.discount}</p>

				<p className="productName">{attributes.content}</p>

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
