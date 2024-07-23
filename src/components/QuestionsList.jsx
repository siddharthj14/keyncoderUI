import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
const QuestionsList = ({ stepNo, title, questions }) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const [questionsState, setQuestionsState] = useState(questions);

	const toggleDone = (index) => {
		const newQuestions = [...questionsState];
		newQuestions[index].done = !newQuestions[index].done;
		setQuestionsState(newQuestions);
	};

	const toggleFlagged = (index) => {
		const newQuestions = [...questionsState];
		newQuestions[index].flagged = !newQuestions[index].flagged;
		setQuestionsState(newQuestions);
	};

	return (
		<div className='mb-4 bg-transparent text-black px-8'>
			<div className='flex justify-between p-6 bg-gray-800 text-white rounded-lg shadow-md'>
				<h1>
					Step {stepNo} : {title}
				</h1>
				<span className='flex items-center'>
					<p className='border border-white rounded-full bg-gray-900 px-2'>
						{questionsState.filter((q) => q.done).length} / {questionsState.length}
					</p>
					<span
						className='border border-white rounded-md font-semibold text-orange-400 px-[5px] cursor-pointer ml-2'
						onClick={toggleVisibility}>
						<FontAwesomeIcon icon={faCircleChevronDown} />
					</span>
				</span>
			</div>
			{isVisible && (
				<table className='min-w-full bg-white border-black border'>
					<thead>
						<tr>
							<th className='py-2 px-4  border border-gray-300'>Status</th>
							<th className='py-2 px-4 border border-gray-300'>Problem Name</th>
							<th className='py-2 px-4 border border-gray-300'>Practice Link</th>
							<th className='py-2 px-4 border border-gray-300'>Difficulty</th>
							<th className='py-2 px-4 border border-gray-300'>Flag</th>
						</tr>
					</thead>
					<tbody>
						{questionsState.map((question, index) => (
							<tr key={index}>
								<td className='py-2 px-4 text-center border border-gray-300'>
									<input
										type='checkbox'
										checked={question.done}
										onChange={() => toggleDone(index)}
									/>
								</td>
								<td className='py-2 px-4   border border-gray-300'>{question.name}</td>
								<td className='py-2 px-4 text-center  border border-gray-300'>
									<a href={question.link} target='_blank' rel='noopener noreferrer'>
										<img
											src={question.logo}
											alt='Practice Site Logo'
											className='h-6 inline'
										/>
									</a>
								</td>
								<td
									className='py-2 px-4  border border-gray-300'
									style={{ color: getDifficultyColor(question.difficulty) }}>
									{question.difficulty}
								</td>
								<td className='py-2 px-4 text-center  border border-gray-300'>
									<input
										type='checkbox'
										checked={question.flagged}
										onChange={() => toggleFlagged(index)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

const getDifficultyColor = (difficulty) => {
	switch (difficulty) {
		case "Easy":
			return "green";
		case "Medium":
			return "yellow";
		case "Hard":
			return "red";
		default:
			return "black";
	}
};

export default QuestionsList;
