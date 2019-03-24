let proxyapi='/proxyapi';
if (process.env.NODE_ENV === 'development') {
  // dev
} else {
  // build
  //proxyapi='http://uxc-beta.rnd.huawei.com/uxarp/api';
  proxyapi='http://uxc.rnd.huawei.com/uxarp/api';
}
//"build": "cross-env NODE_ENV=production webpack --config build/webpack.prod.conf.js && node build/build.js"
export {proxyapi};

