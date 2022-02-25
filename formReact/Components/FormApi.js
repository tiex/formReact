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
                <div className="d-flex justify-content-end">
                    <button type="button" onClick={() => this.props.updateStep(step + 1)} className="btn btn-outline-primary">Avanti</button>
                </div>
            )
        } else {
            return (
                <div className="d-flex justify-content-end">
                    <button type="button" onClick={() => this.props.updateStep(step - 1)} className="btn btn-outline-secondary mx-1">Indietro</button>
                    <button type="submit" onClick={() => this.props.updateStep(step + 1)} className="btn btn-outline-primary mx-1">Avanti</button>
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
            error: null,
            isLoaded: false,
            form: {
                firstname: '',
                lastname: '',
                email: '',
                tel: '',
                cf: '',
                residenza: ''
            }
        };
    }

    componentDidMount() {
        fetch("/api/Values")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        form: 
                            {
                                firstname: result[0],
                                lastname: result[1],
                                email: result[2],
                                tel: result[3],
                                cf: '',
                                residenza: ''
                            }
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    handleChange(e) {
        const value = e.target.value
        this.setState({
            form: {
                ...this.state.form,
                   [e.target.name]: value
               }
        });
    }

    handleUpdate = (step) => {
        this.setState({ step: step })
        if (step === 3) {
            this.handleSubmit()
        }
    }

    handleSubmit(event) {
        alert('firstname: ' + this.state.form.firstname);
    }


    render() {

        switch (this.state.step) {
            case 1:
                return (
                    <div>
                        <h3>Step: {this.state.step}</h3>
                        <InputField type="text" name="firstname" placeholder="Inserisci nome" value={this.state.form.firstname ? this.state.form.firstname : ''} updateValue={this.handleChange} />
                        <InputField type="text" name="lastname" placeholder="Inserisci cognome" value={this.state.form.lastname} updateValue={this.handleChange} />
                        <InputField type="email" name="email" placeholder="Email" value={this.state.form.email} updateValue={this.handleChange} />
                        <NavButton step={this.state.step} updateStep={this.handleUpdate} />
                    </div>
                )
            case 2:

                return (
                    <div>
                        <h3>Step: {this.state.step}</h3>
                        <InputField type="tel" name="tel" placeholder="Numero di tel" value={this.state.form.tel} updateValue={this.handleChange} />
                        <InputField type="text" name="cf" placeholder="Codice fiscale" value={this.state.form.cf} updateValue={this.handleChange} />
                        <InputField type="text" name="residenza" placeholder="Residenza" value={this.state.form.residenza} updateValue={this.handleChange} />
                        <NavButton step={this.state.step} updateStep={this.handleUpdate} />
                    </div>
                );

            default:
                return (
                    <div>
                        <h3>
                           Grazie per aver completato il form!
                        </h3>
                    </div>
                )

        }

    }

}

class FormContainer extends React.Component {




    render() {
        return (
            <form action="https://www.youtube.com/results" onSubmit={this.handleSubmit} className="contantForm w-100">
                <StepForm />
            </form>

        )
    }
}


const domContainer = document.querySelector('#formApi');
ReactDOM.render(<FormContainer />, domContainer);