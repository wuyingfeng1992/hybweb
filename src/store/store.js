
import {user} from '../assets/js/contants'

import {
  userLoginRequest,

} from "../axioser/user";

const state = {
  loginInfo:null,
  //loginInfo: getLoginInfo(),//立刻执行
  pageMenu:[
    {
      id: 'home',
      name: '首页',
    },
    {
      id: 'orderAssetManage',
      name: '订单/资产管理',
    },
    {
      id: 'transferAuditManage',
      name: '转让审核管理',
    },
    {
      id: 'partnershipManage',
      name: '合作关系管理',
    },
    {
      id: 'licenseManagement',
      name: '授权管理',
    },
  ],
  treeData: [{
    treeId: 'color',
    id: 'color',
    name: '颜色',
    children: []
  }, {
    treeId: 'font',
    id: 'font',
    name: '字体',
    children: []
  }, {
    treeId: 'space',
    id: 'space',
    name: '间距',
    children: []
  }, {
    treeId: 'radius',
    id: 'radius',
    name: '圆角',
    children: []
  }],


  //loginInfo: window.sessionStorage.getItem('loginInfo')!=='undefined'?JSON.parse(window.sessionStorage.getItem('loginInfo')):{},
}

const actions = {
  async userLoginAction({commit, state}, preload) {
    console.log('加载数据的', preload);
    let res = await userLoginRequest(preload)
  },

};
const mutations = {
  setLoginInfo(state, preload) {
    state.loginInfo = preload;
  },


}
const getters = {
}

export {state, mutations, actions, getters}
