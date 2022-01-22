import React, { Component } from 'react';
import { FormErrors } from './Error';
import { Link } from "react-router-dom";
import { FaLock, FaEye } from 'react-icons/fa';

class Project extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      // type: 'input',
      // showPassword: null
    }
    // this.showPassword = this.showPassword.bind(this);
  }

  // handleClickShowPassword = (e) =>{
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.setState({
  //     type: this.state.type === 'input' ?'password' : 'input'
  //   })
  // }






  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="">
        <div className="">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={` ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email" className='text-sm font-medium leading-none text-gray-800'>Email address</label>
          <input type="email" required className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" 
          placeholder="e.g: john@gmail.com " 
          name="email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`mt-6 w-full ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password" className='text-sm font-medium leading-none text-gray-800'>Password</label>
          <input className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" 
          name="password"
          // type={this.state.type}
          type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
            {/* <span className='password-show'
            onClick={this.handleClickShowPassword}
            >{this.state.type === 'input' ? 'Hide' :'Show'}</span> */}
        </div>
            <div className='mt-8'>
                <Link className="" to='/Theme'>
                     <button className="group relative focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full" disabled={!this.state.formValid}>
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3" >
                           <FaLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                        </span>
                          Create my account
                      </button>
                 </Link>
              </div>
      </form>
    )
  }
}

export default Project;