'use strict';

class InputField extends React.Component {
    render() {
        return (
            <div className="form-group">
                <input className="form-control" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={e => this.props.updateValue(e)} />
            </div>
        )
    }
}

class NavButton extends React.Component {
    render() {
        const step = this.props.step;
        if (step === 1) {
            return (
                <div>
                    <button type="button" onClick={() => this.props.updateStep(step + 1)} className="btn btn-primary">Avanti</button>
                </div>
             )
        } else {
            return (
                <div className="d-flex">
                    <button className="mx-1" type="button" onClick={() => this.props.updateStep(step - 1)} className="btn btn-primary">Indietro</button>
                    <button className="mx-1" type="button" onClick={() => this.props.updateStep(step + 1)} className="btn btn-primary">Avanti</button>
                </div>
            )
        }
    }
}

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            email: '',
            tel: '',
            cf: '',
            residenza: ''
        };
    }

    handleChange(e) {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
    }

    handleUpdate = (step) => {
       this.setState({ step: step })
    }


    render() {

        switch (this.state.step) {
            case 1:
                return (
                    <div>
                        <h3>Step: {this.state.step}</h3>
                        <InputField type="text" name="firstname" placeholder="Inserisci nome" value={this.state.firstname ? this.state.firstname : ''} updateValue={this.handleChange} />
                        <InputField type="text" name="lastname" placeholder="Inserisci cognome" value={this.state.lastname} updateValue={this.handleChange} />
                        <InputField type="email" name="email" placeholder="Email" value={this.state.email} updateValue={this.handleChange} />
                        <NavButton step={this.state.step} updateStep={this.handleUpdate} />
                    </div>
                )
            case 2:

                return (
                    <div>
                        <h3>Step: {this.state.step}</h3>
                        <InputField type="tel" name="tel" placeholder="Numero di tel" value={this.state.tel} updateValue={this.handleChange}/>
                        <InputField type="text" name="cf" placeholder="Codice fiscale" value={this.state.cf} updateValue={this.handleChange}/>
                        <InputField type="text" name="residenza" placeholder="Residenza" value={this.state.residenza} updateValue={this.handleChange}/>
                        <NavButton step={this.state.step} updateStep={this.handleUpdate} />
                    </div>
                );

            default:
                return (
                    <div>
                        <h3>
                            Form Finito!
                        </h3>
                    </div>
                )

        }

    }

}

class FormContainer extends React.Component {
    render() {
        return (
            <form className="contantForm w-100">
                <StepForm />
            </form>

        )
    }
}


const domContainer = document.querySelector('#content');
ReactDOM.render(<FormContainer />, domContainer);