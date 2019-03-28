import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Card, Menu, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class myHeader extends Component {


  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  render() {
    return (
      <div>
        {/* Menu Starts Here */}
        <div style={{ top: '0' }}>
          <div>
            
          </div>
          <center>
            <Menu
              onClick={this.handleClick}
              mode="horizontal"
              theme="dark">
              <Menu.Item key="home" className="login-form-aligning-right">
                <NavLink to='/'><Icon type="home" theme='filled' />Home</NavLink>
              </Menu.Item>
              <Menu.Item key="litigation">
                <NavLink to=''><Icon type="book" theme='filled' />Menu Item here</NavLink>
              </Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper"><Icon type="plus-circle" theme='filled' /> Menu Item</span>}>
                <MenuItemGroup>
                  <Menu.Item key="onlineBidding">Sub Menu Item 1</Menu.Item>
                  <Menu.Item key="onlineLitigation">Sub Menu Item 2</Menu.Item>
                  <Menu.Item key="onlineCaseFilling">Sub Menu Item 3</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="aboutUs" ><NavLink to=''><Icon type="bulb" theme='filled' /> Menu Item</NavLink></Menu.Item>
              <Menu.Item key="contactUs"><NavLink to='/contactUs'><Icon type="phone" theme='filled' /> Menu Item</NavLink></Menu.Item>
              
            </Menu>
          </center>
        </div>
        {/* Menu Ends here */}
      </div>
    )
  }
}


export default myHeader;
