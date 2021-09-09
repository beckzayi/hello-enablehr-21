import React from 'react';

export default () => (
    <div className="docs">
        <div className="docs-bg">
            <div className="docs-bg__text-wrap">
                <div className="docs-bg__text">
                    <div className="docs-bg__searchbar">
                        <span className="icon-search"></span>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </div>
        <div className="docs-quickstart-block">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="border border-gray rounded-sm box-shadow">
                            <div className="card-container">
                                <a href="/get-started" className="card-title h3">
                                    Get Started
                                    <span className="icon icon-chevron-right"></span>
                                </a>
                                <div className="card-content mb-3">
                                    Everything you need to get up and running with our API.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="border border-gray rounded-sm box-shadow">
                            <div className="card-container">
                                <a href="/authentication" className="card-title h3">
                                    Auth
                                    <span className="icon icon-chevron-right"></span>
                                </a>
                                <div className="card-content mb-3">
                                    Learn about application auth for our API connection.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="docs-explore-block dev-section-block">
            <div className="container">
                <h2 className="text-center pb-4">Explore our APIs</h2>
                <div className="row">
                    <div className="col">
                        <div className="card-container">
                            <a href="/" className="card-title font-weight-bold text-center text-dark m-3 p-2 font-bold">
                                <div className="mt-3">WHS</div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-container">
                            <a href="/" className="card-title font-weight-bold text-center text-dark m-3 p-2 font-bold">
                                <div className="mt-3">Employees</div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-container">
                            <a href="/" className="card-title font-weight-bold text-center text-dark m-3 p-2 font-bold">
                                <div className="mt-3">Documents</div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-container">
                            <a href="/" className="card-title font-weight-bold text-center text-dark m-3 p-2 font-bold">
                                <div className="mt-3">Reviews</div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-container">
                            <a href="/" className="card-title font-weight-bold text-center text-dark m-3 p-2 font-bold">
                                <div className="mt-3">Contractors</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
