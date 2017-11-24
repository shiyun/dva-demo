/*
import React, { Component } from 'react';
//import { IntlProvider, addLocaleData } from 'react-intl';
import qs from 'qs';
import Cookies from 'js-cookie';
//import en from 'react-intl/locale-data/en';
//import zh from 'react-intl/locale-data/zh';
import zh_CN from 'locales/zh_cn.json';
import zh_TW from 'locales/zh_tw.json';
import en_US from 'locales/en_us.json';

const locale = qs.parse(location.search && location.search.slice(1)).locale || '';
const localePrefix = locale.slice(0, locale.indexOf('-'));
let messages = {};

messages['zh-CN'] = zh_CN;
messages['zh-TW'] = zh_TW;
messages['zh-HK'] = zh_TW;
messages['en-US'] = en_US;
messages['en']    = en_US;
messages['zh']    = zh_CN;

//addLocaleData([...zh,...en]);


export default class I18n extends Component {
  render() {
    const { defaultLang, children } = this.props;
    // 获取浏览器设置的语言
    const languages = navigator.languages;
    // cookie中存储的语言
    Cookies.get('locale');
    const cookiesLocale = Cookies.get('locale');
    const cookiesLang = messages[cookiesLocale] ? cookiesLocale : '';
    // URL参数locale中指定的语言
    const localesLang = messages[locale] ? locale : '';
    // 语言规则：URL -> cookie -> default setting -> browser setting;
    const currentLang = localesLang || cookiesLang || defaultLang || languages[0];

    return (
      <IntlProvider locale={currentLang} messages={messages[currentLang]} >{{...children}}</IntlProvider>
    )
  }
}
*/