import React from 'react';

const References = ({ references }) => (
	<section className="section">
	  <header>
		<h2 className='section-title'>References</h2>
	  </header>
	  <section id="references">
		{references.map((reference,index) => (
		<div className="item" key={reference.reference + index}>
		  <blockquote className="reference">
			&#8220;&#32;{reference.reference}&#32;&#8221;
		  </blockquote>
		  <div className="name">
			{reference.name}
		  </div>
		</div>
		))}</section>
	</section>);

export default References;
