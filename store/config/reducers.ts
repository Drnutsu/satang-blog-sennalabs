import { createActions, handleActions } from 'redux-actions'
import { getUserPreferredLanguage } from 'utils/language'
import { AnyAction } from 'redux'

const options = {
  prefix: 'CONFIG',
}

type ConfigActionsType = {
  [key: string]: Record<string, any>
}

export const configActions: ConfigActionsType = createActions(
  {
    UPDATE: {
      LANGUAGE: undefined,
      CURRENCY: undefined,
      BALANCE_VISIBLE: undefined,
      ZERO_BALANCE_VISIBLE: undefined,
      DOWNLOAD_BANNER_VISIBLE: undefined,
      GOOGLE_PLAY_MODAL_LAST_SEEN: undefined,
    },
  },
  options,
)

export const configReducer = handleActions(
  {
    [configActions.update.language]: (state: any, action: AnyAction) => ({
      ...state,
      language: action.payload.language,
    }),

    [configActions.update.currency]: (state: any, action: AnyAction) => ({
      ...state,
      currency: action.payload,
    }),
    [configActions.update.balanceVisible]: (state: any, action: AnyAction) => ({
      ...state,
      balanceVisible: action.payload,
    }),
    [configActions.update.zeroBalanceVisible]: (
      state: any,
      action: AnyAction,
    ) => ({
      ...state,
      zeroBalanceVisible: action.payload,
    }),
    [configActions.update.downloadBannerVisible]: (
      state: any,
      action: AnyAction,
    ) => ({
      ...state,
      downloadBannerVisible: action.payload,
    }),
    [configActions.update.googlePlayModalLastSeen]: (
      state: any,
      action: AnyAction,
    ) => ({
      ...state,
      googlePlayModalLastSeen: action.payload,
    }),
  },
  {
    language: getUserPreferredLanguage(),
    currency: 'usd',
    balanceVisible: false,
    zeroBalanceVisible: false,
    downloadBannerVisible: true,
    googlePlayModalLastSeen: 0,
  },
  options,
)
