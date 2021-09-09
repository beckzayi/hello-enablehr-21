import React from 'react';

export default () => (
    <div>
        <div className="banner-bg hero-bg">
            <div className="banner-bg__text-wrap">
                <div className="banner-bg__text">
                    <h1 className="banner-bg__text-title">Let’s build beautiful software together</h1>
                    <div className="banner-bg__text-description">
                        Join a vibrant community of developers whose integrations with <b>enableHR</b> are shaping the
                        future of small businesses.
                    </div>
                    <div className="banner-bg__text-buttons">
                        <a href="/docs" className="btn btn-enablehr mr-3">
                            Get Started
                        </a>
                        <a href="/partner" className="btn btn-gray">
                            Partner with us
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section className="page-width-standard">
            <h2 className="text-center section-title mb-3">Start building an integration with enableHR</h2>
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="card-container text-center">
                        <img src="/images/service-resources.svg" className="w-100 mb-2" alt="Docs" />
                        <h3>Documentation</h3>
                        <div className="card-content mb-3">
                            Browse all the information you need to integrate with enableHR, including our getting
                            started guide
                        </div>
                        <div className="card-extra">
                            <a href="/docs" className="font-weight-bold rounded-sm">
                                Explore the Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="banner-bg banner-bg__dark">
            <div className="banner-bg__text-wrap">
                <div className="banner-bg__text">
                    <h1 className="banner-bg__text-title">Why wait?</h1>
                    <div className="banner-bg__text-description">
                        Read the getting started guide or sign up for an <b>enableHR</b> account to start building your
                        app.
                    </div>
                    <div className="banner-bg__text-buttons">
                        <a href="/docs" className="btn btn-enablehr mr-3">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
