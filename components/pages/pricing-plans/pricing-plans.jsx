import Link from 'next/link';
import React from 'react';

const PricingPlansMain = () => {
	return (
		<>
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 lg-mb-25">
					<div className="pricing__area-item">
						<div className="pricing__area-item-price">
							<h6>Basic Plan</h6>
							<h2><span>$</span> 129<span> / Month</span></h2>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="flaticon-check"></i>Installation</li>
								<li><i className="flaticon-check"></i>Repair & Replacement</li>
								<li><i className="flaticon-check"></i>Monitoring Work</li>
								<li><i className="flaticon-close"></i>Panel Maintenance</li>
								<li><i className="flaticon-close"></i>24/7 Skilled Support</li>
							</ul>
						</div>
						<div className="pricing__area-item-btn">
							<Link className="btn-two" href="/request-quote">Purchase Plan</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 md-mb-25">
					<div className="pricing__area-item">
						<span>Save 20%</span>
						<div className="pricing__area-item-price">
							<h6>Standard Plan</h6>
							<h2><span>$</span> 207<span> / Month</span></h2>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="flaticon-check"></i>Installation</li>
								<li><i className="flaticon-check"></i>Repair & Replacement</li>
								<li><i className="flaticon-close"></i>Monitoring Work</li>
								<li><i className="flaticon-check"></i>Panel Maintenance</li>
								<li><i className="flaticon-check"></i>24/7 Skilled Support</li>
							</ul>
						</div>
						<div className="pricing__area-item-btn">
							<Link className="btn-two" href="/request-quote">Purchase Plan</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="pricing__area-item">
						<div className="pricing__area-item-price">
							<h6>Premium Plan</h6>
							<h2><span>$</span> 349<span> / Month</span></h2>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="flaticon-check"></i>Installation</li>
								<li><i className="flaticon-check"></i>Repair & Replacement</li>
								<li><i className="flaticon-check"></i>Monitoring Work</li>
								<li><i className="flaticon-check"></i>Panel Maintenance</li>
								<li><i className="flaticon-check"></i>24/7 Skilled Support</li>
							</ul>
						</div>
						<div className="pricing__area-item-btn">
							<Link className="btn-two" href="/request-quote">Purchase Plan</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default PricingPlansMain;