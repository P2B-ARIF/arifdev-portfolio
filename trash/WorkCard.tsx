// import React from "react";

// import Image from "next/image";
// import demo from "./../../../assets/images/web-demo1.png";
// import demo2 from "@/assets/images/web-demo1.png";
// import Link from "next/link";

// const WorkCard = ({ idx, item }) => {
// 	return (
// 		<div
// 			className={`p-2 border-white/20 border rounded-lg bg-white/10 backdrop-blur-lg `}
// 		>
// 			<div className='bg-primary rounded-lg overflow-hidden'>
// 				<div className={`rounded-xl overflow-hidden relative h-[250px]`}>
// 					<Image src={demo2} alt='' width={1000} height={1500} />
// 				</div>
// 				<h1 className='text-2xl font-bold p-4'>{item.project_name}</h1>

// 				{/* <p className='mt-2 text-sm'>{item.description}</p> */}

// 				<div className='mt-2'>
// 					{item.skills?.map(skill => {
// 						return (
// 							<span className='m-1 text-xs px-2 py-1 rounded-full bg-gray-500 inline-block'>
// 								{skill}
// 							</span>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default WorkCard;
