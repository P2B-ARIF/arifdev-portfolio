"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { request, gql } from "graphql-request";
import { Activity } from "lucide-react";

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
	const username = process.env.GITHUB_USERNAME || "P2B-ARIF";
	const token =
		process.env.GITHUB_TOKEN ||
		"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";
	const [contributions, setContributions] = useState(null);

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

	return (
		<div className='p-2 text-accent w-full flex flex-col '>
			<div className='flex justify-between items-center mb-4 h-full'>
				<h2 className=' md:text-lg font-semibold flex items-center gap-2'>
					<Activity size={18} />
					GitHub activity
				</h2>
				<span className='text-xs md:text-sm text-right ml-auto w-1/2 md:w-2/3 text-gray-400'>
					The Pulse of My Development: Real-Time Insights from GitHub Daily
					Coding Contributions
				</span>
			</div>
			<div className='overflow-x-auto'>
				<GitHubCalendar
					username={username}
					blockSize={10.9}
					blockMargin={2}
					colorScheme='dark'
					fontSize={14}
				/>
			</div>
			<div className='text-base items-end justify-self-end text-gray-400 mt-2 md:mt-10'>
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
