import React, {Component} from 'react';
import FormBtn from './../../Components/Form/FormBtn'

class UserInfo extends Component{
  render() {
    return(
      <section className="main-right-form floatfix">
        <form >
          <div className="form-group">
            <label>用户名</label>
            <input type="text" value="" disabled="disabled"/>
          </div>
          <div className="form-group">
            <label>性别</label>
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" name="sex" checked/>
                男
              </label>
              <label className="radio-inline">
                <input type="radio" name="sex" />
                女
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>学号</label>
            <input type="text" id="studentNumber" value="" />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input type="text"  id="readerEmail" value=""/>
          </div>
          <div className="form-group">
            <label>手机</label>
            <input type="text" id="readerPhone" value=""/>
          </div>
          <div className="form-group">
            <label>厚朴组</label>
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" className="" name="hopeGroup" value="" />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>专业</label>
            <input type="text"  id="readerMajor" value=""/>
          </div>
          <div className="main-right-form-file form-group">
            <label>头像</label>
            <img src="" alt="" id="js-upload-img"/>
            <input type="file" value="" id="js-upload-input"/>
          </div>
          <FormBtn/>
        </form>
      </section>
    )
  }
}

export default UserInfo;