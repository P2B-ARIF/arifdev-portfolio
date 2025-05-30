// import React from "react";

// import Image from "next/image";
// import demo from "./../../../assets/images/web-demo1.png";
// import demo2 from "@/assets/images/web-demo1.png";
// import Link from "next/link";

// const WorkCard = ({ idx, item }) => {
// 	return (
// 		<div className='rounded-2xl'>
// 			<div className='relative overflow-hidden rounded-2xl'>
// 				<Image
// 					src={demo2}
// 					alt='work'
// 					width={1000}
// 					height={1000}
// 					className='w-full h-[500px] 2xl:h-[300px] object-cover'
// 				/>
// 			</div>
// 			<div className='p-4 pt-3'>
// 				<h4 className='text-xl font-semibold'>{item.project_name} - 2022</h4>
// 				<div className='pt-1'>
// 					{item.skills?.map(skill => {
// 						return (
// 							<span className='m-1 ml-0 mr-2 text-xs px-2 py-1 rounded-full bg-gray-500 inline-block'>
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
