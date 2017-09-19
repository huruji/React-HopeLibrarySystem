import React, {Component} from 'react';
import FormBtn from './../../Components/Form/FormBtn';

class ResetPassword extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <section className="main-right-form floatfix">
        <form action="">
          <div className="form-group">
            <label>新密码</label>
            <input type="password"  id="reset-password"/>
          </div>
          <div className="form-group">
            <label>密码确认</label>
            <input type="password" id="config-password"/>
          </div>
          <FormBtn/>
        </form>
      </section>
    )
  }
}

export default ResetPassword;