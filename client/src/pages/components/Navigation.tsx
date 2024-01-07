import * as React from 'react';

export default function Navigation() {
	return (
		<div className="navbar bg-neutral">
			<div className="navbar-start">
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-xl">Online Clipboard</a>
			</div>
			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
				</button>
			</div>
		</div>
	);
}