// import React from 'react';
// import {Link, Redirect} from 'react-router-dom';
//
// export class Login extends React.Component {
//   static propTypes = {
//     location: React.PropTypes.object
//   };
//
//   state = {
//     email: '',
//     password: '',
//     redirectToReferrer: false,
//     showErrors: false
//   };
//
//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     this.setState({showErrors: true});
//     if (this.validateForm()) {
//       auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
//         this.setState({redirectToReferrer: true});
//       }).catch(err => {console.error(err)});
//     }
//   }
//
//   validateForm = () => {
//     return (
//       this.state.email.length > 0 &&
//       this.state.password.length > 0
//     );
//   }
//
//   render() {
//     const {from} = this.props.location.state || '/';
//     const {redirectToReferrer, showErrors} = this.state;
//
//     return (
//       <main>
//         {redirectToReferrer && (
//           <Redirect to={from || '/days'}/>
//         )}
//         {from && (
//           <p>You must log in to view the page at <code>{from.pathname}</code></p>
//         )}
//         <Wrapper>
//           <Box>
//             <Form onSubmit={this.handleSubmit}>
//               <TextField
//                 value={this.state.email}
//                 label="Email"
//                 errorText="Email is required"
//                 showError={showErrors && this.state.email.length <= 0}
//                 onFieldChanged={e => this.setState({email: e.target.value})}
//               />
//               <TextField
//                 value={this.state.password}
//                 label="Password"
//                 errorText="Password is required"
//                 showError={showErrors && this.state.password.length <= 0}
//                 onFieldChanged={e => this.setState({password: e.target.value})}
//                 type="password"
//               />
//               <Button type="submit">Sign In</Button>
//               or <Link to="/register">Create Account</Link>
//             </Form>
//           </Box>
//         </Wrapper>
//       </main>
//     );
//   }
// }
