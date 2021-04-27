import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Wallets</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    新規作成
                        </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createwallet">Wallet</Link>
                                    <button disabled className="dropdown-item">トランザクション</button>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>収支(Total)</h4>
                                    <h1>お金</h1>
                                </div>
                            </div>
                            <hr />
                            {
                                //<!-- Project Item Component -->
                            }

                            <DashboardItem />
                            <DashboardItem />
                            {
                                //<!-- End of Project Item Component -->
                            }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard