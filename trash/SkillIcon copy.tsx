// "use client";
// import React, { useEffect } from "react";

// const SkillIcon = ({ skillsObj, idx }) => {
// 	const cols = 6;
// 	const mdCols = 10;

// 	const randomSize = () => {
// 		const size = Math.floor(Math.random() * 200) + 1;
// 		const size2 = Math.floor(Math.random() * 60) + 1;
// 		const totalSize = size - size2;

// 		if (totalSize < 11 || totalSize > 128) {
// 			return randomSize();
// 		}
// 		return totalSize;
// 	};

// 	const randomIcon = () => {
// 		const icon = Math.floor(Math.random() * skillsObj?.length) + 1;
// 		return icon;
// 	};

// 	const randomInterval = () => {
// 		const icon = Math.floor(Math.random() * 20000) + 1000;
// 		return icon;
// 	};

// 	return (
// 		<div
// 			className={`
//           col-span-1 h-20 md:h-32
//           border-b border-r border-gray-700/60 flex items-center justify-center
//           ${(idx + 1) % cols === 0 ? "border-r-0" : ""}
//           ${
// 						Math.floor(idx / cols) === Math.floor((51 - 1) / cols)
// 							? "border-b-0"
// 							: ""
// 					}
//           md:${(idx + 1) % mdCols === 0 ? "border-r-0" : ""}
//           md:${
// 						Math.floor(idx / mdCols) === Math.floor((51 - 1) / mdCols)
// 							? "border-b-0"
// 							: ""
// 					}
//         `}
// 		>
// 			{skillsObj[idx]?.icon && (
// 				<img
// 					style={{ height: `${randomSize()}px` }}
// 					src={skillsObj[idx]?.icon.src}
// 					alt={skillsObj[idx]?.label}
// 					className='w-full h-full aspect-square object-contain'
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default SkillIcon;
