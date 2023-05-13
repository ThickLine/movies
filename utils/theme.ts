export type IThemeSettingOptions = 'dark' | 'light';

export type ITheme = 'dark' | 'light';

export const availableThemes: {
  key: IThemeSettingOptions;
  text: string;
}[] = [
    { key: 'light', text: 'Light' },
    { key: 'dark', text: 'Dark' },
  ];

export function ThemeManager() {
  // composable
  const themeUserSetting = useCookie<IThemeSettingOptions>('theme');

  // methods
  const getUserSetting = (): IThemeSettingOptions =>
    themeUserSetting.value || 'light';

  // state
  const themeSetting = useState<IThemeSettingOptions>('theme.setting', () =>
    getUserSetting()
  );
  const themeCurrent = useState<ITheme>('theme.current', () => 'light');

  // watchers
  const onThemeSettingChange = (themeSetting: IThemeSettingOptions) => {
    themeUserSetting.value = themeSetting;
    themeCurrent.value = themeSetting;

  };
  watch(themeSetting, (val) => onThemeSettingChange(val));

  // init theme
  const init = () => {
    themeSetting.value = getUserSetting();
  };
  onThemeSettingChange(themeSetting.value);

  // lifecycle
  onBeforeMount(() => init());

  return {
    themeSetting,
    themeCurrent,
    getUserSetting,
  };
}
