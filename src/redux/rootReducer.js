// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import kanban from '@src/views/apps/kanban/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import customerSlice from './slices/home/customerSlice'
import loginSlice from './slices/auth/loginSlice'
import registerSlice from './slices/auth/registerSlice'
import businessSlice from './slices/home/businessSlice'
import financialSlice from './slices/home/financialSlice';
import activitySlice from './slices/home/activitySlice';
import roleSlice from './slices/role/roleSlice'
import permissionSlice from './slices/permission/permissionSlice'
import userSlice from './slices/auth/userSlice';
import classSlice from "./slices/classSlice"

const rootReducer = {
  classSlice,
  auth,
  todo,
  chat,
  email,
  users,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  // CustomerAsync
  customerDirectory: customerSlice,
  login: loginSlice,
  register: registerSlice,
  businessDirectory: businessSlice,
  activity: activitySlice,
  financial: financialSlice,
  role: roleSlice,
  permission: permissionSlice,
  user: userSlice
}

export default rootReducer
