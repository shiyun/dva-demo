import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import qs from 'qs';
import Cookies from 'js-cookie';
// import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCnData from 'locales/zh_cn';
import zhTwData from 'locales/zh_tw';
import enUsData from 'locales/en_us';

const locale = qs.parse(location.search && location.search.slice(1)).locale || '';
const localePrefix = locale.slice(0, locale.indexOf('-'));
let messages = {};

messages['zh-CN'] = zhCnData;
messages['zh-TW'] = zhTwData;
messages['zh-HK'] = zhTwData;
messages['en-US'] = enUsData;
messages['en']    = enUsData;
messages['zh']    = zhCnData;

addLocaleData(zh);

export default class I18n extends Component {    
  render() {
    const { defaultLang, children } = this.props;
    // 获取浏览器设置的语言
    const languages = navigator.languages;
    // cookie中存储的语言
    const cookiesLocale = Cookies.get('locale');
    const cookiesLang = messages[cookiesLocale] ? cookiesLocale : '';
    // URL参数locale中指定的语言
    const localesLang = messages[locale] ? locale : '';
    // 语言规则：URL -> cookie -> default setting -> browser setting;
    const currentLang = localesLang || cookiesLang || defaultLang || languages[0];
    Cookies.set('locale', currentLang);

    return (
      <IntlProvider locale={currentLang} messages={messages[currentLang]} >{{...children}}</IntlProvider>
    )
  }
}
