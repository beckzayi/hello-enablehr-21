import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <div className="docs">
        <div className="row">
            <h1 className="hp-title text-center">Welcome to enableHR API documentation portal</h1>
            <div className="col-sm-12 col-md-4 hp_column">
                <div className="hp_column_wrapper">
                    <div className="hp_column_icon hp_column_icon--doc"></div>
                    <div className="hp_column_title">
                        <Link to="/docs">What is enableHR API?</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 hp_column">
                <div className="hp_column_wrapper">
                    <div className="hp_column_icon  hp_column_icon--dev"></div>
                    <div className="hp_column_title">
                        <Link to="/development">How to start using enableHR API?</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 hp_column">
                <div className="hp_column_wrapper">
                    <div className="hp_column_icon  hp_column_icon--faq"></div>
                    <div className="hp_column_title">
                        <Link to="/faqs">Frequently Asked Questions</Link>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="main-title text-center">It&apos;s nicer when systems work together</h1>
        <p className="main-subtitle text-center">
            Software that tries to do everything, for every part of a business, might do most things ok, but won&aspo;t
            do all of them really well. That&aspo;s why we believe the best approach for businesses is to use different
            best-in-class systems, each extremely good at what it does, and seamlessly integrate them using an{' '}
            <b>API (Application Programming Interface)</b> - a handy (though complex) bit of code that lets developers
            connect systems to share and synchronise data.
        </p>
    </div>
);
