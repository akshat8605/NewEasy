import './Slidebar.css';
import 'antd/dist/antd.css'
import React, { Fragment } from 'react'
import { Keyframes, animated } from 'react-spring/renderprops'
import { Avatar, Form, Icon, Input } from 'antd'
import Button from '@material-ui/core/Button';
import delay from 'delay'

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ delay: 0, x: -100 })
  },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: -100, opacity: 0, delay: 0 },
  ],
  open: { x: -10, opacity: 1, delay: 100 },
  close: { x: -200, opacity: 0, delay: 0 },
})

const items = [
  <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
  <Input
    size="small"
    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    placeholder="Username"
  />,
  <Input
    size="small"
    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
    type="password"
    placeholder="Password"
  />,
  <Fragment>
    <a className="login-form-forgot" href="#" children="Forgot password" />
    <Button
      size="small"
      type="primary"
      htmltype="submit"
      className="login-form-button"
      children="Log in"
      style ={{color:"white"}}
    />
  </Fragment>,
  <ul style={{listStyleType: "none"}}>
    <li><p className=" ph3 pv2 white input-reset  b--black bg-transparent grow pointer f6 dib">JOBS</p></li>
    <li><p className=" ph3 pv2 white input-reset  b--black bg-transparent grow pointer f6 dib">COMPETITION</p></li>
    <li><p className=" ph3 pv2 white input-reset  b--black bg-transparent grow pointer f6 dib">NEWS</p></li>
    <li><p className=" ph3 pv2 white input-reset  b--black bg-transparent grow pointer f6 dib">REGISTER</p></li>
  </ul>
]

export default class Slidebar extends React.Component {

  render() {
    const state = this.props.state === true? 'open': 'close'

    return (
      <div style={{"background":"red",marginTop : "80px"}}>
        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div
              className="sidebar"
              style={{
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                background: "light-yellow"
              }}>
              <Content
                native
                items={items}
                keys={items.map((_, i) => i)}
                state={state}>
                {(item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props,
                    }}>
                    <Form.Item className={i === 0 ? 'middle' : ''}>
                      {item}
                    </Form.Item>
                  </animated.div>
                )}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </div>
    )
  }
}
