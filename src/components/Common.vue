<script type="text/javascript">
// 本地调的时候要加的
const contextPathT = 'http://c.onealert.com/'
// const contextPathT="http://ci5.test.onealert.com/";
const bodyStyle = 'bodyOrange'
// UserDTO ssoUser=(UserDTO)SSOClient.getLogin(request);
// const username=ssoUser.getContactName();
// const userId=ssoUser.getUser();
// const ownerId=ssoUser.getOwner();
// //ITSM的链接
// const itsmUrl = ssoUser.getUrl();
// //判断手机号是否异常的字段
// const phoneError = ssoUser.getPhoneError();
// 获取用户头像
// const photo = ssoUser.getPhoto();
// if (photo==null || "".equalsIgnoreCase(photo) || "null".equalsIgnoreCase(photo)) {
//   photo = "/console/ucid/img/defaultImg.png";
// }
//先写死的内容
const _CTX_OWNER= '374789707'
const _USER = '3186c8ae-75a1-4213-a441-d8bbe595e4d5'
const _USER_NAME = '党小润'
const _MY_UCID_URL = 'http://c.onealert.com/ucid/'
const _CURRENTMenu = '"alert"'
const _SOURCE = ''
const _ITSM_CONSOLE_PATH= 'http://c.onealert.com/'
const _IS_OWNER = 'true'
const _EXPIRED_TIME = '0'
const _IS_EXPIRED = 'false'
const _CTX_TOKEN = 'UPYOO_TOKEN=itsmTK_3266d363-50ca-40e2-a97d-6403fe599fda#'

// const phoneError = ssoUser.getPhoneError();
// 获取用户头像
// const photo = ssoUser.getPhoto();
// if (photo==null || "".equalsIgnoreCase(photo) || "null".equalsIgnoreCase(photo)) {
//   photo = "/console/ucid/img/defaultImg.png";
// }
const photo = '/console/ucid/img/defaultImg.png'
// ITSM页面链接
const ucidUrl = contextPathT + 'ucid/'
const itsmConsolePath = contextPathT
const _CTX_UCID_URL = contextPathT + 'ucid/'
const P_CTX_ALERT_URL = contextPathT + 'alert/'
const _CTX_ANALYSE_URL = contextPathT + 'analyse/'
const _CTX_EVENT_URL = 'http://10.128.5.211:38080/alert-south-api/'
const dashboardsUrl = itsmConsolePath
const openUrl = itsmConsolePath + 'open/'
// const globalUrl = "http://c.110monitor.com";
const _CTX_OPERATION_URL = itsmConsolePath + 'operation/'

const _CTX_ITSM_URL = itsmConsolePath + 'itsm-api/api/now/'
const _CTX_CONSOLE_URL = itsmConsolePath + 'console'
// String _CTX_CONSOLE_URL =itsmConsolePath;
const _CTX_CHARGE_URL = itsmConsolePath + 'itsm-charge/api/'
const _CTX_UCENTER_URL = itsmConsolePath + 'ucid/api/'
const _CTX_ALERT_URL=itsmConsolePath+'alert/'
// 本地测试
// const _CTX_GATEWAY_URL = com.upyoo.common.util.UtilProperties.getVariable("menu.gateway.url.public");
const _CTX_GATEWAY_URL = itsmConsolePath
const _CTX_COOPERATION_URL = _CTX_GATEWAY_URL + 'cooperation/cooperationapp/'
const _CTX_DEPLOY_TYPE = 'saas'
const licenseType = 'free'

// const expiredTime=ssoUser.getLicenseExpiredTime();
// const nowTime=System.currentTimeMillis();
// const isExpired = ssoUser.getExpired();
// if(ssoUser.getLicenseType()!=null&&!"".equalsIgnoreCase(ssoUser.getLicenseType().trim())&&!ssoUser.getExpired())
//   licenseType=ssoUser.getLicenseType();

// const token2=(String)request.getParameter(SSOClient.CUR_TOKEN);
// if(token2==null||"".equalsIgnoreCase(token2))
//   token2=(String)session.getAttribute(SSOClient.CUR_TOKEN);
// if(token2==null)
//   token2="";
// else
// token2=SSOClient.CUR_TOKEN+"="+token2;
// const token = token2.substring(token2.lastIndexOf("=")+1);
export default
{
  contextPathT,
  bodyStyle,
  ucidUrl,
  itsmConsolePath,
  _CTX_UCID_URL,
  P_CTX_ALERT_URL,
  _CTX_ANALYSE_URL,
  _CTX_EVENT_URL,
  dashboardsUrl,
  openUrl,
  _CTX_OPERATION_URL,
  _CTX_ITSM_URL,
  _CTX_CONSOLE_URL,
  _CTX_CHARGE_URL,
  _CTX_UCENTER_URL,
  _CTX_GATEWAY_URL,
  _CTX_COOPERATION_URL,
  _CTX_DEPLOY_TYPE,
  licenseType,
  _USER,
  _USER_NAME,
  _MY_UCID_URL,
  _CURRENTMenu,
  _SOURCE,
  _ITSM_CONSOLE_PATH,
  _IS_OWNER,
  _EXPIRED_TIME,
  _IS_EXPIRED,
  _CTX_TOKEN,
  _CTX_OWNER,
  _CTX_ALERT_URL
}
</script>
