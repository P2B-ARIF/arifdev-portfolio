"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { request, gql } from "graphql-request";

// --- 1. Define Types for GraphQL Response ---
interface ContributionCalendar {
	totalContributions: number;
}

interface ContributionsCollection {
	contributionCalendar: ContributionCalendar;
}

interface User {
	contributionsCollection: ContributionsCollection;
}

interface GitHubData {
	user: User;
}

const GitHubCalendarCard = () => {
	const username = process.env.GITHUB_USERNAME;
	const token = process.env.GITHUB_TOKEN;
	const [contributions, setContributions] = useState(null);

	// console.log(process.env.GITHUB_TOKEN, "tokne");

	const fetchGitHubData = async () => {
		const endpoint = "https://api.github.com/graphql";

		const query = gql`
			query {
				user(login: "${username}") {
					contributionsCollection {
						contributionCalendar {
							totalContributions
						}
					}
				}
			}
		`;

		const headers = {
			Authorization: `Bearer ${token}`,
		};

		try {
			const data = await request<GitHubData>(endpoint, query, {}, headers);
			const count: any =
				data?.user?.contributionsCollection?.contributionCalendar
					?.totalContributions || 0;
			setContributions(count);
		} catch (err) {
			console.error("GitHub fetch error:", err);
		}
	};

	useEffect(() => {
		fetchGitHubData();
	}, []);

	console.log(contributions, "contributions");

	return (
		<div className='p-2 text-accent w-full flex flex-col '>
			<div className='flex justify-between items-center mb-4 h-full'>
				<h2 className=' text-lg font-semibold flex items-center gap-2'>
					<svg height='20' width='20' viewBox='0 0 16 16' fill='currentColor'>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54...' />
					</svg>
					GitHub activity
				</h2>
				<span className='text-sm text-gray-400'>
					{contributions} contributions in the last year
				</span>
			</div>
			<div className='overflow-x-auto'>
				<GitHubCalendar
					username={username}
					blockSize={11}
					blockMargin={2}
					colorScheme='dark'
					fontSize={14}
				/>
			</div>
			<div className='text-base items-end justify-self-end text-gray-400 mt-10'>
				Last pushed on{" "}
				{new Date().toLocaleDateString(undefined, {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</div>
		</div>
	);
};

export default GitHubCalendarCard;
