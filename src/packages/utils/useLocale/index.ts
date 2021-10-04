import { computed, getCurrentInstance, inject, provide, ref } from 'vue';

import type { InjectionKey, PropType, Ref } from 'vue';
import English from './en';

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};
export type Language = {
  name: string;
  message: TranslatePair;
};

export const useLocaleProps = {
  locale: {
    type: Object as PropType<Language>
  }
};

type Translator = (...args: any[]) => string;

export type LocaleContext = {
  locale: Ref<Language>;
  lang: Ref<string>;
  t: Translator;
};
export const LocaleInjectionKey = 'ElLocaleInjection' as unknown as InjectionKey<LocaleContext>;
let localeObjCache: LocaleContext;

function translate(path, option, current) {
  const paths = path.split('.');
  let value;
  for (let i = 0, j = paths.length; i < j; i++) {
    const property = paths[i];
    value = current[property];
    if (i === j - 1) return template(value, option);
    if (!value) return '';
    current = value;
  }
}

function template(str: string, option) {
  if (!str || !option) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
}

export const useLocale = () => {
  const vm = getCurrentInstance();
  const props = vm.props as {
    locale: Language;
  };

  const locale = computed(() => props.locale || English);
  const lang = computed(() => locale.value.name);

  const _translator = (...args: any[]) => {
    const [path, option] = args;
    return translate(path, option, locale.value);
  };

  const t = (...args: any[]) => {
    return _translator(...args);
  };

  const provides = {
    locale,
    lang,
    t
  };

  // this could be broken if someone tries to do following:

  /**
   * <config-provider :locale="lang1">
   *   <config-provider :locale="lang2">
   *     Something calls modal component.
   *   </config-provider>
   * </config-provider>
   */
  localeObjCache = provides;
  provide(LocaleInjectionKey, provides);
};

export const localeProviderMaker = (locale: Language = English) => {
  const lang = ref(locale.name);
  const localeRef = ref(locale);
  return {
    lang,
    locale: localeRef,
    t: (...args: any[]) => {
      const [path, option] = args;
      return translate(path, option, localeRef.value);
    }
  };
};

export const useLocaleInject = () => {
  return inject(
    LocaleInjectionKey,
    localeObjCache || {
      lang: ref(English.name),
      locale: ref(English),
      t: (...args) => {
        const [path, option] = args;
        return translate(path, option, English);
      }
    }
  );
};
