class NavBar extends React.Component {

    render() {
        return (
            <div className="it-header-slim-wrapper" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="it-header-slim-wrapper-content">
                                <a className="d-none d-lg-block navbar-brand" href="/">Ente appartenenza/Owner</a>
                                <div className="nav-mobile">
                                    <nav>
                                        <a className="it-opener d-lg-none" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="menu1">
                                            <span>Ente appartenenza/Owner</span>
                                            <svg className="icon">
                                                <use href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                        </a>
                                        <div className="link-list-wrapper collapse" id="menu1">
                                            <ul className="link-list">
                                                <li><a className="list-item" href="/">Form</a></li>
                                                <li><a className="list-item" href="/FormApi">FormApi</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="it-header-slim-right-zone">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                            <span>Ita</span>
                                            <svg className="icon d-none d-lg-block">
                                                <use href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="link-list-wrapper">
                                                        <ul className="link-list">
                                                            <li><a className="list-item" href="#"><span>ITA</span></a></li>
                                                            <li><a className="list-item" href="#"><span>ENG</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="it-access-top-wrapper">
                                        <a className="btn btn-primary btn-sm" href="#">Accedi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

const nav = document.querySelector('#navbar');
ReactDOM.render(<NavBar />, nav);