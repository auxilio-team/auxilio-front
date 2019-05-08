import { API_ROOT } from '.';
import Request from './request';

const PATH = '/UserAccounts';
const FEEDBACK_PATH = '/UserFeedbacks';
const NOTIFICATION_SUBSCRIPTION_PATH = '/NotificationSubscriptions';
const NOTIFICATION_CONFIG_PATH = '/NotificationConfigs';

const UserAccountAPI = {
  get(id) {
    return Request.get(`${API_ROOT}${PATH}/${id}`);
  },
  all(filter) {
    return Request.get(`${API_ROOT}${PATH}`, {
      params: filter
    });
  },
  create(data) {
    return Request.post(`${API_ROOT}${PATH}`, data);
  },
  update(data) {
    return Request.patch(`${API_ROOT}${PATH}/${data.id}`, data);
  },
  remove(id) {
    return Request.delete(`${API_ROOT}${PATH}/${id}`);
  },
  logout() {
    return Request.post(`${API_ROOT}${PATH}/logout-user`);
  },
  login(email, password) {
    return Request.post(`${API_ROOT}${PATH}/login`, {
      email,
      password
    });
  },
  registerMember(data) {
    return Request.post(`${API_ROOT}${PATH}/register-member`, data);
  },
  reset(email, userInfo) {
    return Request.post(`${API_ROOT}${PATH}/app-password-reset-request`, {
      email,
      userInfo
    });
  },
  changePassword(resetToken, newPassword) {
    return Request.post(`${API_ROOT}${PATH}/app-verify-reset-password`, {
      resetToken,
      newPassword
    });
  },
  getMyPosts(limit, skip, userAccountId = null) {
    const data = userAccountId ? { userAccountId, limit, skip } : { limit, skip };
    return Request.post(`${API_ROOT}${PATH}/my-posts`, data);
  },
  getMyAgendas(limit, skip, userAccountId = null) {
    const data = userAccountId ? { userAccountId, limit, skip } : { limit, skip };
    return Request.post(`${API_ROOT}${PATH}/my-agendas`, data);
  },
  getMyFeedbacks(limit, skip, userAccountId = null) {
    const data = userAccountId ? { userAccountId, limit, skip } : { limit, skip };
    return Request.post(`${API_ROOT}${PATH}/my-feedbacks`, data);
  },
  getMyReplies(limit, skip, userAccountId = null) {
    const data = userAccountId ? { userAccountId, limit, skip } : { limit, skip };
    return Request.post(`${API_ROOT}${PATH}/my-replies`, data);
  },
  getMySystemFeedbacks(limit, skip, userAccountId = null) {
    const data = userAccountId ? { userAccountId, limit, skip } : { limit, skip };
    return Request.post(`${API_ROOT}${PATH}/my-system-feedbacks`, data);
  },
  getProfile(userAccountId = null) {
    const data = userAccountId ? { userAccountId } : {};
    return Request.post(`${API_ROOT}${PATH}/get-user-profile`, data);
  },
  getMyStatus(userAccountId = null) {
    const data = userAccountId ? { userAccountId } : {};
    return Request.post(`${API_ROOT}${PATH}/my-status`, data);
  },
  updatMyProfile(data) {
    return Request.patch(`${API_ROOT}${PATH}/update-my-account`, data);
  },
  search(data) {
    return Request.post(`${API_ROOT}${PATH}/search`, data);
  },
  feedback(data) {
    return Request.post(`${API_ROOT}${PATH}/feedback`, data);
  },
  deleteSystemFeedback(id) {
    return Request.delete(`${API_ROOT}${FEEDBACK_PATH}/${id}`);
  },
  subscribeForNotification(data) {
    return Request.post(`${API_ROOT}${NOTIFICATION_SUBSCRIPTION_PATH}/subscribe`, data);
  },
  saveNotificationConfig(data) {
    return Request.post(`${API_ROOT}${NOTIFICATION_CONFIG_PATH}/update-config`, { configData: data });
  },
  getNotificationConfig() {
    return Request.get(`${API_ROOT}${NOTIFICATION_CONFIG_PATH}/get-config`);
  }
};

export default UserAccountAPI;
